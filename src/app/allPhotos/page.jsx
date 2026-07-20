import LikeButton from '@/components/shared/LikeButton';
import { Button } from '@heroui/react';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import Category from '@/components/Category';

const AllPhotosPage = async ({ searchParams }) => {
 
  const { category } = await searchParams;

  
  const photosFilePath = path.join(process.cwd(), 'public', 'allPhotos.json');
  const photosFileContents = await fs.readFile(photosFilePath, 'utf-8');
  const allPhotosData = JSON.parse(photosFileContents);

  // categories data load 
  const categoryFilePath = path.join(process.cwd(), 'public', 'category.json');
  const categoryFileContents = await fs.readFile(categoryFilePath, 'utf-8');
  const categories = JSON.parse(categoryFileContents);

  // category select kora thakle filter, oterwise photo
  const allPhotos = category
    ? allPhotosData.filter((item) => item.category === category)
    : allPhotosData;

  return (
    <div className="container mx-auto">
      <section className="px-4 py-12 font-outfit">
        <div className="mb-8 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              All Photos
            </h2>
            <p className="mt-2 text-gray-500">
              Discover the most popular AI-generated artworks.
            </p>
          </div>

          <div className="f">
            <Category
              categories={categories}
              selectedCategory={category ?? ''}
            />
          </div>
        </div>

        <div className="grid mt-10  grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allPhotos.length === 0 && (
            <div className="col-span-full py-10 rounded-2xl border text-center ">
              {' '}
              <h1 className="text-lg md:text-2xl font-bold">
                No photos found in this category.
              </h1>
              <p className="text-gray-500 text-base md:text-lg">
                Please select another category
              </p>
            </div>
          )}

          {allPhotos.map((item) => (
            <div
              key={item.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/3.5] cursor-pointer overflow-hidden bg-neutral-950">
                <Image
                  src={item.imageUrl}
                  alt=""
                  fill
                  className="object-cover blur-2xl brightness-50"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-black/10" />
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-2xl object-fill p-3 transition-transform duration-300 hover:scale-115"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-2 min-h-[56px] text-lg font-bold text-slate-700">
                  {item.title}
                </h3>
                <div className="mt-3 border"></div>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-600 sm:mt-4">
                  <div className="flex items-center gap-2">
                    <Download size={18} />
                    <span>{item.downloads ?? 0}</span>
                  </div>
                  <LikeButton initialLikes={item.likes ?? 0} />
                </div>
                <div className="mt-5 flex justify-end">
                  <Link href={`/allPhotos/${item.id}`}>
                    <Button variant="outline">Get Prompt</Button>
                  </Link>
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
