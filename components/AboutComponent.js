import React from "react";
import Link from "next/link";

export default function AboutComponent() {
  return (
    <div class="hero min-h-screen bg-base-200 overflow-auto">
      <div class="text-center hero-content">
        <div class="max-w-md">
          <h1 class="mb-8 text-6xl font-bold underline">About</h1>
          <p class="mb-8 text-lg">👋🏽 Hi, my name is Ramez.</p>
          <p class="mb-8 text-lg">
            🎓 I recently graduated with a Bachelor of Science in Computer
            Science from the Russ College of Engineering and Technology at Ohio
            University.
          </p>
          <p class="mb-8 text-lg">🌇 I am from Columbus, Ohio.</p>
          <p class="mb-8 text-lg">
            💻 I have a passion for visualizing, designing, and developing
            creative and innovative software solutions to solve real-world
            industry problems.
          </p>
          <p class="mb-8 text-lg">
            🧑‍🔬 I am seeking a full time Software Development position.
          </p>
          <p class="mb-8 text-lg">
            🔨 I built this website with Next.js (Framework for React) and
            Tailwind CSS.
          </p>
          <a
            href="https://github.com/ramrabadi/ramrabadi.github.io/raw/main/Documents/Resume.pdf"
            class="btn btn-secondary btn-active"
            role="button"
            aria-pressed="true"
          >
            Download My Resume!
          </a>
        </div>
      </div>
    </div>
  );
}
