import React from "react";

export default function ProjectsComponent() {
  return (
    <div class="hero min-h-screen bg-base-200 overflow-auto">
      <div class="text-center hero-content">
        <div class="min-w-screen">
          <h1 class="mb-8 text-6xl font-bold underline">Projects</h1>
          <div class="space-x-4">
            <div class="mockup-phone border-primary">
              <div class="camera"></div>
              <div class="display">
                <div class="artboard phone-1 artboard-demo">
                  <h2 class="card-title">Self-guided College Tour System</h2>
                  <p class="mt-5">
                    Android application that incorporates text, voice, and
                    location awareness to help students take a self-guided tour
                    of the Stocker Center at Ohio University.
                  </p>
                  <a
                    target="_blank"
                    href="https://github.com/ramrabadi/Self-guided-College-Tour"
                  >
                    <button class="btn btn-md btn-success mt-10">
                      View on Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="mockup-phone border-success">
              <div class="camera"></div>
              <div class="display">
                <div class="artboard phone-1 artboard-demo">
                  <h2 class="card-title">Employee Manager System</h2>
                  <p class="mt-5">
                    A system for accessing, adding, updating, or deleting an
                    employee. It is built with Spring Boot and MySQL using
                    Spring Data JPA.
                  </p>
                  <a
                    target="_blank"
                    href="https://github.com/ramrabadi/Employee-Manager-System-Backend"
                  >
                    <button class="btn btn-md btn-success mt-10">
                      View on Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="mockup-phone border-error">
              <div class="camera"></div>
              <div class="display">
                <div class="artboard phone-1 artboard-demo">
                  <h2 class="card-title">Team Collaboration App</h2>
                  <p class="mt-5">
                    A web application in React and NodeJS designed for team
                    collaboration, featuring direct messaging, group messaging,
                    chat channels, GIF support, and search functionality.
                  </p>
                  <a
                    target="_blank"
                    href="https://github.com/ramrabadi/Team-Collaboration-App"
                  >
                    <button class="btn btn-md btn-success mt-10">
                      View on Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
