'use client';

import Image from "next/image";
import styles from "./page.module.css";


import { useState } from "react";

import { ProjectCard } from "@/components/project_card";

const projects = [
    {
        title: "Weather Dashboard",
        description: "A responsive app that shows real-time weather using OpenWeather API.",
        tech: ["React", "Tailwind", "API"],
        github: "https://github.com/yourname/weather-dashboard",
        demo: "https://weather-yourname.vercel.app",
    },
    {
        title: "To-Do App",
        description: "Full-stack to-do list with auth and persistent storage.",
        tech: ["Next.js", "MongoDB", "Auth"],
        github: "https://github.com/yourname/todo-app",
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio showcasing projects and skills.",
        tech: ["Next.js", "Tailwind", "React"],   
    }
];
type Project = (typeof projects)[number];

const sections = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

export default function Home() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const tags = Array.from(
        new Set(projects.flatMap((p) => p.tech))
    ).sort();
    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };
    const clearTags = () => setSelectedTags([]);

    const projectMatches = (project: Project, query: string, selectedTags: string[]) => {
        const normalizedQuery = query.trim().toLowerCase();
        if (normalizedQuery === "" && selectedTags.length === 0) {
            return true; // No filters applied
        }

        const tagsMatch =
            selectedTags.length === 0 ||
            // project.tech.some((tag) => selectedTags.includes(tag));
            selectedTags.every((tag) => project.tech.includes(tag));
            
        const searchMatch =
            normalizedQuery === "" ||
            project.title.toLowerCase().includes(normalizedQuery) ||
            project.tech.some(t => t.toLowerCase().includes(normalizedQuery));

        return tagsMatch && searchMatch;
    }
    const filteredProjects = projects.filter((project) =>
        projectMatches(project, searchTerm, selectedTags)
    );


    
    return (
        <main className="flex flex-col items-center px-4 md:px-12 max-w-7xl mx-auto snap-y snap-mandatory">
            {/* Intro Section */}
            <section className="h-screen flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Hi, I&apos;m Will
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
                    Software Developer building full-stack web apps.
                </p>
                {/* <a href="#projects" className="mt-6 px-6 py-3 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition">
                    View My Work
                </a> */}
                <div className="h-4" />
                <div className="flex flex-col justify-center mt-8">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className="p-4 text-7xl w-120 font-semibold text-white shadow-lg hover:bg-blue-700 transition-all duration-200"
                        >
                            {section.label}
                        </a>
                    ))}
                </div>

            </section>
      
            {/* About */}
            <section id="about" className="h-screen snap-start py-20 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">
                    About Me
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                    I&apos;m a software engineer who loves building web apps with modern stacks. I focus on React, Node.js, and REST APIs.
                </p>
            </section>

            {/* Projects */}
            <div className="h-4" />
            <section id="projects" className="h-screen snap-start py-20 w-full">
                <h2 className="text-3xl font-bold mb-6">
                    Projects
                </h2>

                <input
                    type="text"
                    placeholder="Search by title or tech..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-8 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="mb-6 flex flex-wrap gap-2">
                    {tags.map((tag) => {
                        const active = selectedTags.includes(tag);
                        return (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-3 py-1 rounded-full text-sm border ${
                                active
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600'
                                } hover:scale-105 transition`}
                            >
                                {tag}
                            </button>
                        );
                    })}

                    {selectedTags.length > 0 && (
                        <button
                            onClick={clearTags}
                            className="ml-2 px-3 py-1 rounded-full text-sm text-red-600 border border-red-600 hover:bg-red-100 dark:hover:bg-red-900 transition"
                            >
                                Clear Filters
                        </button>
                    )}
                    </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, idx) => (
                            <ProjectCard key={idx} {...project} />
                        ))
                    ) : (
                        <p className="text-gray-500">No projects match your search.</p>
                    )}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="h-screen snap-start py-20">
                <h2 className="text-3xl font-bold mb-4">
                    Get in Touch
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Email me at <a href="mailto:you@example.com" className="underline">you@example.com</a>
                </p>
            </section>
        </main>
    );
}