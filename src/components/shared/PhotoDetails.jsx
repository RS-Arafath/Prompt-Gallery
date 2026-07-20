import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@heroui/react';
import { Download, ArrowLeft } from 'lucide-react';
import CopyPromptButton from './CopyPrompt';
import BackButton from './BackButton';

const PhotoDetails = ({ photo, backLink }) => {
  return (
    <section className="container mx-auto px-4 py-8 lg:py-14 font-inter">
      {/* Back Button */}
      <div>
        <BackButton></BackButton>
      </div>

      <div className="grid  grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
        {/* Left */}
        <div className="group relative aspect-square overflow-hidden rounded-2xl border bg-black shadow-lg">
          {/* Blurred Background */}
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            fill
            className="object-cover blur-xl scale-125 opacity-90"
            aria-hidden
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/200" />

          {/* Main Image */}
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            width={900}
            height={900}
            priority
            className="relative cursor-pointer z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-bold leading-tight lg:text-4xl">
            {photo.title}
          </h1>

          <p className="leading-8 text-default-600">{photo.description}</p>

          {/* Prompt */}
          <div className="rounded-xl border p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border-b pb-4">
              <div>
                <h2 className="text-lg md:text-2xl font-semibold">AI Prompt</h2>
                <p className="text-sm md:text-base text-default-500">
                  Copy this prompt and use it in any AI image generator to
                  create similar artwork.
                </p>
              </div>

              <CopyPromptButton prompt={photo.prompt} />
            </div>

            <div className="rounded-lg font-jetbrains-mono  bg-default-100 p-2 text-sm md:text-base leading-6 lg:leading-7">
              {photo.prompt}
            </div>
          </div>

          {/* Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border p-2 sm:p-3 md:p-4">
              <p className="text-base font-semibold text-default-500  md:text-lg">
                category
              </p>
              <p className="font-medium text-xs md:text base">
                {photo.category}
              </p>
            </div>

            <div className="rounded-xl border p-2 sm:p-3 md:p-4">
              <p className="text-base font-semibold text-default-500 md:text-lg">
               Likes
              </p>
              <p className="font-medium text-xs md:text base">{photo.likes}</p>
            </div>

            <div className="rounded-xl border p-2 sm:p-3 md:p-4">
              <p className="text-base font-semibold text-default-500 md:text-lg">
                Resolution
              </p>
              <p className="font-medium text-xs md:text base">
                {photo.resolution}
              </p>
            </div>

            <div className="rounded-xl border p-2 sm:p-3 md:p-4">
              <p className="text-base font-semibold text-default-500 md:text-lg">
                Created Date
              </p>
              <p className="font-medium text-xs md:text base">
                {photo.createdAt}
              </p>
            </div>
          </div>

          {/* Download */}
          <Link
            href={photo.imageUrl}
            target="_blank"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-zinc-800"
          >
            <Download size={18} />
            Download Image
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoDetails;
