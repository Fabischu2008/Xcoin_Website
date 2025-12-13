export default function DocsLoading() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header Skeleton */}
          <div className="mb-12">
            <div className="h-10 w-3/4 animate-pulse rounded bg-muted" />
            <div className="mt-4 h-6 w-full animate-pulse rounded bg-muted" />
          </div>
          
          {/* Content Skeleton */}
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-3">
                <div className="h-6 w-2/3 animate-pulse rounded bg-muted" />
                <div className="h-4 w-full animate-pulse rounded bg-muted" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

