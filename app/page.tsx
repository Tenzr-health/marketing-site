'use client';

import Link from 'next/link';
import { useState } from 'react';
import { assets } from '@/lib/assets/images';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-white flex flex-col gap-6 md:gap-8 lg:gap-10 items-start w-full">
      {/* Header Section */}
      <div className="flex flex-col items-start w-full relative overflow-hidden bg-gradient-to-b from-[#f0ecf8] via-white to-white pt-0">
        {/* Navigation */}
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
                  href="#about"
                  className="text-[16px] text-[#845ec0] leading-[1.4]"
                >
                  About
                </Link>
                <Link
                  href="#features"
                  className="text-[16px] text-[#845ec0] leading-[1.4]"
                >
                  Features
                </Link>
                <Link
                  href="#testimonials"
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
              href="#about"
              onClick={closeMenu}
              className="text-[16px] text-[#845ec0] leading-[1.4]"
            >
              About
            </Link>
            <Link
              href="#features"
              onClick={closeMenu}
              className="text-[16px] text-[#845ec0] leading-[1.4]"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
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

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between w-full px-4 sm:px-6 md:pl-10 md:pr-0 lg:pl-12 lg:pr-0 pt-0 pb-4 md:pb-6 relative gap-0 md:gap-4 lg:items-start">
          {/* Hero Text Content */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-8 items-start py-0 z-10 order-2 lg:order-1 max-w-[560px] w-full md:w-auto lg:pt-12">
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 items-start w-full">
              <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-bold text-[#212529] leading-[1.05] w-full">
                <span className="block">Connected Care,</span>
                <span className="block">Continuous Recovery</span>
              </h1>
              <p className="text-[16px] sm:text-[17px] md:text-[16px] lg:text-[17px] text-[#495057] leading-[1.5] w-full md:w-[90%] lg:w-[448px]">
                Provide guidance, education, and exercises while receiving data,
                recovery signals, and insights to monitor progress and flag
                risks
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-[#845ec0] flex gap-2 items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#7352ad] transition-colors shadow-lg hover:shadow-xl"
            >
              <span className="text-[16px] sm:text-[17px] md:text-[16px] text-white leading-[1.4] font-medium">
                Book a Demo
              </span>
              <img src={assets.arrowRight} alt="" className="w-4 h-4" />
            </Link>
          </div>

          {/* Hero Image with Purple Blob Shape - Figma style */}
          <div className="relative h-[360px] sm:h-[400px] md:h-[420px] lg:h-[549px] w-full md:w-auto md:flex-shrink-0 overflow-visible flex md:block justify-center order-1 lg:order-2 lg:w-[443px] lg:flex-shrink-0">
            {/* Large screen hero image with waves */}
            <div className="absolute md:relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 top-0 md:top-auto w-[90%] sm:w-[90%] md:w-[90%] lg:w-[443px] h-[360px] sm:h-[400px] md:h-[420px] lg:h-[549px] z-10 hidden lg:block">
              <img
                alt="Hand holding phone with Tenzr app"
                className="w-full h-full object-contain object-right-top"
                src={assets.heroWithWaves}
              />
            </div>

            {/* Small and medium screen hero image */}
            <div className="relative lg:top-auto left-0 right-0 w-screen lg:w-[443px] h-[360px] sm:h-[400px] md:h-[420px] lg:h-[549px] z-10 lg:hidden flex-shrink-0 -ml-4 sm:-ml-6 md:-ml-10 lg:m-0">
              <img
                alt="Hand holding phone with Tenzr app"
                className="w-full h-full object-cover object-center"
                src={assets.heroSmall}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Rocket between hero and content */}
      <div className="relative w-full overflow-hidden bg-white py-4 sm:py-6 md:py-7 lg:py-9">
        {/* Waves */}
        <div className="absolute inset-x-0 bottom-0 h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px]">
          <svg
            viewBox="0 0 1200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80 C 120 120 240 40 360 80 C 480 120 600 40 720 80 C 840 120 960 40 1080 80 L 1200 120 L 1200 200 L 0 200 Z"
              fill="#c7b5e5"
            />
          </svg>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[60px] sm:h-[70px] md:h-[90px] lg:h-[110px]">
          <svg
            viewBox="0 0 1200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 100 C 150 70 300 130 450 100 C 600 70 750 130 900 100 C 1050 70 1200 120 1200 120 L 1200 200 L 0 200 Z"
              fill="#f5f1fb"
            />
          </svg>
        </div>

        {/* Rocket */}
        <div className="relative flex justify-center w-full pb-4 sm:pb-6 md:pb-8">
          <img
            src={assets.rocketWithPath}
            alt="Tenzr rocket illustration"
            className="w-auto h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] aspect-auto object-contain"
          />
        </div>
      </div>

      {/* Recovery Section */}
      <section
        id="about"
        className="bg-[#f7f4fb] flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-center pb-8 md:pb-12 lg:pb-16 pt-4 md:pt-8 lg:pt-10 px-4 sm:px-6 md:px-10 lg:px-12 w-full"
      >
        {/* Recovery Happens in Daily Life */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center w-full max-w-[1280px] mx-auto">
          {/* Image - Visible on mobile and desktop */}
          <div className="relative w-screen lg:w-[320px] h-[400px] sm:h-[420px] md:h-[380px] lg:h-[400px] overflow-hidden rounded-none lg:rounded-[16px] shadow-none lg:shadow-[0px_16.87px_33.741px_-8.098px_rgba(0,0,0,0.25)] flex-shrink-0 bg-white -ml-4 sm:-ml-6 md:-ml-10 lg:m-0">
            <img
              alt="Person watering plant"
              className="w-full h-full object-cover object-center"
              src={assets.recoveryWateringPlant}
            />
          </div>

          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 items-start w-full lg:flex-1 lg:max-w-[560px] px-2 sm:px-4 md:px-0">
            <h2 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-bold text-[#212529] leading-[1.2] w-full">
              Recovery Happens in Daily Life
            </h2>
            <p className="text-[17px] sm:text-[18px] md:text-[16px] lg:text-[17px] text-[#495057] leading-[1.5] w-full">
              Most recovery takes place while patients are living their lives —
              working, caring for family, or doing chores.
              <span className="text-[#845ec0] font-semibold">
                {' '}
                Tenzr Health bridges the gap between clinic visits, where
                patients can feel unsure, preventable setbacks can occur, and
                outcomes can suffer.
              </span>
            </p>
          </div>
        </div>

        {/* Bridging the Gap */}
        <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 lg:gap-12 items-center w-full max-w-[1280px] mx-auto">
          {/* Image - Visible on mobile and desktop */}
          <div className="relative w-screen lg:w-[320px] h-[360px] sm:h-[380px] md:h-[360px] lg:h-[400px] overflow-hidden rounded-none lg:rounded-[16px] shadow-none lg:shadow-[0px_16.981px_33.963px_-8.151px_rgba(0,0,0,0.25)] flex-shrink-0 bg-white -ml-4 sm:-ml-6 md:-ml-10 lg:m-0">
            <img
              alt="Plants representing growth"
              className="w-full h-full object-cover object-center"
              src={assets.recoveryPlantGrowth}
            />
          </div>

          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 items-start w-full lg:flex-1 lg:max-w-[560px] px-2 sm:px-4 md:px-0">
            <h2 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-bold text-[#212529] leading-[1.2] w-full">
              Bridging the Gap Between Visits
            </h2>
            <div className="text-[17px] sm:text-[18px] md:text-[16px] lg:text-[17px] text-[#495057] leading-[1.5] w-full">
              <p className="mb-4">
                Tenzr extends the clinician’s care beyond the clinic — ensuring
                every patient is{' '}
                <span className="text-[#845ec0] font-semibold">
                  guided, supported, and set up for success.
                </span>
              </p>
              <p>
                It keeps patients moving with continuous guidance while
                preserving clinician time; if risk emerges, it offers clear,
                actionable prompts clinicians want to see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section
        id="features"
        className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-14 w-full"
      >
        <div className="flex flex-col gap-3 sm:gap-4 items-center w-full max-w-[600px] md:max-w-[680px] mx-auto">
          <h2 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-bold text-[#212529] leading-[1.2] text-center">
            Platform Features
          </h2>
          <p className="text-[17px] sm:text-[18px] md:text-[16px] lg:text-[17px] text-[#495057] leading-[1.5] text-center">
            Everything you need to deliver exceptional care and improve patient
            outcomes.
          </p>
        </div>

        {/* Feature Cards - Stack on mobile, grid on tablet+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full max-w-[560px] sm:max-w-[640px] md:max-w-[800px] lg:max-w-[940px] xl:max-w-[1000px] mx-auto">
          {/* Card 1 */}
          <div className="bg-white border-2 border-[#cdbee6] flex flex-col gap-4 sm:gap-5 md:gap-6 items-center justify-center p-6 sm:p-7 md:p-8 rounded-[16px] hover:shadow-lg transition-shadow">
            <div className="w-[72px] sm:w-[80px] md:w-[88px] lg:w-[92px] h-[72px] sm:h-[80px] md:h-[88px] lg:h-[92px]">
              <img
                src={assets.iconWorkflow}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[16px] sm:text-[15px] md:text-[16px] text-[#495057] leading-[1.5] text-center">
              Tailored to your workflows and patient population
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-2 border-[#cdbee6] flex flex-col gap-4 sm:gap-5 md:gap-6 items-center justify-center p-6 sm:p-7 md:p-8 rounded-[16px] hover:shadow-lg transition-shadow">
            <div className="w-[72px] sm:w-[80px] md:w-[88px] lg:w-[92px] h-[72px] sm:h-[80px] md:h-[88px] lg:h-[92px]">
              <img
                src={assets.iconDataInsights}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[16px] sm:text-[15px] md:text-[16px] text-[#495057] leading-[1.5] text-center">
              Maximize the value of each appointment with recovery data since
              the last visit
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-2 border-[#cdbee6] flex flex-col gap-4 sm:gap-5 md:gap-6 items-center justify-center p-6 sm:p-7 md:p-8 rounded-[16px] hover:shadow-lg transition-shadow">
            <div className="w-[72px] sm:w-[80px] md:w-[88px] lg:w-[92px] h-[72px] sm:h-[80px] md:h-[88px] lg:h-[92px]">
              <img
                src={assets.iconReimbursement}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[16px] sm:text-[15px] md:text-[16px] text-[#495057] leading-[1.5] text-center">
              Unlock reimbursement opportunities through RTM, RPM, CCM, and
              Value-Based Care
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border-2 border-[#cdbee6] flex flex-col gap-4 sm:gap-5 md:gap-6 items-center justify-center p-6 sm:p-7 md:p-8 rounded-[16px] hover:shadow-lg transition-shadow">
            <div className="w-[72px] sm:w-[80px] md:w-[88px] lg:w-[92px] h-[72px] sm:h-[80px] md:h-[88px] lg:h-[92px]">
              <img
                src={assets.iconWorkflow}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[16px] sm:text-[15px] md:text-[16px] text-[#495057] leading-[1.5] text-center">
              Extend clinical capacity by addressing provider shortages and
              expanding access to care
            </p>
          </div>
        </div>
      </section>

      {/* Seamless Workflow Section */}
      <section className="bg-[#e9e2f4] flex flex-col gap-6 sm:gap-8 md:gap-10 items-center justify-center pb-6 sm:pb-8 md:pb-10 w-full">
        {/* Header */}
        <div className="bg-[#f7f4fb] flex flex-col lg:flex-row gap-3 sm:gap-4 items-start justify-start overflow-hidden pb-4 sm:pb-5 pt-10 sm:pt-12 md:pt-14 px-4 sm:px-6 md:px-10 lg:px-12 w-full rounded-none lg:rounded-[18px]">
          <div className="flex-1 flex flex-col gap-3 sm:gap-4 items-start justify-center w-full">
            <div className="flex items-center overflow-hidden w-full">
              <div className="flex-1 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#212529] leading-[1.2]">
                <p className="mb-0">A Seamless Workflow</p>
                <p>for Connected Recovery</p>
              </div>
            </div>
            <div className="flex items-center w-full">
              <p className="flex-1 text-[16px] sm:text-[17px] md:text-[16px] lg:text-[17px] text-[#495057] leading-[1.5]">
                Built Around Your Practice, Not the Other Way Around
              </p>
            </div>
          </div>
        </div>

        {/* Workflow Cards */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 items-stretch px-4 sm:px-6 md:px-10 w-full max-w-[560px] sm:max-w-[640px] md:max-w-[800px] lg:max-w-[940px] mx-auto">
          {/* Card 1 - Deliver Personalized Programs */}
          <div className="bg-white border-2 border-[#cdbee6] flex flex-col gap-3 sm:gap-4 items-center px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 rounded-[20px] sm:rounded-[24px]">
            <div className="w-full">
              <p className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[22px] font-semibold text-[#212529] leading-[1.3]">
                Deliver Personalized Programs From Day One
              </p>
            </div>
            <ul className="text-[15px] sm:text-[16px] md:text-[15px] lg:text-[16px] text-[#495057] leading-[1.5] list-disc pl-6 sm:pl-7 md:pl-8 w-full">
              <li className="mb-1">
                Clinicians assess each patient&apos;s needs and goals as usual
                during the first.
              </li>
              <li>
                With Tenzr, that plan is extended into a digital format — giving
                patients guided.
              </li>
            </ul>
            <div className="relative flex justify-center w-full">
              <div className="relative w-[220px] sm:w-[240px] md:w-[268px] h-[130px] sm:h-[145px] md:h-[160px]">
                {/* Laptop frame */}
                <img
                  src={assets.laptopFrame}
                  alt="Tenzr Dashboard"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                {/* Screen content on top - positioned to match Figma */}
                <img
                  src={assets.dashboardScreen}
                  alt=""
                  className="absolute top-[4px] sm:top-[5px] left-[28px] sm:left-[31px] md:left-[34px] w-[164px] sm:w-[182px] md:w-[200px] h-[93px] sm:h-[103px] md:h-[113px] object-contain"
                />
                <img
                  src={assets.deviceShadow}
                  alt=""
                  className="absolute left-[-8px] bottom-0 w-[284px] h-[2px] mix-blend-multiply"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - Patients Actively Engage */}
          <div className="bg-white border-2 border-[#cdbee6] flex flex-col gap-3 sm:gap-4 items-center justify-center px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 rounded-[20px] sm:rounded-[24px]">
            <div className="w-full">
              <p className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[22px] font-semibold text-[#212529] leading-[1.3]">
                Patients Actively Engage in Their Recovery
              </p>
            </div>
            <ul className="text-[15px] sm:text-[16px] md:text-[15px] lg:text-[16px] text-[#495057] leading-[1.5] list-disc pl-6 sm:pl-7 md:pl-8 w-full">
              <li className="mb-1">
                Clinicians assess each patient&apos;s needs and goals as usual
                during the first.
              </li>
              <li className="mb-1">
                With Tenzr, that plan is extended into a digital format — giving
                patients guided.
              </li>
              <li>
                With Tenzr, that plan is extended into a digital format — giving
                patients guided.
              </li>
            </ul>
            <div className="flex gap-3 sm:gap-4 justify-center">
              {/* Phone 1 */}
              <div className="relative">
                <img
                  src={assets.iphoneFrame}
                  alt="iPhone showing app"
                  className="w-[120px] sm:w-[140px] md:w-[159px] h-[232px] sm:h-[270px] md:h-[307px] object-contain"
                />
                {/* Screen content overlay */}
                <div className="absolute top-[6px] sm:top-[7px] md:top-[8px] left-[6px] sm:left-[7px] md:left-[8px] w-[108px] sm:w-[126px] md:w-[143px] h-[220px] sm:h-[256px] md:h-[291px] overflow-hidden rounded-[12px] sm:rounded-[14px] md:rounded-[15px]">
                  <img
                    src={assets.appScreenCheckIn}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              {/* Phone 2 */}
              <div className="relative">
                <img
                  src={assets.iphoneFrameAlt}
                  alt="iPhone showing app"
                  className="w-[120px] sm:w-[140px] md:w-[159px] h-[232px] sm:h-[270px] md:h-[307px] object-contain"
                />
                {/* Screen content overlay */}
                <div className="absolute top-[6px] sm:top-[7px] md:top-[8px] left-[6px] sm:left-[7px] md:left-[8px] w-[108px] sm:w-[126px] md:w-[143px] h-[220px] sm:h-[256px] md:h-[291px] overflow-hidden rounded-[12px] sm:rounded-[14px] md:rounded-[15px]">
                  <img
                    src={assets.appScreenExercises}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Clinicians Review & Adjust */}
          <div className="bg-white border-2 border-[#cdbee6] flex flex-col gap-3 sm:gap-4 items-center justify-center px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 rounded-[20px] sm:rounded-[24px]">
            <div className="w-full">
              <p className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[22px] font-semibold text-[#212529] leading-[1.3]">
                Clinicians Review &amp; Adjust with Ease
              </p>
            </div>
            <ul className="text-[15px] sm:text-[16px] md:text-[15px] lg:text-[16px] text-[#495057] leading-[1.5] list-disc pl-6 sm:pl-7 md:pl-8 w-full">
              <li className="mb-1">
                Clinicians assess each patient&apos;s needs and goals as usual
                during the first.
              </li>
              <li className="mb-1">
                With Tenzr, that plan is extended into a digital format — giving
                patients guided.
              </li>
              <li>
                With Tenzr, that plan is extended into a digital format — giving
                patients guided.
              </li>
            </ul>
            <div className="h-[200px] sm:h-[225px] md:h-[253px] w-[220px] sm:w-[245px] md:w-[268px] relative overflow-hidden">
              {/* Laptop - screen content is baked into this image */}
              <img
                src={assets.laptopWithContent}
                alt="Laptop"
                className="absolute top-[1px] left-[20px] sm:left-[22px] md:left-[25px] w-[344px] sm:w-[380px] md:w-[420px] h-[195px] sm:h-[215px] md:h-[238px] object-contain"
              />
              {/* Phone with screen content */}
              <div className="absolute top-[21px] sm:top-[23px] md:top-[26px] left-[8px] sm:left-[9px] md:left-[10px] w-[88px] sm:w-[97px] md:w-[107px] h-[170px] sm:h-[188px] md:h-[207px]">
                {/* Phone frame */}
                <img
                  src={assets.iphoneFrame}
                  alt="iPhone"
                  className="w-full h-full object-contain"
                />
                {/* Screen content - using appScreenProgress per Figma */}
                <img
                  src={assets.appScreenProgress}
                  alt=""
                  className="absolute top-[2px] sm:top-[3px] left-[5px] sm:left-[6px] w-[78px] sm:w-[86px] md:w-[95px] h-[164px] sm:h-[182px] md:h-[200px] object-contain rounded-[10px] sm:rounded-[11px] md:rounded-[12px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="flex flex-col gap-5 sm:gap-6 md:gap-8 items-center px-4 sm:px-6 md:px-10 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12 w-full"
      >
        <div className="flex flex-col items-center justify-center w-full gap-2 sm:gap-3">
          <img
            src={assets.celebrationIcon}
            alt=""
            className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 object-contain"
          />
          <h2 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-bold text-[#212529] leading-[1.2] text-center">
            Testimonials
          </h2>
        </div>

        {/* Therapist Testimonials */}
        <div className="flex flex-col gap-3 sm:gap-4 items-center w-full px-0 sm:px-0 md:px-0 lg:px-0">
          <div className="flex flex-col items-center w-full">
            <h3 className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[22px] font-semibold text-[#212529] leading-[1.3] text-center w-full">
              Hear from our Therapists
            </h3>
          </div>
          <div className="flex items-center justify-center w-full px-4 sm:px-6 md:px-10 lg:px-12">
            <div className="bg-white border-2 border-[#cdbee6] flex flex-col gap-4 sm:gap-5 md:gap-6 items-start justify-center p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[18px] md:rounded-[21px] shadow-[0px_3.568px_6.244px_0px_rgba(132,94,192,0.17)] w-full max-w-[700px] lg:max-w-[900px]">
              <p className="text-[15px] sm:text-[15px] md:text-[16px] text-[#495057] leading-[1.5]">
                &quot;Ensuring patients stay engaged and committed to their
                rehabilitation once they leave the clinic can be a challenge.
                With Tenzr, we can monitor their progress in real-time, helping
                to provide timely adjustments to their treatment plans.&quot;
              </p>
              <div>
                <p className="text-[15px] sm:text-[15px] md:text-[16px] font-semibold text-[#212529] leading-[1.3]">
                  Natalie Thornley
                </p>
                <p className="text-[13px] sm:text-[13px] md:text-[14px] text-[#495057] leading-[1.4]">
                  Occupational Therapist and Clinical Leader
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Testimonials */}
        <div className="flex flex-col gap-3 sm:gap-4 items-center w-full">
          <div className="flex items-center justify-center w-full px-4 sm:px-6 md:px-10 lg:px-12">
            <h3 className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[22px] font-semibold text-[#212529] leading-[1.3] text-center flex-1">
              Hear from our Patients
            </h3>
          </div>
          <div className="w-full overflow-x-auto scrollbar-hide px-4 sm:px-6 md:px-10 lg:px-12">
            <div className="flex gap-4 sm:gap-5 md:gap-6 w-max pb-2">
              {/* Patient Card 1 */}
              <div className="bg-white border-2 border-[#cdbee6] flex flex-col gap-4 sm:gap-5 md:gap-6 items-start justify-between p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[18px] md:rounded-[21px] shadow-[0px_3.568px_6.244px_0px_rgba(132,94,192,0.17)] min-h-[180px] sm:min-h-[200px] md:min-h-[220px] w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0">
                <p className="text-[15px] sm:text-[15px] md:text-[16px] text-[#495057] leading-[1.5]">
                  &quot;Since physical therapy is mostly at home, some people
                  just need a kick in the butt to do their exercises, which is
                  what Tenzr does.&quot;
                </p>
                <div>
                  <p className="text-[15px] sm:text-[15px] md:text-[16px] font-semibold text-[#212529] leading-[1.3]">
                    Michael L.
                  </p>
                  <p className="text-[13px] sm:text-[13px] md:text-[14px] text-[#495057] leading-[1.4]">
                    Patient
                  </p>
                </div>
              </div>

              {/* Patient Card 2 */}
              <div className="bg-white border-2 border-[#cdbee6] flex flex-col gap-4 sm:gap-5 md:gap-6 items-start justify-between p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[18px] md:rounded-[21px] shadow-[0px_3.568px_6.244px_0px_rgba(132,94,192,0.17)] min-h-[180px] sm:min-h-[200px] md:min-h-[220px] w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0">
                <p className="text-[15px] sm:text-[15px] md:text-[16px] text-[#495057] leading-[1.5]">
                  &quot;You never know if you&apos;re doing the right thing or
                  not when exercising. That&apos;s why this is such an amazing
                  tool, especially because in-person appointments can be few and
                  far between.&quot;
                </p>
                <div>
                  <p className="text-[15px] sm:text-[15px] md:text-[16px] font-semibold text-[#212529] leading-[1.3]">
                    Sarah D.
                  </p>
                  <p className="text-[13px] sm:text-[13px] md:text-[14px] text-[#495057] leading-[1.4]">
                    Patient
                  </p>
                </div>
              </div>

              {/* Patient Card 3 */}
              <div className="bg-white border-2 border-[#cdbee6] flex flex-col gap-4 sm:gap-5 md:gap-6 items-start justify-between p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[18px] md:rounded-[21px] shadow-[0px_3.568px_6.244px_0px_rgba(132,94,192,0.17)] min-h-[180px] sm:min-h-[200px] md:min-h-[220px] w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0">
                <p className="text-[15px] sm:text-[15px] md:text-[16px] text-[#495057] leading-[1.5]">
                  &quot;Overall, the Tenzr app has made me more committed to my
                  physical therapy program, and I&apos;m seeing the
                  results.&quot;
                </p>
                <div>
                  <p className="text-[15px] sm:text-[15px] md:text-[16px] font-semibold text-[#212529] leading-[1.3]">
                    Lydia G.
                  </p>
                  <p className="text-[13px] sm:text-[13px] md:text-[14px] text-[#495057] leading-[1.4]">
                    Patient
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="flex flex-col items-start overflow-hidden px-4 sm:px-6 md:px-10 lg:px-12 py-6 sm:py-8 md:py-10 w-full">
        <div className="flex flex-col gap-4 sm:gap-5 items-start text-left w-full max-w-[560px]">
          <p className="text-[17px] sm:text-[18px] md:text-[19px] lg:text-[21px] text-[#495057] leading-[1.5]">
            Learn more about Tenzr and receive the latest insights in
            physical/occupational therapy
          </p>
          <Link
            href="/contact"
            className="bg-[#845ec0] flex gap-2 items-center px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full hover:bg-[#7352ad] transition-colors"
          >
            <span className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] text-white leading-[1.4] font-medium">
              Sign up for newsletter
            </span>
            <img src={assets.arrowRight} alt="" className="w-4 h-4" />
          </Link>
        </div>
      </section>

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
