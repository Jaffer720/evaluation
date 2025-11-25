import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas-base px-4">
      <div className="w-full max-w-md rounded-lg border border-canvas-border bg-canvas-on-canvas p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="mt-2 text-sm text-canvas-text">Start managing your finances with Finly.</p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}

