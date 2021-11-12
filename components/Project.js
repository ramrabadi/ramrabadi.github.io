import React from "react";

export default function ProjectsComponent() {
  return (
    <div className="grid w-full bg-cover bg-center bg-base-200 place-items-center overflow-auto">
      <div className="text-center">
        <h1 className="text-white text-5xl mt-5 text-center">💻 Projects</h1>
        <section className="container mx-auto py-8 md:py-8 antialiased">
          <section className="grid lg:grid-cols-3 2xl:grid-cols-3 grid-cols-1 gap-8">
            <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl border-2 border-success">
              <img
                className="mx-auto mb-10 mt-10 w-40"
                src="https://cdn.jsdelivr.net/gh/ramrabadi/ramrabadi.github.io/assets/img/tour.png"
                alt=""
              />
              <h2 className="text-center text-white text-3xl mt-8 min-h-18 px-12">
                🛰️ Self-guided College Tour System
              </h2>
              <div className="mt-5">
                <div className="badge badge-error">Java</div>
                <div className="badge badge-info">Kotlin</div>
                <div className="badge badge-warning">Android Studio</div>
                <p className="m-4 text-lg p-4 leading-relaxed text-center text-white">
                  Android application that incorporates text, voice, and
                  location awareness to help students take a self-guided tour of
                  the Stocker Center at Ohio University.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://github.com/ramrabadi/Self-guided-College-Tour/"
                  rel="noreferrer"
                >
                  <button className="btn btn-md btn-success">
                    View on Github
                  </button>
                </a>
              </div>
            </article>

            <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl border-2 border-info">
              <img
                className="mx-auto mb-10 mt-10 w-40"
                src="https://cdn.jsdelivr.net/gh/ramrabadi/ramrabadi.github.io/assets/img/employee.png"
                alt=""
              />
              <h2 className="text-center text-white text-3xl mt-8 min-h-18 px-12">
                🧑‍💼 Employee Manager System
              </h2>
              <div className="mt-5">
                <div className="badge badge-error">Java</div>
                <div className="badge badge-info">MySQL</div>
                <div className="badge badge-warning">Spring Boot</div>
                <div className="badge badge-success">Angular</div>
                <p className="m-4 text-lg p-4 leading-relaxed text-center text-white">
                  A full-stack application that allows allow users to
                  dynamically update and manage their business. Functionality
                  includes accessing, adding, updating, or deleting an employee.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://github.com/ramrabadi/Employee-Manager-System-Backend/"
                  rel="noreferrer"
                >
                  <button className="btn btn-md btn-info">
                    View on Github
                  </button>
                </a>
              </div>
            </article>

            <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl border-2 border-error">
              <img
                className="mx-auto mb-10 mt-10 w-40"
                src="https://cdn.jsdelivr.net/gh/ramrabadi/ramrabadi.github.io/assets/img/chat.png"
                alt=""
              />
              <h2 className="text-center text-3xl mt-8 min-h-18 px-12 text-white">
                💬 Team Collaboration App
              </h2>
              <div className="mt-5">
                <div className="badge badge-error">React</div>
                <div className="badge badge-success">Node.js</div>
                <div className="badge badge-warning">Express.js</div>
                <p className="m-4 text-lg p-4 leading-relaxed text-center text-white">
                  A web application designed for team collaboration, featuring
                  direct messaging, group messaging, chat channels, GIF support,
                  and search functionality.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://github.com/ramrabadi/Team-Collaboration-App/"
                  rel="noreferrer"
                >
                  <button className="btn btn-md btn-error">
                    View on Github
                  </button>
                </a>
              </div>
            </article>
          </section>
        </section>
      </div>
    </div>
  );
}
