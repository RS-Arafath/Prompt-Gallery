import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@heroui/react';
import { Download, ArrowLeft } from 'lucide-react';

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const filePath = path.join(process.cwd(), 'public', 'allPhotos.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContents);

  const photo = data.find((item) => item.id.toString() === id);

  if (!photo) {
    notFound();
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <Link
        href="/allPhotos"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to Gallery
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left */}
        <div className="overflow-hidden rounded-2xl border bg-white shadow-lg dark:bg-zinc-900">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            width={800}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Right */}
        <div className="space-y-6">
          <Badge color="primary" variant="flat">
            {photo.category}
          </Badge>

          <h1 className="text-4xl font-bold">{photo.title}</h1>

          <p className="text-gray-600 dark:text-gray-300">
            {photo.description}
          </p>

          <div className="space-y-4 rounded-xl border p-5">
            <div>
              <h3 className="mb-2 font-semibold">Prompt</h3>

              <div className="rounded-lg bg-gray-100 p-4 text-sm leading-7 dark:bg-zinc-800">
                {photo.prompt}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Style</p>
                <p className="font-medium">{photo.style}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Model</p>
                <p className="font-medium">{photo.model}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Resolution</p>
                <p className="font-medium">{photo.resolution}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">License</p>
                <p className="font-medium">{photo.license}</p>
              </div>
            </div>
          </div>

          <Link
            href={photo.imageUrl}
            download
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-zinc-800"
          >
            <Download size={18} />
            Download Image
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoDetailsPage;
