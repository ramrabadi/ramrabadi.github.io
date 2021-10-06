import React from "react";
import Link from "next/link";

export default function AboutComponent() {
  return (
    <div class="hero min-h-screen bg-base-200 overflow-auto">
      <div class="text-left hero-content">
        <div class="max-w-lg">
          <h1 class="text-white mb-8 text-6xl font-bold underline">About</h1>
          <div data-tip="😃" class="tooltip">
            <a
              href="https://github.com/ramrabadi/ramrabadi.github.io/raw/main/Documents/Resume.pdf"
              class="btn btn-secondary btn-active mb-8"
              role="button"
              aria-pressed="true"
            >
              Download My Resume!
            </a>
          </div>
          <p class="text-white font-mono mb-8 text-lg">
            👋🏽 Hi, my name is Ramez.
          </p>
          <p class="text-white font-mono mb-8 text-lg">
            🎓 I recently graduated with a Bachelor of Science in Computer
            Science from the Russ College of Engineering and Technology at Ohio
            University.
          </p>
          <p class="text-white font-mono mb-8 text-lg">
            🌇 I am located in Columbus, Ohio.
          </p>
          <p class="text-white font-mono mb-8 text-lg">
            🧑‍🔬 I am seeking a full time Software Development position.
          </p>
          <p class="text-white font-mono mb-1 text-lg">I have experience in:</p>
          <p class="text-white font-semibold mb-1 text-lg">
            ☕ Languages such as Java, C++, Python, SQL, and Javascript.
          </p>
          <p class="text-white font-semibold mb-1 text-lg">
            🖼️ Frameworks such as Angular, React, and Spring.
          </p>
          <p class="text-white font-semibold mb-8 text-lg">
            💾 Databases such as MySQL and PostgresSQL.
          </p>
          <p class="text-white font-mono mb-8 text-lg">
            💻 I have a passion for visualizing, designing, and developing
            creative and innovative software solutions to solve real-world
            industry problems.
          </p>
          <p class="text-white font-mono mb-8 text-lg">
            🔨 I built this website with Next.js (Framework for React) and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
