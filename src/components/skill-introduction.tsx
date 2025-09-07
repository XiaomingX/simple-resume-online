'use client'
import React, { useState, useEffect } from 'react';
import { Config } from '@/config/config'

const SkillItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start mb-2">
        <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 mr-2 bg-black rounded-full print:bg-black"></span>
        <p className="text-gray-700 print:text-black text-xs">{children}</p>
    </li>
);

export default function SkillIntroduction() {
    const [skillList, setSkillList] = useState<string[]>([])

    useEffect(() => {
        setSkillList(Config.skillIntroduction)
    }, [])

    return (
        <div className="bg-white print:bg-white rounded-lg p-5 print:p-3">
            <h2 className="text-sm font-bold text-gray-800 print:text-black mb-3 border-b pb-1 print:border-b-black">专业技能</h2>
            <ul className="space-y-1 print:space-y-0.5">
                {skillList.map((skill, index) => (
                    <SkillItem key={index}>{skill}</SkillItem>
                ))}
            </ul>
        </div>
    )
}
