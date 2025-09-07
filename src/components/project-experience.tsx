'use client'
import React, { useState, useEffect } from 'react';
import { Config } from '@/config/config'

const ProjectItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start mb-1">
        <span className="flex-shrink-0 w-1 h-1 mt-1.5 mr-1.5 bg-black rounded-full print:bg-black"></span>
        <p className="text-gray-700 print:text-black text-xs">{children}</p>
    </li>
);

export default function ProjectExperience() {
    const [projectList, setProjectList] = useState<{ projectName: string; projectStartTime: string; projectEndTime: string; projectDescription: string; projectResponsibility: string[] }[]>([])

    useEffect(() => {
        setProjectList(Config.projectExperience)
    }, [])

    return (
        <div className="bg-white print:bg-white rounded-lg p-5 print:p-3">
            <h2 className="text-sm font-bold text-gray-800 print:text-black mb-3 border-b pb-1 print:border-b-black">项目经历</h2>
            <div className="space-y-3">
                {
                    projectList.map((project, index) => (
                        <div key={index}>
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="text-sm font-medium text-gray-900 print:text-black">{project.projectName}</h3>
                                <p className="text-xs text-gray-600 print:text-gray-700">{project.projectStartTime} - {project.projectEndTime}</p>
                            </div>
                            <p className="text-xs text-gray-700 print:text-black mb-1">{project.projectDescription}</p>
                            <p className="text-xs text-gray-700 print:text-black font-medium mb-1">职责描述：</p>
                            <ul className="space-y-0.5 print:space-y-0.5">
                                {project.projectResponsibility.map((responsibility, index) => (
                                    <ProjectItem key={index}>{responsibility}</ProjectItem>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
