"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Learning never exhausts the mind; instead, it opens doors to limitless possibilities, allowing us to innovate, understand, and grow beyond our immediate surroundings. The quest for knowledge shapes not only our skills but also our character, turning curiosity into wisdom over time.",
    name: "Leonardo da Vinci",
    title: "Renaissance Artist & Inventor",
  },
  {
    quote:
      "The journey of a thousand miles begins with one step, symbolizing the power of small actions and the courage it takes to embark on a path, even if the destination seems distant or uncertain. Every step, no matter how small, brings us closer to achieving our dreams.",
    name: "Lao Tzu",
    title: "Philosopher & Writer",
  },
  {
    quote:
      "In the middle of difficulty lies opportunity; challenges are not obstacles but stepping stones to growth. By facing adversity with an open mind, we uncover hidden strengths, solutions, and paths that often lead to a more fulfilling outcome than we originally anticipated.",
    name: "Albert Einstein",
    title: "Theoretical Physicist",
  },
  {
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts. The true measure of resilience lies in our ability to persevere, for success is a journey, not a destination, and every setback offers a chance to rise again with more insight and determination.",
    name: "Winston Churchill",
    title: "Former Prime Minister of the UK",
  },
  {
    quote:
      "Simplicity is the ultimate sophistication; removing the unnecessary to reveal the essential requires clarity of purpose and vision. True elegance lies in the art of making the complex accessible, showing that often less is more when it comes to profound impact.",
    name: "Leonardo da Vinciasdf",
    title: "Renaissance Artist & Inventor",
  },
  {
    quote:
      "The only way to do great work is to love what you do. Passion fuels creativity and drives excellence, allowing you to push boundaries and see potential where others see limits. When you love what you do, work becomes a canvas for your dedication and dreams.",
    name: "Steve Jobs",
    title: "Co-founder of Apple Inc.",
  },
];

const TestimonialsCard = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl ">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
