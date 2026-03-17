import Link from "next/link";

const year = new Date().getFullYear();

const footerLinks = {
  product: [
    { label: "Overview", href: "#dashboards" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#", isTodo: true },
  ],
  solutions: [
    { label: "For Schools", href: "/school" },
    { label: "For Teachers", href: "/teacher" },
    { label: "For Students", href: "/student" },
  ],
  company: [
    { label: "About", href: "#story" },
    { label: "Impact", href: "#impact" },
    { label: "Partners", href: "#partners" },
  ],
  legal: [
    { label: "Privacy", href: "#", isTodo: true },
    { label: "Terms", href: "#", isTodo: true },
  ],
};

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,2fr)]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary-light" />
              AI-powered Smart Education Platform
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              RigorUp
            </h2>
            <p className="max-w-sm text-sm text-white/70">
              Unlocking Academic Excellence for schools, teachers, and students
              through smart AI analytics and personalized learning journeys.
            </p>
          </div>

          <div className="grid gap-8 text-sm sm:grid-cols-2 md:grid-cols-4">
            <FooterColumn title="Product" links={footerLinks.product} />
            <FooterColumn title="Solutions" links={footerLinks.solutions} />
            <FooterColumn title="Company" links={footerLinks.company} />
            <FooterColumn title="Legal" links={footerLinks.legal} />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {year} RigorUp. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <SocialLink href="#" label="Visit RigorUp on X">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  d="M5 4h3l4 5.5L16.5 4H19l-6 8 6 8h-3l-4-5.5L7.5 20H5l6-8z"
                  fill="currentColor"
                />
              </svg>
            </SocialLink>
            <SocialLink href="#" label="Visit RigorUp on LinkedIn">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  d="M5 4.5C5 3.1 6.1 2 7.5 2S10 3.1 10 4.5 8.9 7 7.5 7 5 5.9 5 4.5zM5.2 9H9v11H5.2V9zM11 9h3.6v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.3 4.3 5.3V20H18V14.8c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V20H11V9z"
                  fill="currentColor"
                />
              </svg>
            </SocialLink>
            <SocialLink href="#" label="Visit RigorUp on YouTube">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  d="M21 8.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.3 5 12 5 12 5h0s-3.3 0-6.1.2c-.4 0-1.3.1-2.1.9C3.2 6.7 3 8.2 3 8.2S2.8 10 2.8 11.7v1.6C2.8 15 3 16.8 3 16.8s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.7.2 7 .2 7 .2s3.3 0 6.1-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.5v-1.6C21.2 10 21 8.2 21 8.2zM10 14.5V8.9l5.1 2.8L10 14.5z"
                  fill="currentColor"
                />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string; isTodo?: boolean }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-white/80">
        {title}
      </h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
            >
              {link.label}
            </Link>
            {link.isTodo && (
              <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide">
                TODO
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

type SocialLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-xs font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
    >
      {children}
    </Link>
  );
}

