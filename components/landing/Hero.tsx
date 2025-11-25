import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="grid min-h-screen gap-8 py-12 md:grid-cols-2 md:items-center">
      <div className="flex flex-col justify-center gap-6">
        <h1 className="mb-2 max-w-3xl text-5xl font-extrabold leading-tight text-canvas-text-contrast">Take control of your money — effortlessly</h1>
        <p className="mb-4 max-w-2xl text-lg text-canvas-text">Finly gives you a clear, fast view of your finances. Understand cash flow, set budgets, and get smart, actionable suggestions — all in one beautiful dashboard.</p>

        <ul className="mb-6 grid gap-2 pl-4 text-sm text-canvas-text sm:grid-cols-2">
          <li>• Real-time balance & cashflow</li>
          <li>• Category breakdowns & trends</li>
          <li>• Smart budget nudges</li>
          <li>• Secure Neon Postgres storage</li>
        </ul>

        <div className="flex flex-wrap gap-3">
          <Link href="/auth/sign-up" className="rounded-md bg-primary-solid px-6 py-3 text-sm font-semibold text-white">Create free account</Link>
          <a href="#features" className="rounded-md border border-canvas-border px-6 py-3 text-sm">Explore features</a>
        </div>
      </div>

      <div className="order-first md:order-last flex items-center justify-center">
        <div className="w-full max-w-lg rounded-xl border border-canvas-border bg-gradient-to-b from-primary-bg to-canvas-on-canvas p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Monthly balance</p>
              <p className="text-xs text-muted-foreground">Updated 5 minutes ago</p>
            </div>
            <div className="text-sm text-success-text">+4.2%</div>
          </div>

          <div className="mb-6 flex items-end gap-4">
            <div>
              <p className="text-4xl font-bold">$4,180</p>
              <p className="text-sm text-muted-foreground">Net balance</p>
            </div>
            <div className="flex-1">
              {/* Simple inline sparkline */}
              <svg viewBox="0 0 100 30" className="h-12 w-full">
                <polyline fill="none" stroke="#6f6de2" strokeWidth="3" points="0,24 12,18 24,20 36,10 48,12 60,8 72,12 84,6 96,4" />
              </svg>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md bg-canvas-on-canvas p-3">
              <p className="text-xs text-muted-foreground">Expenses</p>
              <p className="text-sm font-semibold">$1,240</p>
            </div>
            <div className="rounded-md bg-canvas-on-canvas p-3">
              <p className="text-xs text-muted-foreground">Income</p>
              <p className="text-sm font-semibold">$5,420</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
