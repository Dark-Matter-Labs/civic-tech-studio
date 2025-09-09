"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dm-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom py-6 md:py-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-lg md:text-xl font-medium text-dm-gray-1"
          >
            Dark Matter Labs / Civic Tech Studio
          </Link>

          <ul className="hidden md:flex gap-8 lg:gap-12">
            <li>
              <Link
                href="#why"
                className="text-dm-gray-3 hover:text-dm-gray-1 transition-colors"
              >
                Why Civic Tech
              </Link>
            </li>
            <li>
              <Link
                href="#approach"
                className="text-dm-gray-3 hover:text-dm-gray-1 transition-colors"
              >
                Approach
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-dm-gray-3 hover:text-dm-gray-1 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#learning"
                className="text-dm-gray-3 hover:text-dm-gray-1 transition-colors"
              >
                Learning
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-dm-gray-3 hover:text-dm-gray-1 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
