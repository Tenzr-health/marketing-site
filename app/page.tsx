import Link from "next/link";
import Image from "next/image";
import WaveAsset from "@/components/WaveAsset";

/**
 * Home page for Tenzr Health marketing site
 * 
 * IMAGES: Replace placeholder images in /public/placeholders/ with your own images
 * You can use https://picsum.photos or your own custom images from Figma designs
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-neutral-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-5">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-neutral-900">Tenzr Health</div>
            <div className="flex gap-8">
              <Link href="/" className="text-neutral-900 hover:text-primary-500 transition-colors">
                About
              </Link>
              <Link href="#features" className="text-neutral-900 hover:text-primary-500 transition-colors">
                Features
              </Link>
              <Link href="#testimonials" className="text-neutral-900 hover:text-primary-500 transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="text-neutral-900 hover:text-primary-500 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Wave Asset */}
      <main>
        <section className="relative bg-primary-100 overflow-hidden">
          <WaveAsset className="top-0 right-0 opacity-40" variant="top" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-[40px] sm:text-[66px] font-bold text-neutral-900 leading-tight">
                  Connected Care,<br />Continuous Recovery
                </h1>
                <p className="text-lg sm:text-xl text-neutral-700 max-w-xl">
                  Provide guidance, education and resources while reducing care burden, expense and risk to member progress and long term health.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full text-base font-medium text-white bg-primary-500 hover:bg-primary-600 transition-colors"
                >
                  Book a Demo →
                </Link>
              </div>
              <div className="relative">
                <div className="relative bg-primary-200 rounded-3xl p-8 overflow-hidden">
                  <Image
                    src="/placeholders/hero.svg"
                    alt="Healthcare professional using mobile app"
                    width={600}
                    height={700}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Section */}
        <section className="py-16 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative bg-primary-100 rounded-3xl p-8 overflow-hidden">
                  <Image
                    src="/placeholders/recovery.svg"
                    alt="Person engaged in recovery activities"
                    width={600}
                    height={500}
                    className="rounded-2xl"
                  />
                  <WaveAsset className="absolute bottom-0 left-0" variant="bottom" />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-[32px] sm:text-[48px] font-bold text-neutral-900">
                  Recovery Happens in Daily Life
                </h2>
                <p className="text-lg text-neutral-700">
                  Most recovery is long-term or has potential to be long-term (lack of ongoing services), happens primarily outside of clinical visits is when patients can feel unsure, uncomfortable setbacks can occur, and outcomes can suffer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bridging the Gap Section */}
        <section className="py-16 sm:py-32 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h2 className="text-[32px] sm:text-[48px] font-bold text-neutral-900">
                  Bridging the Gap Between Visits
                </h2>
                <p className="text-lg text-neutral-700">
                  Tenzr extends the clinician&apos;s care beyond the clinic — ensuring every patient is guided, supported, and set up for success.
                </p>
                <p className="text-base text-neutral-700">
                  It keeps patients moving with continuous guidance while preventing setbacks, if risk emerges, it offers clear, actionable insight for faster intervention.
                </p>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-primary-100 rounded-3xl p-8">
                  <Image
                    src="/placeholders/recovery.svg"
                    alt="Digital health monitoring"
                    width={600}
                    height={500}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section id="features" className="py-16 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-[32px] sm:text-[48px] font-bold text-neutral-900 text-center mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-neutral-700 text-center mb-16 max-w-3xl mx-auto">
              Everything you need to deliver exceptional care and improve patient outcomes
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Feature Card 1 */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 sm:border-2 border-primary-300 sm:shadow-none">
                <div className="mb-6">
                  <Image
                    src="/placeholders/feature.svg"
                    alt="Tailored workflows icon"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Tailored to your workflows and patient population
                </h3>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 sm:border-2 border-primary-300 sm:shadow-none">
                <div className="mb-6">
                  <Image
                    src="/placeholders/feature.svg"
                    alt="Care management icon"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Maximize the value of care appointments with recovery data since the last visit
                </h3>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 sm:border-2 border-primary-300 sm:shadow-none">
                <div className="mb-6">
                  <Image
                    src="/placeholders/feature.svg"
                    alt="Provider advantages icon"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Expert oversight, decision support, provider advantages and expanding access to care
                </h3>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 sm:border-2 border-primary-300 sm:shadow-none">
                <div className="mb-6">
                  <Image
                    src="/placeholders/feature.svg"
                    alt="Value based care icon"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Unlock value-based care revenue through HTM, RPM, CCM and Value Based Care
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-16 sm:py-32 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-[32px] sm:text-[48px] font-bold text-neutral-900 text-center mb-4">
              A Seamless Workflow<br />for Connected Recovery
            </h2>
            <p className="text-lg text-neutral-700 text-center mb-16 max-w-3xl mx-auto">
              Build Around Your Practice, Not the Other Way Around
            </p>

            {/* Workflow Steps */}
            <div className="space-y-8 sm:space-y-12">
              {/* Step 1 */}
              <div className="bg-white p-6 sm:p-12 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Deliver Personalized Programs From Day One
                    </h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Clinicians assess each patient&apos;s needs and goals as usual during the first visit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>With Tenzr, that plan is extended into a digital format — giving patients guided exercises and education</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Programs are tailored to individual needs and automatically adjust based on progress and feedback</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <Image
                      src="/placeholders/workflow.svg"
                      alt="Digital program dashboard"
                      width={700}
                      height={500}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 sm:p-12 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src="/placeholders/phone.svg"
                        alt="Mobile app interface 1"
                        width={350}
                        height={600}
                        className="rounded-2xl shadow-lg"
                      />
                      <Image
                        src="/placeholders/phone.svg"
                        alt="Mobile app interface 2"
                        width={350}
                        height={600}
                        className="rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 order-1 lg:order-2">
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Patients Actively Engage in Their Recovery
                    </h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Patients receive daily reminders and track their activities through the mobile app</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Interactive exercises with real-time feedback help ensure proper form and technique</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Progress tracking and achievements keep patients motivated throughout their recovery journey</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 sm:p-12 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Clinicians Review & Adjust with Ease
                    </h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Dashboard provides clear insights into patient adherence and progress metrics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Automated alerts flag patients who may need additional support or intervention</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Quick adjustments to care plans can be made directly in the system and sync to patient apps</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <Image
                      src="/placeholders/workflow.svg"
                      alt="Clinician dashboard interface"
                      width={700}
                      height={500}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
            <div className="mb-12">
              <Image
                src="/placeholders/icon.svg"
                alt="Tenzr Health mascot"
                width={150}
                height={150}
                className="mx-auto rounded-full"
              />
            </div>
            <h2 className="text-[32px] sm:text-[48px] font-bold text-neutral-900 mb-16">
              Testimonials
            </h2>
            <p className="text-lg text-neutral-700 mb-12">
              Hear from our Therapists
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
              <div className="bg-primary-50 p-6 sm:p-8 rounded-2xl text-left">
                <p className="text-neutral-700 mb-6">
                  &quot;[Having patients stay engaged and committed to their rehabilitation once they were the clinic, can be a challenge. With Tenzr, we can instill better habits and monitor their progress in real time, tracking to provide timely advice/adjustments...&quot;
                </p>
                <div>
                  <p className="font-bold text-neutral-900">Michael L.</p>
                  <p className="text-sm text-neutral-600">Physical Therapist</p>
                  <p className="text-sm text-neutral-600">Occupational Therapist and International/Clinical Leader</p>
                </div>
              </div>

              <div className="bg-primary-50 p-6 sm:p-8 rounded-2xl text-left">
                <p className="text-neutral-700 mb-6">
                  &quot;What really stands out to me is the combination of doing the right thing on one when exercising. That&apos;s amazing too, especially because in person visits can be expensive...&quot;
                </p>
                <div>
                  <p className="font-bold text-neutral-900">Sarah D.</p>
                  <p className="text-sm text-neutral-600">Patient</p>
                </div>
              </div>

              <div className="bg-primary-50 p-6 sm:p-8 rounded-2xl text-left">
                <p className="text-neutral-700 mb-6">
                  &quot;The platform has made me more committed to my physical therapy recovery and I&apos;m seeing the results!&quot;
                </p>
                <div>
                  <p className="font-bold text-neutral-900">Lydia H.</p>
                  <p className="text-sm text-neutral-600">Patient</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-neutral-700 mb-8">
              Learn more about Tenzr and receive resources via our quarterly newsletter
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full text-base font-medium text-white bg-primary-500 hover:bg-primary-600 transition-colors"
            >
              Sign Up for Newsletter →
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-32 bg-primary-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <h2 className="text-[32px] sm:text-[48px] font-bold text-neutral-900 mb-8">
              Get in touch with us!
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <Image
                src="/placeholders/icon.svg"
                alt="Tenzr Health logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div className="text-3xl font-bold text-neutral-900">Tenzr Health</div>
            </div>
            <p className="text-neutral-700 mb-4">hello@tenzrhealth.com</p>
            <p className="text-neutral-700 mb-8">1.833.988.9497</p>
            <div className="flex justify-center gap-6">
              <Link href="/contact" className="text-neutral-900 hover:text-primary-500">
                Contact us
              </Link>
              <Link href="https://linkedin.com" className="text-neutral-900 hover:text-primary-500">
                LinkedIn
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center">
            <p className="text-neutral-400">
              © {new Date().getFullYear()} Tenzr Health. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
