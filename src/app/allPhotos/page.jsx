import AllPhotos from '@/components/AllPhotos';
import React from 'react';
import LikeButton from '@/components/shared/LikeButton';
import { Button } from '@heroui/react';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
const AllPhotosPage = async() => {
  const filePath = path.join(process.cwd(), 'public', 'allPhotos.json');
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContents);
    const allPhotos = data;
 
  return (
    <div className="container  mx-auto">
      <section className=" px-4 py-12 font-outfit">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            All Photos
          </h2>
          <p className="mt-2 text-gray-500">
            Discover the most popular AI-generated artworks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allPhotos.map((item) => (
            <div
              key={item.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative  aspect-[3/3.5] cursor-pointer overflow-hidden bg-neutral-950">
                {/* Background */}
                <Image
                  src={item.imageUrl}
                  alt=""
                  fill
                  className="object-cover blur-2xl brightness-50"
                  aria-hidden
                />

                <div className="absolute inset-0 bg-black/10" />

                {/* Foreground */}
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-2xl object-fill p-3 transition-transform duration-300 hover:scale-115"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-2 min-h-[56px] font-bold text-lg text-slate-700">
                  {item.title}
                </h3>
                <div className="border mt-3"></div>
                <div className="mt-3 sm:mt-4 flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Download size={18} />
                    <span>{item.downloads ?? 0}</span>
                  </div>

                  <LikeButton initialLikes={item.likes ?? 0} />
                </div>

                <div className="mt-5 flex justify-end ">
                  <Button variant="outline" className="">
                    Get Prompt
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllPhotosPage;