function Hero() {
  return (
    <section id="home" className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid min-h-[85vh] max-w-screen-2xl grid-cols-1 gap-8 px-8 py-20 lg:grid-cols-12 lg:gap-12 lg:px-16 lg:py-28">
        {/* Hero Content */}
        <div className="place-self-center lg:col-span-7">
          <h1 className="mb-6 max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl xl:text-7xl dark:text-white">
            Payments tool for software companies
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white transition hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              Get started
              <svg
                className="ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-base font-medium text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
            >
              Speak to Sales
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden lg:col-span-5 lg:flex lg:items-center">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="Phone mockup"
            className="w-full max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
