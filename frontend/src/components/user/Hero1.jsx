import React from "react";
import { useNavigate } from "react-router-dom";

function Hero1() {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative overflow-hidden bg-[#111225] text-white">
        {/* Background Effects */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"></div>

        <div className="relative mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-12">
          {/* Hero Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-400"></span>
              Your personal workspace
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl xl:text-7xl">
              Organize Your
              <span className="block text-violet-400">Thoughts.</span>
              Simplify Your Life.
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
              Keep your ideas, thoughts and important information in one place.
              Create, manage and organize your notes effortlessly with a simple
              and secure workspace.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/register")}
                className="inline-flex items-center gap-3 rounded-lg bg-violet-600 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-700"
              >
                Get Started
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-7-7 7 7-7 7"
                  />
                </svg>
              </button>

              <button
                onClick={() => navigate("/login")}
                className="rounded-lg border border-gray-600 px-7 py-4 font-semibold text-white transition hover:border-violet-400 hover:bg-white/5"
              >
                Sign In
              </button>
            </div>

            {/* Features */}
            <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-violet-400">✓</span>
                Easy to use
              </div>

              <div className="flex items-center gap-2">
                <span className="text-violet-400">✓</span>
                Secure access
              </div>

              <div className="flex items-center gap-2">
                <span className="text-violet-400">✓</span>
                Manage anywhere
              </div>
            </div>
          </div>

          {/* Notes Dashboard Preview */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-2xl border border-white/10 bg-[#1b1c35] p-5 shadow-2xl shadow-black/30 md:p-7">
              {/* Dashboard Header */}
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Workspace</p>
                  <h2 className="mt-1 text-2xl font-bold">My Notes</h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/20 text-xl text-violet-300">
                  ✎
                </div>
              </div>

              {/* Search Bar */}
              <div className="mb-6 flex items-center gap-3 rounded-lg border border-white/10 bg-[#111225] px-4 py-3 text-gray-500">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path d="m21 21-4.35-4.35" strokeWidth="2" />
                </svg>
                <span className="text-sm">Search your notes...</span>
              </div>

              {/* Notes */}
              <div className="space-y-4">
                {/* Note 1 */}
                <div className="rounded-xl border border-violet-400/20 bg-violet-500/10 p-5 transition hover:bg-violet-500/15">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-violet-400/20 px-3 py-1 text-xs text-violet-300">
                      Personal
                    </span>
                    <span className="text-xs text-gray-500">Today</span>
                  </div>

                  <h3 className="mb-2 font-semibold text-white">
                    Project Ideas
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-400">
                    Brainstorm new ideas and plan upcoming projects for the next
                    development phase...
                  </p>
                </div>

                {/* Note 2 */}
                <div className="rounded-xl border border-white/10 bg-[#22233d] p-5 transition hover:border-blue-400/30">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-blue-400/20 px-3 py-1 text-xs text-blue-300">
                      Work
                    </span>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </div>

                  <h3 className="mb-2 font-semibold text-white">
                    Development Tasks
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-400">
                    Complete frontend components, integrate APIs and test
                    application functionality...
                  </p>
                </div>

                {/* Note 3 */}
                <div className="rounded-xl border border-white/10 bg-[#22233d] p-5 transition hover:border-green-400/30">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-green-400/20 px-3 py-1 text-xs text-green-300">
                      Ideas
                    </span>
                    <span className="text-xs text-gray-500">Nov 15</span>
                  </div>

                  <h3 className="mb-2 font-semibold text-white">
                    Learning Goals
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-400">
                    Practice React, Node.js and MongoDB to improve full-stack
                    development skills...
                  </p>
                </div>
              </div>

              {/* Dashboard Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-gray-400">
                  Your ideas, all in one place.
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-2xl text-white">
                  +
                </div>
              </div>
            </div>

            {/* Floating Label */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-[#252642] px-5 py-3 shadow-xl sm:block">
              <p className="text-sm font-semibold text-white">
                Stay organized ✨
              </p>
              <p className="text-xs text-gray-400">One note at a time</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero1;
