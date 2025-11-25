import Link from "next/link";

export default function CTA() {
    return (
        <section id="cta" className="grid m-auto min-h-screen place-items-center text-center" >
            <div className="grid place-items-center rounded-lg border border-canvas-border bg-gradient-to-b from-primary-bg to-canvas-on-canvas p-8 text-center">
                <div className="mx-auto max-w-2xl">
                    <h2 className="mb-4 text-3xl font-bold text-canvas-text-contrast">Ready to organize your finances?</h2>
                    <p className="mx-auto mb-6 max-w-2xl text-base text-canvas-text">Sign up and try the dashboard with sample data — no credit card required. Experience clear insights, actionable suggestions, and privacy-first storage with Neon.</p>
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Link href="/auth/sign-up" className="rounded-md bg-primary-solid px-6 py-3 text-sm font-semibold text-white">Create account</Link>
                        <Link href="/dashboard" className="rounded-md border border-canvas-border px-6 py-3 text-sm">View demo dashboard</Link>
                    </div>
                    <p className="mt-6 text-xs text-muted-foreground">Trusted by early adopters and indie founders for simple, private finance tracking.</p>
                </div>
            </div>
        </section>
    );
}
