"use client";

import React, { useState, useEffect, useRef } from 'react';
import api from '@/lib/api';

interface QueryChunk {
  filename: string;
  chunk_text: string;
  score: number;
}

export default function QueryForm() {
  const [jobDescription, setJobDescription] = useState('');
  const [chunks, setChunks] = useState<QueryChunk[]>([]);
  const [message, setMessage] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedResume, setSelectedResume] = useState<QueryChunk | null>(null);
  const [expandedChunks, setExpandedChunks] = useState<Set<number>>(new Set());

  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chunks.length > 0 && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chunks]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (jobDescription.trim().length < 10) {
      setMessage('Please enter a more descriptive job description (min. 10 characters).');
      return;
    }

    setLoading(true);
    setMessage('Searching for resumes...');
    setChunks([]);
    setEvaluation('');

    try {
      const response = await api.post('/query', { job_description: jobDescription });
      const data = response?.data;
      setChunks(data?.chunks ?? []);
      setEvaluation(data?.answer ?? '');
      setMessage(`Found ${data?.chunks?.length ?? 0} relevant resume chunks.`);
    } catch (error: any) {
      console.error('Query error:', error);
      setMessage('Query failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (filename: string) => {
    try {
      const res = await api.get(`/download/${filename}`);
      const downloadUrl = res.data.url;
      window.open(downloadUrl, '_blank');
    } catch (err) {
      alert("Failed to generate download link.");
      console.error(err);
    }
  };

  const toggleExpand = (index: number) => {
    setExpandedChunks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  const ResumeModal = ({
    filename,
    content,
    onClose,
  }: {
    filename: string;
    content: string;
    onClose: () => void;
  }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
      <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-xl max-w-2xl w-full p-6 relative animate-slide-up">
        <button
          className="absolute top-3 right-3 text-gray-500 dark:text-neutral-400 hover:text-red-600 text-lg"
          onClick={onClose}
          aria-label="Close"
        >
          ✖
        </button>
        <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Resume Preview: {filename}</h3>
        <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-neutral-300 max-h-[500px] overflow-y-auto bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border border-gray-200 dark:border-neutral-700">
          {content}
        </pre>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 p-8 rounded-2xl shadow-lg my-10 animate-fade-in transition-colors">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
        Query Resumes with Job Description
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
            Enter Job Description
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            rows={6}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
            placeholder="e.g., Senior Software Engineer with expertise in Python, Machine Learning, and AWS..."
          />
        </div>

        <button
          type="submit"
          disabled={loading || !jobDescription.trim()}
          className="w-full px-4 py-2 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-semibold shadow hover:scale-105 hover:bg-blue-700 dark:hover:bg-blue-600 transition-transform duration-300 disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Find Relevant Resumes'}
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-center text-sm font-medium ${message.includes('Found') ? 'text-emerald-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}

      {evaluation && (
        <div className="mt-8 bg-blue-50 dark:bg-neutral-800 border border-blue-200 dark:border-neutral-700 p-6 rounded-xl shadow animate-slide-up">
          <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-300">Evaluation Summary</h3>
          <p className="whitespace-pre-line text-gray-800 dark:text-neutral-300">{evaluation}</p>
        </div>
      )}

      {chunks.length > 0 && (
        <div ref={resultsRef} className="mt-10 border-t pt-6 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 text-center">Matching Resume Chunks</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {chunks.map((chunk, index) => {
              const isExpanded = expandedChunks.has(index);
              const previewText = isExpanded ? chunk.chunk_text : chunk.chunk_text.slice(0, 400) + (chunk.chunk_text.length > 400 ? '...' : '');

              return (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 animate-slide-up flex flex-col justify-between"
                >
                  <div>
                    <p className="font-semibold text-blue-800 dark:text-blue-400 mb-1">Filename: <span className="text-gray-800 dark:text-neutral-300">{chunk.filename}</span></p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded-full font-medium">
                        Match Score: {chunk.score.toFixed(4)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-800 dark:text-neutral-300 whitespace-pre-line mb-3">
                      {previewText}
                    </p>
                    {chunk.chunk_text.length > 400 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {isExpanded ? 'Show Less' : 'Show More'}
                      </button>
                    )}
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => handleDownload(chunk.filename)}
                      className="flex-1 text-sm px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => {
                        setSelectedResume(chunk);
                        setShowModal(true);
                      }}
                      className="flex-1 text-sm px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition"
                    >
                      Preview
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {showModal && selectedResume && (
        <ResumeModal
          filename={selectedResume.filename}
          content={selectedResume.chunk_text}
          onClose={() => {
            setShowModal(false);
            setSelectedResume(null);
          }}
        />
      )}
    </div>
  );
}
