import Link from "next/link";

export default function CategoryNav({ categories }: any) {
  return (
    <section className="w-full bg-muted/50 py-6 sm:py-8 border-y overflow-x-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start sm:justify-center gap-3 sm:gap-4 min-w-max sm:flex-wrap">
          {categories.map((category: any) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all hover:scale-105"
            >
              <span className="text-xl sm:text-2xl">{category.icon}</span>
              <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
