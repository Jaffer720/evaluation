import FeatureCard from "./FeatureCard";
import { BarChart2, PieChart, ShieldCheck, TrendingUp, Target, Zap } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="mb-20 grid gap-8 py-12 md:grid-cols-3">
      <FeatureCard
        icon={<BarChart2 className="h-5 w-5" />}
        title="Overview at a glance"
      >
        A dashboard that surfaces the most important signals: net balance, cashflow, and a category breakdown so you spend less time searching and more time acting. Use quick filters to drill into date ranges.
      </FeatureCard>

      <FeatureCard
        icon={<PieChart className="h-5 w-5" />}
        title="Budgeting made simple"
      >
        Create flexible monthly budgets, assign recurring rules, and receive friendly nudges when you're nearing limits. See projected month-end balances with one click.
      </FeatureCard>

      <FeatureCard
        icon={<ShieldCheck className="h-5 w-5" />}
        title="Privacy-first"
      >
        We prioritize your privacy: no third-party analytics by default, encrypted connections to your Neon database, and simple export controls so you own your data.
      </FeatureCard>

      <FeatureCard
        icon={<TrendingUp className="h-5 w-5" />}
        title="Trends & insights"
      >
        Visualize spending patterns over time, identify savings opportunities, and get month-over-month comparisons. Spot trends before they become habits.
      </FeatureCard>

      <FeatureCard
        icon={<Target className="h-5 w-5" />}
        title="Goal tracking"
      >
        Set financial goals and watch your progress in real-time. Whether it's saving for a vacation or paying off debt, Finly keeps you accountable and motivated.
      </FeatureCard>

      <FeatureCard
        icon={<Zap className="h-5 w-5" />}
        title="Lightning fast"
      >
        Built for speed with Next.js and optimized queries. Load your dashboard in milliseconds and never wait for insights again.
      </FeatureCard>
    </section>
  );
}
