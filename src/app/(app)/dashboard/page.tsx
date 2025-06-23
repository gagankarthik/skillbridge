"use client";
import React from 'react';

const stats = [
    { label: 'Resumes in DB', value: 56 },
    { label: 'Skills Tracked', value: 23 },
    { label: 'Active Users', value: 1240 },
    { label: 'Pending Tasks', value: 14 },
];

const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'SQL',
    'AWS',
    'Docker',
];

const recentActivities = [
    { id: 1, activity: 'Resume added by JohnDoe', time: '2 mins ago' },
    { id: 2, activity: 'Skill "GraphQL" added', time: '10 mins ago' },
    { id: 3, activity: 'Resume updated by Jane', time: '1 hour ago' },
    { id: 4, activity: 'New feedback submitted', time: '2 hours ago' },
];

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-gray-50 p-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-500 mt-2">Overview of your project’s performance</p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
                    >
                        <div className="text-2xl font-semibold text-blue-600">{stat.value}</div>
                        <div className="text-gray-500 mt-2">{stat.label}</div>
                    </div>
                ))}
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Activities</h2>
                    <ul>
                        {recentActivities.map((item) => (
                            <li key={item.id} className="mb-3 last:mb-0">
                                <div className="flex justify-between">
                                    <span className="text-gray-800">{item.activity}</span>
                                    <span className="text-gray-400 text-sm">{item.time}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Skills in Database</h2>
                    <ul className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <li
                                key={skill}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}