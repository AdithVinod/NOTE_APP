function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto w-full max-w-7xl p-6 py-8 lg:py-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center">
              <span className="self-center text-2xl font-bold text-gray-900">
                WebApp<span className="text-blue-600">.</span>
              </span>
            </a>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Resources
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Follow Us
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <a href="https://github.com/" className="hover:underline">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://discord.com/" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Legal
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />

        {/* Copyright and Social Links */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-gray-500">
            © 2026 WebApp. All Rights Reserved.
          </span>

          <div className="flex gap-5">
            <a
              href="https://facebook.com/"
              className="text-sm text-gray-500 hover:text-blue-600"
            >
              Facebook
            </a>
            <a
              href="https://github.com/"
              className="text-sm text-gray-500 hover:text-blue-600"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/"
              className="text-sm text-gray-500 hover:text-blue-600"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
