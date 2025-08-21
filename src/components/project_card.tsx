import React from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
};


export function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
    return (
        <div className="relative group">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-70 group-hover:opacity-100 transition duration-100"></div>

            {/* Card */}
            <motion.div 
                className="relative w-full h-full bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 transition"
                whileHover={{x: -8, y: -8}}
                transition={{ duration: 0.1, ease: "linear" }}
            >
                <h3 className="text-xl font-semibold mb-2">
                    {title}
                </h3>
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
                    {github && (
                        <a href={github} target="_blank" className="text-blue-600 hover:underline">
                            GitHub
                        </a>
                    )}
                    {demo && (
                        <a href={demo} target="_blank" className="text-blue-600 hover:underline">
                            Live Demo
                        </a>
                    )}
                </div>

            </motion.div>
        </div>
    );
}