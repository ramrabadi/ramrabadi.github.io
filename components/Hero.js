import React from "react";
import Link from "next/link";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";

export default function Hero() {
  return (
    <div class="hero min-h-screen bg-base-200 overflow-auto">
      <div class="text-white text-center hero-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hi, I'm Ramez</h1>
          <p className="text-lg"> I am a </p>
          <div className="text-3xl text-green-400 mb-5">
            <Typed
              strings={[
                "Programmer",
                "Software Engineer",
                "Computer Scientist",
                "Mobile Developer",
              ]}
              typeSpeed={70}
              backSpeed={65}
              loop
            />
          </div>
          <div>
            <Link href="/about">
              <button class="btn btn-primary btn-lg">Enter</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
