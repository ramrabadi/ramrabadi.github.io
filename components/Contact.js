import React, { useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ContactComponent() {
  const [isCopied, setIsCopied] = useState(false);
  const emailAddress = "rabadiram@gmail.com";
  const city = "Columbus, Ohio";
  const phoneNumber = "614-441-7268";

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="hero bg-base-200 overflow-auto">
      <div className="container mx-auto">
        <h1 className="text-white text-5xl mt-5 mb-20 text-center">
          👤 Contact
        </h1>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 2xl:grid-cols-3 grid-cols-1">
            <div className="flex justify-between mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 fill-current text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="flex items-center ml-5">
                <p className="text-white text-2xl">{city}</p>
              </div>
            </div>
            <div className="flex justify-between mx-auto max-w-sm pb-8 cursor-pointer transform duration-500 hover:-translate-y-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 fill-current text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <div className="flex items-center ml-5">
                <a href="mailto:rabadiram@gmail.com">
                  <p className="text-white text-2xl">{emailAddress}</p>
                </a>
              </div>
              <div className="mt-2 ml-4">
                <CopyToClipboard text={emailAddress} onCopy={onCopyText}>
                  <span>
                    {isCopied ? (
                      <div data-tip="Copied" className="tooltip">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current text-white h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div data-tip="Click to Copy" className="tooltip">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          data-tip="hello"
                          className="fill-current text-white h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </span>
                </CopyToClipboard>
              </div>
            </div>
            <div className="flex justify-between mx-auto max-w-sm pb-8 cursor-pointer transform duration-500 hover:-translate-y-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 fill-current text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="flex items-center ml-5">
                <p className="text-white text-2xl">{phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
