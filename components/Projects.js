import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto">
      <h3 className="font-bold text-2xl md:text-3xl mb-4 mt-8 text-white">
        Projects
      </h3>
      <div class="mockup-window bg-base-300 mb-8">
        <div class="flex justify-center py-8 bg-base-200">
          <div class="card bordered">
            <div class="card-body">
              <h2 class="card-title">Self-guided College Tour System</h2>
              <p>
                An Android mobile application that incorporates text, voice, and
                location awareness to help families take a self-guided tour of
                Stocker Center at Ohio University.
              </p>
              <div class="flex justify-center py-8 bg-base-200">
                <div class="btn-group">
                  <a
                    target="_blank"
                    href="https://github.com/ramrabadi/Self-guided-College-Tour"
                    class="btn btn-lg btn-info"
                  >
                    View Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mockup-window bg-base-300 mb-8">
        <div class="flex justify-center py-8 bg-base-200">
          <div class="card bordered">
            <div class="card-body">
              <h2 class="card-title">
                Real-Time Team Collaboration App
                <div class="badge mx-2 badge-secondary">NEW</div>
              </h2>
              <p>
                A web application designed for team collaboration, featuring
                direct messaging, group messaging, chat channels, GIF support,
                and search functionality.
              </p>
              <div class="flex justify-center py-8 bg-base-200">
                <div class="btn-group">
                  <button class="btn btn-lg btn-active">Live Demo</button>
                  <button class="btn btn-lg btn-info">View Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mockup-window bg-base-300 mb-8">
        <div class="flex justify-center py-8 bg-base-200">
          <div class="card bordered">
            <div class="card-body">
              <h2 class="card-title">Housing Price Predictor</h2>
              <p>
                A Machine Learning prototype that predicts house prices in the
                state of Ohio by employing various data analysis techniques,
                such as Linear Regression, with corresponding Python Libraries
                for further accuracy.
              </p>
              <div class="flex justify-center py-8 bg-base-200">
                <div class="btn-group">
                  <button class="btn btn-lg btn-info">View Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mockup-window bg-base-300 mb-8">
        <div class="flex justify-center py-8 bg-base-200">
          <div class="card bordered">
            <div class="card-body">
              <h2 class="card-title">Othello Game</h2>
              <p>
                A C++ implementation of the Othello game. The scope of this
                project is to explore game design patterns as well as
                adversarial search algorithms.
              </p>
              <div class="flex justify-center py-8 bg-base-200">
                <div class="btn-group">
                  <button class="btn btn-lg btn-info">View Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
