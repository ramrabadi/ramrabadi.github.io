import React from "react";

export default function AboutComponent() {
  return (
    <div className="hero overflow-auto">
      <div className="text-center">
        <h1 className="text-white text-5xl mt-5 text-center">🧍About Me</h1>
        <section className="container mx-auto py-8 md:py-8 antialiased">
          <section className="grid lg:grid-cols-3 2xl:grid-cols-3 grid-cols-1 gap-8">
            <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl border-2 border-neutral">
              <img
                className="mx-auto mb-10 mt-10 w-40"
                src="https://sdk.bitmoji.com/render/panel/e0c8b93f-c246-46e8-9db2-ec0cb01ec9eb-97f1b30e-9806-40d9-9381-1f51d2c35156-v1.png?transparent=1&palette=1"
                alt=""
              />
              <h2 className="text-center text-white text-3xl mt-8 min-h-18 px-12">
                👋🏽 Hi, my name is Ramez.
              </h2>
              <div className="flex items-center justify-center mt-10">
                <a
                  href="https://nbviewer.org/github/ramrabadi/ramrabadi.github.io/blob/main/documents/Resume.pdf"
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
                src="https://sdk.bitmoji.com/render/panel/2f46d66f-a6f6-4e29-beed-4eb2aa6881fd-97f1b30e-9806-40d9-9381-1f51d2c35156-v1.png?transparent=1&palette=1"
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
                src="https://sdk.bitmoji.com/render/panel/5e96d886-b7c3-4d3b-b7a1-84f7ea767855-97f1b30e-9806-40d9-9381-1f51d2c35156-v1.png?transparent=1&palette=1"
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
