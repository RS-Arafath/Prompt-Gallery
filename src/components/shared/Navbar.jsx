'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@heroui/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/all-photos', label: 'All Photos' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/profile', label: 'Profile' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <nav className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="" alt="Logo" width={34} height={34} />
          <h2 className="text-lg md:text-xl font-bold">Prompt Gallery</h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((item) => {
            const active = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative pb-1 transition-all duration-300
                  ${
                    active
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }
                  after:absolute after:left-0 after:bottom-0
                  after:h-[2px] after:bg-blue-600
                  after:transition-all after:duration-300
                  ${active ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <Button variant="bordered">Sign Up</Button>
          <Button color="primary">Sign In</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 border-t' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-5 space-y-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block font-medium transition ${
                pathname === item.href
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <Button variant="bordered" className='border' fullWidth>
              Sign Up
            </Button>

            <Button color="primary" fullWidth>
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
