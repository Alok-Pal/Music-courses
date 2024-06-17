"use client"
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';


const musicWebinars = [
    {
        title: "Mastering Guitar Techniques",
        description: "Join our expert instructors as they cover advanced guitar techniques, including fingerpicking, bending, and vibrato.",
        link: '/webinars/mastering-guitar-techniques'
    },
    {
        title: "Introduction to Music Theory",
        description: "Learn the fundamentals of music theory, including notation, scales, chords, and basic harmony.",
        link: '/webinars/introduction-to-music-theory'
    },
    {
        title: "Vocal Training Workshop",
        description: "Enhance your singing skills with our vocal training workshop, covering techniques for breath control, pitch accuracy, and vocal health.",
        link: '/webinars/vocal-training-workshop'
    },
    {
        title: "Songwriting Masterclass",
        description: "Unlock your creativity and learn the art of songwriting from industry professionals. Explore lyric writing, melody composition, and song structure.",
        link: '/webinars/songwriting-masterclass'
    },
    {
        title: "Live Performance Strategies",
        description: "Discover strategies for improving your live performances, including stage presence, audience engagement, and overcoming stage fright.",
        link: '/webinars/live-performance-strategies'
    },
    {
        title: "Music Production Techniques",
        description: "Dive into the world of music production with our comprehensive workshop. Learn about recording, mixing, and mastering techniques using industry-standard software.",
        link: '/webinars/music-production-techniques'
    }
];

const UpcomingWebinars = () => {
    return (
        <div className='dark:text-white p-12 bg-gray-900 '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With the Best</p>
                </div>
                <div className='mt-10'>

                    <HoverEffect items={musicWebinars.map((webinar)=> ({
                        title:webinar.title,
                        description:webinar.description,
                        link:`${webinar.link}`,
                    }))} />
                </div>
                <div className='mt-10 text-center'>
                    <Link href={'/'} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                        View All webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars