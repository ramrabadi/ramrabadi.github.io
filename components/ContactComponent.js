import React from "react";

export default function ContactComponent() {
  return (
    <div class="hero min-h-screen bg-base-200 overflow-auto">
      <div class="text-center hero-content">
        <div class="max-w-md">
          <h1 class="mb-8 text-6xl font-bold underline">Contact</h1>
          <a href="mailto:rabadiram@gmail.com">
            <p class="mb-5 text-2xl">Email: rabadiram@gmail.com</p>
          </a>
          <p class="mb-5 text-2xl">Phone: 614-441-7268</p>
          <div className="flex justify-center space-x-4">
            <div data-tip="😊" class="tooltip">
              <button class="btn btn-warning">LinkedIn</button>
            </div>
            <div data-tip="😃" class="tooltip">
              <button class="btn btn-accent btn-active">Github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
