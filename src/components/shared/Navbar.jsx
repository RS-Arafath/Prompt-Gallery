'use client';
import { User } from 'lucide-react';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, Button } from '@heroui/react';
import { Menu, X } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/topGenarated', label: 'Top Genarated' },
  { href: '/allPhotos', label: 'All Photos' },
  { href: '/profile', label: 'Profile' },
];

export default function Navbar() {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  //console.log(user);
  const isPending = userData.isPending;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <header className="border-b bg-white">
      <nav className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-start md:justify-center "
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain dark:brightness-200"
          />
          <h2 className="text-lg md:text-xl font-outfit font-bold">
            Prompt Gallery
          </h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden font-inter md:flex items-center gap-5 lg:gap-8">
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
                  after:h-0.5 after:bg-blue-600
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
          {isPending ? (
            <div className="flex items-center justify-center h-8 w-8">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-200 border-t-red-600" />
            </div>
          ) : (
            !user && (
              <div className=" flex gap-3">
                <Button variant="bordered" className="border hover:bg-gray-100">
                  <Link href="/signup">Sign Up</Link>
                </Button>
                <Button color="primary">
                  {' '}
                  <Link href="/signin">Sign In</Link>
                </Button>
              </div>
            )
          )}
          {user && (
            <div className="flex justify-center items-center gap-2">
              <Avatar
                size="md"
                className="ring-1 cursor-pointer ring-red-600 ring-offset-1"
              >
                {user?.image ? (
                  <Avatar.Image
                    alt={user.name}
                    src={user.image}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <Avatar.Fallback>
                    <User className="h-5 w-5 text-gray-500" />
                  </Avatar.Fallback>
                )}
              </Avatar>
              <Button
                onClick={handleSignOut}
                variant="bordered"
                className="border border-red-700 duration-200 transition-colors text-base bg-red-200 hover:bg-red-300"
              >
                <Link href="/">Log Out</Link>
              </Button>
            </div>
          )}
        </div>

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
            {isPending ? (
              <div className="flex items-center justify-center h-8 w-8">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-200 border-t-red-600" />
              </div>
            ) : (
              !user && (
                <div className=" flex gap-3">
                  <Button variant="bordered" className="border" fullWidth>
                    <Link href="/signup">Sign Up</Link>
                  </Button>

                  <Button color="primary" fullWidth>
                    <Link href="/signin">Sign In</Link>
                  </Button>
                </div>
              )
            )}
            {user && (
              <div className="flex justify-start items-center gap-2">
                <Button
                  onClick={handleSignOut}
                  variant="bordered"
                  className="border border-red-700 duration-200 transition-colors text-base bg-red-200 hover:bg-red-300"
                >
                  <Link href="/">Log Out</Link>
                </Button>
                <Avatar
                  size="md"
                  className="ring-1 cursor-pointer ring-red-600 ring-offset-1"
                >
                  {user?.image ? (
                    <Avatar.Image
                      alt={user.name}
                      src={user.image}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <Avatar.Fallback>
                      <User className="h-5 w-5 text-gray-500" />
                    </Avatar.Fallback>
                  )}
                </Avatar>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
