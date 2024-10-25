"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
    {
      "title": "Introduction to Next.js",
      "description": "Learn the fundamentals of Next.js, a React framework for server-side rendering, and static site generation."
    },
    {
      "title": "Implementing Authentication in Node.js",
      "description": "A guide to setting up user authentication using Node.js, Express, and JWT for secure access control."
    },
    {
      "title": "Understanding Redux Toolkit",
      "description": "Explore the core features of Redux Toolkit, a library for managing application state efficiently in React projects."
    },
    {
      "title": "Building REST APIs with Express.js",
      "description": "Step-by-step tutorial on designing and building RESTful APIs using Express.js and MongoDB."
    },
    {
      "title": "Responsive Web Design with Tailwind CSS",
      "description": "Learn to create fully responsive, mobile-friendly layouts using the utility-first Tailwind CSS framework."
    },
    {
      "title": "TypeScript for JavaScript Developers",
      "description": "Introduction to TypeScript and its benefits for JavaScript developers, including type safety and scalability."
    }
  ]
  
const WhyChooseUs = () => {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
