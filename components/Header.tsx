'use client';

import Link from 'next/link';
import { useState } from 'react';
import { assets } from '@/lib/assets/images';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Navigation */}
      <header className="bg-white border-b-2 border-[#cdbee6] flex items-center justify-between pb-[18px] pt-6 px-4 md:px-6 lg:px-12 w-full">
        <div className="flex-1">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link
              href="/"
              className="relative w-32 md:w-[234px] aspect-[234/36]"
            >
              <div className="absolute inset-[22.19%_0_14.2%_18.64%]">
                <img
                  alt="Tenzr"
                  className="block w-full h-full object-contain"
                  src={assets.logoText}
                />
              </div>
              <div className="absolute inset-[0_84.7%_0_0]">
                <img
                  alt=""
                  className="block w-full h-full object-contain"
                  src={assets.logoIcon}
                />
              </div>
            </Link>

            {/* Mobile Menu Icon */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="md:hidden flex items-center justify-center w-12 h-12 relative"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="#845ec0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="#845ec0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="#845ec0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Navigation Links - Hidden on mobile, shown on tablet+ */}
            <nav className="hidden md:flex gap-6 items-center justify-end flex-1 p-2">
              <Link
                href="/#about"
                className="text-[16px] text-[#845ec0] leading-[1.4]"
              >
                About
              </Link>
              <Link
                href="/#features"
                className="text-[16px] text-[#845ec0] leading-[1.4]"
              >
                Features
              </Link>
              <Link
                href="/#testimonials"
                className="text-[16px] text-[#845ec0] leading-[1.4]"
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="text-[16px] text-[#845ec0] leading-[1.4]"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden w-full px-4 transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-3 bg-white border-b border-[#cdbee6] py-4">
          <Link
            href="/#about"
            onClick={closeMenu}
            className="text-[16px] text-[#845ec0] leading-[1.4]"
          >
            About
          </Link>
          <Link
            href="/#features"
            onClick={closeMenu}
            className="text-[16px] text-[#845ec0] leading-[1.4]"
          >
            Features
          </Link>
          <Link
            href="/#testimonials"
            onClick={closeMenu}
            className="text-[16px] text-[#845ec0] leading-[1.4]"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-[16px] text-[#845ec0] leading-[1.4]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
