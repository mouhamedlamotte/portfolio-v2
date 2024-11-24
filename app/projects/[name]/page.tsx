"use client"

import { useRouter } from 'next/navigation'
import NotFound from '@/app/not-found'
import { resume } from '@/app/data/resume'
 
export default function Page({ params }: { params: { name: string } }) {

    const name = params.name
    
    const project = resume.projects.find(project => project.name === name)

    if (!project) {
        return <NotFound />
    }
 
  return <div>{name}</div>
}