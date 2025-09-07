'use client'
import React, { useState, useEffect } from 'react';
import { Config } from '@/config/config'

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium print:border print:border-gray-300 print:text-black ${className}`}>
            {children}
        </span>
    );
}

export default function SkillsAndCertificates() {
    const [skills, setSkills] = useState<{ name: string; color: string }[]>([])
    const [certificates, setCertificates] = useState<{ name: string }[]>([])

    const colorList = [
        "bg-blue-500 print:bg-white",
        "bg-gray-700 print:bg-white",
        "bg-purple-500 print:bg-white",
        "bg-orange-500 print:bg-white",
        "bg-yellow-500 print:bg-white",
        "bg-blue-600 print:bg-white",
        "bg-cyan-500 print:bg-white",
        "bg-teal-500 print:bg-white",
        "bg-black print:bg-white",
        "bg-green-600 print:bg-white",
        "bg-indigo-500 print:bg-white",
        "bg-blue-400 print:bg-white",
        "bg-blue-700 print:bg-white",
        "bg-red-500 print:bg-white",
    ]
    useEffect(() => {
        const skillsWithColor = Config.skills.map((skill) => ({
            ...skill,
            color: colorList[Math.floor(Math.random() * colorList.length)]
        }))
        setCertificates(Config.certificates)
        setSkills(skillsWithColor)
    }, [])

    return (
        <div className="space-y-5 print:space-y-3">
            <div className="p-3 print:p-3">
                <h3 className="text-sm font-medium text-gray-800 print:text-black mb-2 print:mb-2">技术栈</h3>
                <div className="flex flex-wrap gap-1.5 print:gap-1">
                    {skills.map((skill) => (
                        <Badge key={skill.name} className={`${skill.color} text-white print:text-black`}>
                            {skill.name}
                        </Badge>
                    ))}
                </div>
                {certificates.map((certificate, index) => (
                    <div key={index} className="flex items-center space-x-1.5 mt-3 print:mt-2">
                        <svg className="w-4 h-4 text-green-500 print:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 print:text-black text-xs">{certificate.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
