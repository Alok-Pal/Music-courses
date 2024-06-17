"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
        quote: "Working with this team has been a game-changer for our business. Their expertise and dedication have truly made a difference.",
        name: "John Smith",
        title: "CEO, ABC Company"
    },
    {
        quote: "I'm impressed by the level of professionalism and quality of work delivered by this team. They exceeded our expectations.",
        name: "Emily Johnson",
        title: "Marketing Manager, XYZ Inc."
    },
    {
        quote: "It's rare to find a team that is both highly skilled and easy to work with. These guys are the total package.",
        name: "David Thompson",
        title: "Creative Director, DEF Agency"
    },
    {
        quote: "This team delivers exceptional results every time. I highly recommend their services.",
        name: "Sarah Brown",
        title: "Founder, PQR Solutions"
    },
    {
        quote: "I've been consistently impressed by the professionalism and attention to detail demonstrated by this team. They're top-notch.",
        name: "Michael Lee",
        title: "VP of Operations, LMN Corporation"
    },
    {
        quote: "Working with this team has been a pleasure from start to finish. Their communication and expertise are unmatched.",
        name: "Rachel White",
        title: "Director of Marketing, OPQ Enterprises"
    }
];

const TestimonialCards = () => {
    return (
        <div className='text-white h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden '>
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6  lg-px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCards