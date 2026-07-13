import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import PhotoDetails from '@/components/shared/PhotoDetails';

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const filePath = path.join(process.cwd(), 'public', 'top-gen.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContents);

  const photo = data.find((item) => item.id.toString() === id);

  if (!photo) {
    notFound();
  }

  return <PhotoDetails photo={photo} backLink="/allPhotos" />;
};

export default PhotoDetailsPage;
