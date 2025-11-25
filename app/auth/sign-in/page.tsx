import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas-base px-4">
      <div className="w-full max-w-md rounded-lg border border-canvas-border bg-canvas-on-canvas p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="mt-2 text-sm text-canvas-text">Sign in to access your dashboard.</p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}

