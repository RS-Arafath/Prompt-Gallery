
import Image from "next/image";
import { Download, Heart } from "lucide-react";
import LikeButton from "./shared/LikeButton";

const TopGenerated = async () => {
  const res = await fetch("https://promptgallery-ai.vercel.app/data.json", {
    cache: "force-cache",
  });

  const data = await res.json();
  const topGenerated = data.slice(0, 8);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Top Generated Images</h2>
        <p className="mt-2 text-gray-500">
          Discover the most popular AI-generated artworks.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {topGenerated.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[3/3.5] cursor-pointer overflow-hidden rounded-t-2xl bg-neutral-950">
              {/* Background */}
              <Image
                src={item.imageUrl}
                alt=""
                fill
                className="object-cover  blur-2xl  brightness-50"
                aria-hidden="true"
              />

              {/* Optional dark overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Foreground */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-fill hover:scale-110 duration-200 transform rounded-2xl p-3 h-"
              />
            </div>

            <div className="p-5">
              <h3 className="line-clamp-2 text-lg font-semibold">
                {item.title}
              </h3>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Download size={18} />
                  <span>{item.downloads ?? 0}</span>
                </div>

                <LikeButton initialLikes={item.likes ?? 0} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopGenerated;