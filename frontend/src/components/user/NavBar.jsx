import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/AuthSlice";

function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get logged-in user from Redux
  const user = useSelector((state) => state.auth.userdata);

  console.log(user, "user");

  // Logout functionality
  const handleLogout = () => {
    dispatch(logout());
    setOpenNav(false);
    navigate("/login");
  };

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Pages", href: "#pages" },
    { name: "Account", href: "#account" },
    { name: "Blocks", href: "#blocks" },
    { name: "Docs", href: "#docs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white px-6 py-4 shadow-sm lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-gray-900">
          WebApp<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop User and Logout */}
        <div className="hidden items-center gap-4 lg:flex">
          {user && (
            <span className="text-sm font-medium text-gray-700">
              Welcome, {user.name}
            </span>
          )}

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Log Out
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpenNav(!openNav)}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={openNav}
        >
          {openNav ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {openNav && (
        <div className="mt-4 flex flex-col gap-4 border-t border-gray-200 pt-4 lg:hidden">
          {user && (
            <p className="text-sm font-medium text-gray-700">
              Welcome, {user.name}
            </p>
          )}

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpenNav(false)}
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={handleLogout}
            className="w-full rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
