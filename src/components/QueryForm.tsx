'use client';

import React, { useState } from 'react';
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
  const [evaluation, setEvaluation] = useState(''); // For the 'answer' part
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!jobDescription.trim()) {
      setMessage('Please enter a job description.');
      return;
    }

    setLoading(true);
    setMessage('Searching for resumes...');
    setChunks([]);
    setEvaluation('');

    try {
      const response = await api.post('/query', {
        job_description: jobDescription,
      });

      const data = response?.data;

      const returnedChunks = data?.chunks ?? [];
      const returnedAnswer = data?.answer ?? '';

      setChunks(returnedChunks);
      setEvaluation(returnedAnswer);
      setMessage(`Found ${returnedChunks.length} relevant resume chunks.`);
    } catch (error: any) {
      console.error('Query error:', error);
      if (error.response) {
        setMessage(`Query failed: ${error.response.data.detail || error.response.statusText}`);
      } else if (error.request) {
        setMessage('Query failed: No response from server. Is FastAPI running?');
      } else {
        setMessage(`Query failed: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Query Resumes with Job Description</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">
            Enter Job Description:
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            rows={6}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., Senior Software Engineer with expertise in Python, Machine Learning, and AWS..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading || !jobDescription.trim()}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700
                     disabled:bg-green-300 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 
                          1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Searching...
            </>
          ) : (
            'Find Relevant Resumes'
          )}
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-center ${message.includes('Found') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}

      {evaluation && (
        <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-300">
          <h3 className="text-lg font-semibold mb-2 text-blue-900">Evaluation Summary:</h3>
          <p className="whitespace-pre-line text-gray-800">{evaluation}</p>
        </div>
      )}

      {chunks.length > 0 && (
        <div className="mt-8 border-t pt-4">
          <h3 className="text-xl font-semibold mb-3">Matching Resume Chunks:</h3>
          <div className="space-y-4">
            {chunks.map((chunk, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <p className="font-medium text-blue-800">Filename: {chunk.filename}</p>
                <p className="text-sm text-gray-600">Score: {chunk.score.toFixed(4)}</p>
                <p className="mt-2 text-gray-800 whitespace-pre-line">{chunk.chunk_text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
