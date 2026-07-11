'use client';

import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function LikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) return;

    setLikes((prev) => prev + 1);
    setLiked(true);
  };

  return (
    <button
      onClick={handleLike}
      disabled={liked}
      className="flex items-center cursor-pointer gap-2 text-sm text-gray-600 disabled:cursor-not-allowed"
    >
      <Heart
        size={18}
        className={liked ? 'fill-red-500 text-red-500' : 'text-red-500'}
      />
      <span>{likes}</span>
    </button>
  );
}
