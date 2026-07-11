import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0b]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="PixGen Logo"
                width={56}
                height={56}
                className="h-14 w-14 object-contain dark:brightness-200"
              />

              <span className="text-2xl font-bold tracking-tight text-black dark:text-white">
               prompt Gallery
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
              Create stunning AI-generated visuals in seconds. Built for
              creators, designers, marketers, and developers who need
              production-ready images fast.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
              Product
            </h3>

            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-100 hover:text-black dark:hover:text-white"
                >
                  Generate
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="transition-colors duration-100 hover:text-black dark:hover:text-white"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="transition-colors duration-100 hover:text-black dark:hover:text-white"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
              Company
            </h3>

            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-100 hover:text-black dark:hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="transition-colors duration-100 hover:text-black dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="transition-colors duration-100 hover:text-black dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="transition-colors duration-100 hover:text-black dark:hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                Start Creating
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Generate beautiful AI images from simple prompts in just a few
                seconds.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 dark:bg-white dark:text-black dark:hover:shadow-white/20"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400 md:flex-row">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Prompt Gallery. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/"
              className="transition-colors duration-100 hover:text-black dark:hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/"
              className="transition-colors duration-100 hover:text-black dark:hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/"
              className="transition-colors duration-100 hover:text-black dark:hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
