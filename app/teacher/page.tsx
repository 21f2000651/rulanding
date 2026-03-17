import Link from "next/link";

export default function TeacherPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        RigorUp for Teachers
      </h1>
      <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        Offload repetitive admin and grading to AI-powered workflows so you can
        focus on the craft of teaching, deeper explanations, and mentoring your
        students.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="#get-demo"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-transform transition-colors hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          aria-label="Get a demo of RigorUp for teachers"
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

