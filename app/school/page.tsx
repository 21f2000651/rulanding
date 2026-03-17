import Link from "next/link";

export default function SchoolPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        RigorUp for Schools & Institutes
      </h1>
      <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        Design predictable academic excellence across grades and campuses with
        predictive analytics, early risk alerts, and transparent reporting for
        leadership and parents.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="#get-demo"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-transform transition-colors hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          aria-label="Get a demo of RigorUp for schools"
        >
          Get Demo
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}

