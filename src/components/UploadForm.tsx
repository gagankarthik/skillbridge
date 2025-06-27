'use client';

import React, { useState } from 'react';
import api from '../lib/api';
import { CloudArrowUpIcon } from '@heroicons/react/24/solid';

export default function UploadForm() {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
    setMessage('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFiles || selectedFiles.length === 0) {
      setMessage('Please select at least one file to upload.');
      return;
    }

    setLoading(true);
    setMessage('Uploading files...');

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    try {
      const response = await api.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message || 'Files uploaded successfully!');
    } catch (error: any) {
      console.error('Upload error:', error);
      if (error.response) {
        setMessage(`Upload failed: ${error.response.data.detail || error.response.statusText}`);
      } else if (error.request) {
        setMessage('Upload failed: No response from server.');
      } else {
        setMessage(`Upload failed: ${error.message}`);
      }
    } finally {
      setLoading(false);
      setSelectedFiles(null);
      if (event.target instanceof HTMLFormElement) {
        event.target.reset();
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 p-8 rounded-2xl shadow-lg my-12 animate-fade-in transition-colors">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
        Upload Resumes
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="files" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2">
            Select Resume Files
          </label>
          <div className="relative border-2 border-dashed border-blue-300 dark:border-blue-500 rounded-xl p-6 text-center bg-blue-50 dark:bg-neutral-800 hover:bg-blue-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer">
            <input
              type="file"
              id="files"
              name="files"
              multiple
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <CloudArrowUpIcon className="h-10 w-10 text-blue-500 dark:text-blue-400 mx-auto mb-3" />
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              Click or drag files here to upload<br />
              <span className="text-xs text-gray-400 dark:text-neutral-500">Accepted: .pdf, .doc, .docx</span>
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !selectedFiles || selectedFiles.length === 0}
          className="w-full px-4 py-2 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-semibold shadow hover:scale-105 hover:bg-blue-700 dark:hover:bg-blue-600 transition-transform duration-300 disabled:opacity-50 flex justify-center items-center"
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
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 
                    3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Uploading...
            </>
          ) : (
            'Upload Files'
          )}
        </button>
      </form>

      {message && (
        <p
          className={`mt-6 text-center text-sm font-medium ${
            message.toLowerCase().includes('success')
              ? 'text-emerald-600'
              : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
