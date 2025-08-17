import React from "react";

type ProjectCardProps = {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo?: string;
};


export function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((tag, idx) => (
                    <span
                        key={idx}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-gray-200"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex gap-4">
                <a href={github} target="_blank" className="text-blue-600 hover:underline">
                    GitHub
                </a>
                {demo && (
                    <a href={demo} target="_blank" className="text-blue-600 hover:underline">
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
}