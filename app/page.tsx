import Link from "next/link";
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Marketing Site</div>
            <div className="space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Welcome to Your Marketing Site
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A modern, responsive marketing website built with Next.js, TypeScript, 
            and integrated with HubSpot for forms and analytics tracking.
          </p>

          <div className="flex justify-center gap-4 pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Figma-Ready</h3>
            <p className="text-gray-600">
              Built with Tailwind CSS for easy translation from Figma designs to production-ready code.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">HubSpot Integration</h3>
            <p className="text-gray-600">
              Forms automatically submit to HubSpot with visitor tracking and analytics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Cloudflare Analytics</h3>
            <p className="text-gray-600">
              Track visitor metrics with Cloudflare Web Analytics for lightweight monitoring.
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-24 bg-blue-600 rounded-lg shadow-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates and insights.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Marketing Site. All rights reserved.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Powered by Next.js, HubSpot, and Cloudflare Analytics
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
