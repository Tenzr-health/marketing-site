'use client';

import Link from 'next/link';
import { useState } from 'react';
import ContactForm from '@/components/forms/ContactForm';
import { assets } from '@/lib/assets/images';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b-2 border-[#cdbee6] flex items-center justify-between pb-[18px] pt-6 px-4 md:px-6 lg:px-12 w-full">
        <div className="flex-1">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="relative w-32 md:w-[234px] aspect-[234/36]">
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
            </div>

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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[40px] sm:text-[66px] font-bold text-neutral-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700">
              Have a question or want to work together? Fill out the form below
              and we&apos;ll get back to you shortly.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-primary-300 p-6 sm:p-12">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="bg-primary-50 p-6 sm:p-8 rounded-2xl">
              <div className="mb-4 flex justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#845ec0]"
                >
                  <path
                    d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Email</h3>
              <p className="text-neutral-700">hello@tenzrhealth.com</p>
            </div>

            <div className="bg-primary-50 p-6 sm:p-8 rounded-2xl">
              <div className="mb-4 flex justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#845ec0]"
                >
                  <path
                    d="M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Phone</h3>
              <p className="text-neutral-700">+1 (833) 988-9497</p>
            </div>

            <div className="bg-primary-50 p-6 sm:p-8 rounded-2xl">
              <div className="mb-4 flex justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#845ec0]"
                >
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Location</h3>
              <p className="text-neutral-700">Vancouver, B.C. Canada</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f7f4fb] w-full">
        <div className="flex flex-col items-start px-4 sm:px-6 md:px-10 lg:px-12 py-6 sm:py-8 md:py-10 w-full gap-8">
          <p className="text-[17px] sm:text-[18px] md:text-[19px] lg:text-[21px] text-[#495057] leading-[1.5]">
            Get in touch with us!
          </p>

          {/* Logo */}
          <div className="h-[39px] relative w-[257px]">
            <div className="absolute inset-[22.19%_0_14.2%_18.64%]">
              <img
                alt="Tenzr"
                className="block w-full h-full object-contain"
                src={assets.logoTextPurple}
              />
            </div>
            <div className="absolute inset-[0_84.7%_0_0]">
              <img
                alt=""
                className="block w-full h-full object-contain"
                src={assets.logoIconPurple}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-8 lg:gap-0">
            {/* Left column with contact */}
            <div className="flex flex-col gap-2 items-start text-[15px] sm:text-[15px] md:text-[16px] text-[#495057] leading-[1.5]">
              <Link
                href="mailto:hello@tenzrhealth.com?subject=Tenzr%20inquiry"
                className="underline"
              >
                hello@tenzrhealth.com
              </Link>
              <Link href="tel:1-833-888-3697" className="underline">
                1.833.888.3697
              </Link>
            </div>

            {/* Right column with contact links */}
            <div className="flex flex-col gap-2 items-start lg:items-end text-[15px] sm:text-[15px] md:text-[16px] text-[#495057] leading-[1.5]">
              <Link href="/contact" className="underline">
                Contact us
              </Link>
              <Link
                href="https://linkedin.com/company/tenzr"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
