import React from "react";

export default function ContactComponent() {
  return (
    <div class="hero min-h-screen bg-base-200 overflow-auto">
      <div class="text-center hero-content">
        <div class="max-w-md">
          <h1 class="mb-8 text-white text-6xl font-bold underline">Contact</h1>
          <a href="mailto:rabadiram@gmail.com">
            <p class="mb-5 text-white text-2xl">Email: rabadiram@gmail.com</p>
          </a>
          <p class="mb-5 text-white text-2xl">Phone: 614-441-7268</p>
          <div className="flex justify-center space-x-4">
            <div data-tip="😊" class="tooltip">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ramez-alrabadi/"
              >
                <button class="btn btn-warning">LinkedIn</button>
              </a>
            </div>
            <a target="_blank" href="https://github.com/ramrabadi/">
              <div data-tip="😃" class="tooltip">
                <button class="btn btn-accent btn-active">Github</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
