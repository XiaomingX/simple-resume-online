'use client'
import { Phone, Mail, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import cvPhoto from '@/public/cv-photo.png'
import { useState, useEffect } from 'react'
import { Config } from '@/config/config'

export default function PersonalInfo() {
    const [personalInfo, setPersonalInfo] = useState<{ name: string; phone: string; email: string; address: string; age: string; job: string; status: string }>({
        name: "",
        phone: "",
        email: "",
        address: "",
        age: "",
        job: "",
        status: ""
    })

    useEffect(() => {
        setPersonalInfo(Config.personalInfo)
    }, [])

    return (
        <div className="flex justify-between items-center mb-2">
            <div className="flex-1 flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-lg font-bold text-gray-900 text-center">{personalInfo.name}</h1>
                    <div className="mt-1 text-xs text-gray-600 space-y-0.5 text-center">
                        <div className="flex items-center space-x-3 justify-center">
                            <div className="flex items-center">
                                <Phone className="w-3 h-3 mr-1" />
                                <span>{personalInfo.phone}</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-3 h-3 mr-1" />
                                <span>{personalInfo.email}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 justify-center">
                            <div className="flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                <span>{personalInfo.address}</span>
                            </div>
                            <div className="flex items-center">
                                <User className="w-3 h-3 mr-1" />
                                <span>{personalInfo.age}</span>
                            </div>
                        </div>
                        <div className="text-2xs">{personalInfo.job} | {personalInfo.status}</div>
                    </div>
                </div>
            </div>
            <Image src={cvPhoto} alt="Profile" width={96} height={96} className="rounded-full object-cover" />
        </div>
    )
}
