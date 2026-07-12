export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 animate-pulse">
      {/* Header */}
      <div className="mb-10">
        <div className="h-10 w-64 rounded-lg bg-gray-200 dark:bg-gray-800" />
        <div className="mt-3 h-5 w-96 max-w-full rounded bg-gray-200 dark:bg-gray-800" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-neutral-900"
          >
            {/* Image */}
            <div className="aspect-[3/3.5] bg-gray-200 dark:bg-gray-800" />

            {/* Content */}
            <div className="p-5">
              <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-800" />
              <div className="mt-2 h-6 w-1/2 rounded bg-gray-200 dark:bg-gray-800" />

              <div className="my-5 border-t border-gray-100 dark:border-gray-800" />

              <div className="flex items-center justify-between">
                <div className="h-5 w-20 rounded bg-gray-200 dark:bg-gray-800" />
                <div className="h-5 w-16 rounded bg-gray-200 dark:bg-gray-800" />
              </div>

              <div className="mt-6 h-10 w-full rounded-xl bg-gray-200 dark:bg-gray-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
