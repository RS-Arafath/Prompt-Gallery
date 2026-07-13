'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-8 inline-flex border rounded-4xl p-2 items-center gap-2 text-sm text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
    >
      <ArrowLeft size={18} />
      Back to Gallery
    </button>
  );
};

export default BackButton;
