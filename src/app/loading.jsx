'use client'
import { Skeleton } from '@heroui/react';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Skeleton className="h-10 w-64 rounded-xl" />
        <Skeleton className="mt-3 h-5 w-96 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-2xl border p-4 shadow-sm">
            <Skeleton className="aspect-[3/3.5] w-full rounded-xl" />

            <div className="mt-4 space-y-3">
              <Skeleton className="h-5 w-3/4 rounded-lg" />
              <Skeleton className="h-5 w-1/2 rounded-lg" />

              <div className="flex justify-between pt-3">
                <Skeleton className="h-5 w-20 rounded-lg" />
                <Skeleton className="h-5 w-16 rounded-lg" />
              </div>

              <Skeleton className="mt-4 h-10 w-full rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
