import React from "react";

export default function AboutComponent() {
  return (
    <div className="grid w-full bg-cover bg-center place-items-center overflow-auto">
      <div className="text-center">
        <h1 className="text-white text-5xl mt-5 text-center">🧍About Me</h1>
        <section className="container mx-auto py-8 md:py-8 antialiased">
          <section className="grid lg:grid-cols-3 2xl:grid-cols-3 grid-cols-1 gap-8">
            <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl border-2 border-neutral">
              <img
                className="mx-auto mb-10 mt-10 w-40"
                src="https://cdn.jsdelivr.net/gh/ramrabadi/ramrabadi.github.io/assets/img/me_wave.png"
                alt=""
              />
              <h2 className="text-center text-white text-3xl mt-8 min-h-18 px-12">
                👋🏽 Hi, my name is Ramez.
              </h2>
              <div className="flex items-center justify-center mt-10">
                <a
                  href="https://cdn.jsdelivr.net/gh/ramrabadi/ramrabadi.github.io/documents/Resume.pdf"
                  className="btn btn-secondary btn-active mb-8"
                  role="button"
                  aria-pressed="true"
                  target="_blank"
                >
                  View My Resume!
                </a>
              </div>
            </article>

            <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl border-2 border-neutral">
              <img
                className="mx-auto mb-10 mt-10 w-40"
                src="https://cdn.jsdelivr.net/gh/ramrabadi/ramrabadi.github.io/assets/img/me_grad.png"
                alt=""
              />
              <h2 className="text-center text-white text-3xl mt-8 min-h-18 px-12">
                🎓 Recent Grad
              </h2>
              <p className="m-4 text-lg p-4 leading-relaxed text-center text-white">
                I recently graduated with a Bachelor of Science in Computer
                Science from the Russ College of Engineering and Technology at
                Ohio University.
              </p>
            </article>

            <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl border-2 border-neutral">
              <img
                className="mx-auto mb-10 mt-10 w-40"
                src="https://cdn.jsdelivr.net/gh/ramrabadi/ramrabadi.github.io/assets/img/me_job.png"
                alt=""
              />
              <h2 className="text-center text-white text-3xl mt-8 min-h-18 px-12">
                🔎 Looking for opportunities
              </h2>
              <p className="m-4 text-lg p-4 leading-relaxed text-center text-white">
                I am currently seeking a full time Software Development
                position.
              </p>
            </article>
          </section>
        </section>
      </div>
    </div>
  );
}
