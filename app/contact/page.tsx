import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/marketing-site" : "";

export const metadata = {
  title: "Contact Us - Tenzr Health",
  description: "Get in touch with us. Fill out the form and we'll get back to you shortly.",
};

export default function ContactPage() {
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
              <Link href="/#features" className="text-neutral-900 hover:text-primary-500 transition-colors">
                Features
              </Link>
              <Link href="/#testimonials" className="text-neutral-900 hover:text-primary-500 transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="text-neutral-900 hover:text-primary-500 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[40px] sm:text-[66px] font-bold text-neutral-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700">
              Have a question or want to work together? Fill out the form below and we&apos;ll get back to you shortly.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-primary-300 p-6 sm:p-12">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="bg-primary-50 p-6 sm:p-8 rounded-2xl">
              <div className="mb-4">
                <Image
                  src={`${basePath}/placeholders/icon.svg`}
                  alt="Email icon"
                  width={80}
                  height={80}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Email</h3>
              <p className="text-neutral-700">hello@tenzrhealth.com</p>
            </div>

            <div className="bg-primary-50 p-6 sm:p-8 rounded-2xl">
              <div className="mb-4">
                <Image
                  src={`${basePath}/placeholders/icon.svg`}
                  alt="Phone icon"
                  width={80}
                  height={80}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Phone</h3>
              <p className="text-neutral-700">+1 (833) 988-9497</p>
            </div>

            <div className="bg-primary-50 p-6 sm:p-8 rounded-2xl">
              <div className="mb-4">
                <Image
                  src={`${basePath}/placeholders/icon.svg`}
                  alt="Location icon"
                  width={80}
                  height={80}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Location</h3>
              <p className="text-neutral-700">San Francisco, CA</p>
            </div>
          </div>
        </div>
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
