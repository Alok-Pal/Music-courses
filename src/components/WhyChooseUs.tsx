"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import liveImg from "../assets/live.avif"

const content = [
    {
      title: "Group Jam Sessions",
      description:
        "Join our interactive group jam sessions and play alongside your peers. Collaborate on music pieces, share ideas, and improve your skills in a supportive environment. Our sessions are designed to enhance your learning and performance.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Group Jam Sessions
        </div>
      ),
    },
    {
      title: "Live Performance Feedback",
      description:
        "Get real-time feedback on your performances. With our platform, you can receive immediate constructive criticism from instructors and peers. Improve your technique and confidence with every performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="live performance feedback"
          />
        </div>
      ),
    },
    {
      title: "Course Progress Tracking",
      description:
        "Track your progress with our advanced version control system. Stay updated with the latest course materials and assignments. Ensure you are always on track and aware of your learning milestones.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Course Progress Tracking
        </div>
      ),
    },
    {
      title: "Extensive Course Library",
      description:
        "Access a wide range of courses and never run out of learning materials. Our platform ensures you have continuous access to new and updated content, keeping your musical journey engaging and comprehensive.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Extensive Course Library
        </div>
      ),
    },
  ];
  


const WhyChooseUs = () => {
    return (
        // <div className="w-full">
            <StickyScroll content={content}>


            </StickyScroll>
        // </div>
    )
}

export default WhyChooseUs