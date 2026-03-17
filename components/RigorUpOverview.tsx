import Link from "next/link";

export function RigorUpOverview() {
  return (
    <section
      id="dashboards"
      aria-labelledby="rigorup-overview-heading"
      className="grid gap-10 rounded-3xl bg-surface/80 p-6 py-12 shadow-sm ring-1 ring-black/5 sm:p-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:py-16"
    >
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          Presenting RigorUp
        </p>
        <h2
          id="rigorup-overview-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          One platform that turns every class into{" "}
          <span className="text-primary">a predictable success story.</span>
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
          RigorUp connects the entire learning ecosystem. From school leaders to
          classroom teachers to individual students, everyone sees the same
          live picture of progress, risk, and opportunity—powered by ethical,
          explainable AI.
        </p>

        <dl className="grid gap-4 text-sm sm:grid-cols-2">
          <OverviewPoint
            title="For Schools & Institutes"
            body="Design predictable academic outcomes with cohort-level insights, early risk alerts, and performance simulations before report cards are printed."
          />
          <OverviewPoint
            title="For Teachers"
            body="Automate grading, tracking, and routine admin so teachers can invest their time where it matters most—inside the classroom and in 1:1 mentoring."
          />
          <OverviewPoint
            title="For Students"
            body="Give every learner a personalized companion that adapts to their pace, style, and strengths with bite-sized goals and nudges."
          />
          <OverviewPoint
            title="For Parents"
            body="Offer a clear, calm view of progress with transparent insights instead of last-minute surprises at the end of term."
          />
        </dl>

        <div className="pt-2">
          <Link
            id="get-demo"
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-transform transition-colors hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            aria-label="Get a live demo of RigorUp dashboards"
          >
            Get Demo
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-4 -z-10 rounded-[3rem] bg-primary-light/40 blur-3xl" />
        <div className="relative grid gap-4 rounded-[2rem] bg-page p-4 shadow-xl shadow-primary/20 ring-1 ring-black/5 sm:p-5">
          <div className="rounded-2xl bg-ink p-4 text-xs text-white">
            <div className="flex items-center justify-between text-[11px] text-white/70">
              <span>Academic Year Health</span>
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Stable
              </span>
            </div>
            <div className="mt-4 flex items-end gap-1.5">
              {[
                { id: "grade-6", height: 68 },
                { id: "grade-7", height: 72 },
                { id: "grade-8", height: 80 },
                { id: "grade-9", height: 76 },
                { id: "grade-10", height: 84 },
                { id: "grade-11", height: 90 },
              ].map((bar) => (
                <div key={bar.id} className="flex-1 rounded-full bg-primary/30">
                  <div
                    className="w-full rounded-full bg-primary-light"
                    style={{ height: `${bar.height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <MiniCard
              label="At-risk students"
              value="7%"
              context="Identified early, with targeted interventions running."
            />
            <MiniCard
              label="Teacher workload saved"
              value="18 hrs"
              context="Per teacher per month through automation."
            />
            <MiniCard
              label="Personalized goals"
              value="3.2x"
              context="Increase in completed practice journeys."
            />
            <MiniCard
              label="Parent engagement"
              value="+42%"
              context="More proactive check-ins across the term."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type OverviewPointProps = {
  title: string;
  body: string;
};

function OverviewPoint({ title, body }: OverviewPointProps) {
  return (
    <div className="space-y-1.5 rounded-2xl bg-page px-4 py-3">
      <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
        {title}
      </dt>
      <dd className="text-xs leading-relaxed text-muted">{body}</dd>
    </div>
  );
}

type MiniCardProps = {
  label: string;
  value: string;
  context: string;
};

function MiniCard({ label, value, context }: MiniCardProps) {
  return (
    <div className="space-y-1 rounded-2xl bg-surface p-3 text-xs shadow-sm ring-1 ring-black/5">
      <p className="text-[11px] font-medium uppercase tracking-wide text-muted">
        {label}
      </p>
      <p className="text-lg font-semibold text-ink">{value}</p>
      <p className="text-[11px] text-muted">{context}</p>
    </div>
  );
}

