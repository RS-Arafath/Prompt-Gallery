'use client'
import Link from 'next/link';
import { Button } from '@heroui/react';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Background Glow */}
      <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 max-w-2xl text-center">
        {/* 404 */}
        <h1 className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-400">
          The page you're looking for doesn't exist, may have been moved, or the
          URL might be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
         

          <Button
            variant="bordered"
            size="lg"
            startContent={<ArrowLeft size={18} />}
            onPress={() => window.history.back()}
            className="px-8 border"
          >
            Go Back
          </Button>
        </div>
      </div>
    </section>
  );
}
