import React from "react";

export default function Skills() {
  return (
    <div className="hero">
      <div className="container mx-auto">
        <h1 className="text-white text-5xl mt-5 mb-10 text-center">
          🤹 Skills
        </h1>
        <div className="grid lg:grid-cols-5 2xl:grid-cols-5 grid-cols-2">
          <div className="flex justify-center rounded-xl p-6 hover:-translate-y-1 ">
            <img
              className="mx-auto w-28"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center rounded-xl p-6 hover:-translate-y-1">
            <img
              className="mx-auto w-36"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center rounded-xl p-6 hover:-translate-y-1">
            <img
              className="mx-auto w-32"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center rounded-xl p-6 hover:-translate-y-1">
            <img
              className="mx-auto w-36"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center rounded-xl p-6 hover:-translate-y-1">
            <img
              className="mx-auto w-36"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain-wordmark.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center rounded-xl p-6 hover:-translate-y-1">
            <img
              className="mx-auto w-36 hover:-translate-y-1"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center rounded-xl p-6 hover:-translate-y-1">
            <img
              className="mx-auto w-32"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center rounded-xl p-6 hover:-translate-y-1">
            <img
              className="mx-auto w-36"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center rounded-xl p-6 hover:-translate-y-1">
            <img
              className="mx-auto w-32"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center p-6 hover:-translate-y-1">
            <img
              className="mx-auto w-32"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
