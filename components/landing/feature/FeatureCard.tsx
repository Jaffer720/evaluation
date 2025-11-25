import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export default function FeatureCard({ title, children, icon }: Props) {
  return (
    <article className="flex flex-col justify-between gap-4 rounded-lg border border-canvas-border bg-canvas-on-canvas p-6">
      <div className="flex items-start gap-3">
        <div className="inline-flex  w-12 items-center justify-center rounded-lg bg-primary-bg text-primary-solid">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-canvas-text">{children}</p>
        </div>
      </div>
      <div className="mt-4 text-sm">
        <a className="font-medium text-primary-text hover:underline" href="#">Learn more →</a>
      </div>
    </article>
  );
}
