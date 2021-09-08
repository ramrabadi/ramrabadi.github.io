import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto">
      <div class="card lg:card-side border-gray-100 border-2">
        <center>
          <figure class="mt-20">
            <div>
              <div class="rounded-full w-36 h-36 ml-8">
                <img src="https://i.imgur.com/Zt9sdru.png" />
              </div>
            </div>
          </figure>
        </center>
        <div class="card-body">
          <h1 class="card-title text-4xl font-bold">Hi, I'm Ramez</h1>
          <p class="font-sans mb-5">
            I recently graduated with a degree in Computer Science from the Russ
            College of Engineering and Technology at Ohio University.
          </p>
          <p>I am seeking a full-time position as a Software Engineer.</p>
          <div class="card-actions">
            <a
              href="https://raw.githubusercontent.com/ramrabadi/ramrabadi.github.io/f66d0276effef695d34f93684a70cf09a39c9948/Documents/Resume%20-%20Ramez%20Al-Rabadi.pdf"
              class="btn btn-secondary btn-active"
              role="button"
              aria-pressed="true"
            >
              Download My Resume!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
