import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact Us - Marketing Site",
  description: "Get in touch with us. Fill out the form and we'll get back to you shortly.",
};

export default function ContactPage() {
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have a question or want to work together? Fill out the form below and we&apos;ll get back to you shortly.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-2xl mb-2">📧</div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-600 text-sm">hello@example.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-2xl mb-2">📞</div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-2xl mb-2">📍</div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-gray-600 text-sm">San Francisco, CA</p>
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
