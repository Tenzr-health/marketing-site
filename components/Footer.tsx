import Link from 'next/link';
import { assets } from '@/lib/assets/images';

export default function Footer() {
  return (
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
  );
}
