import { Brain, Zap, ShieldCheck, History, Lock } from "lucide-react";
import PillIcon from "@/components/PillIcon";

const features = [
  {
    icon: PillIcon,
    title: "Point & Identify",
    description:
      "Snap a photo or upload from your gallery — packaging, blister pack, or bottle all work.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Our model reads the label and returns uses, dosage, side effects & storage.",
  },
  {
    icon: Zap,
    title: "Results in seconds",
    description:
      "No typing, no searching. A clean summary appears in under three seconds, every time.",
  },
  {
    icon: ShieldCheck,
    title: "Dosage & warnings",
    description:
      "See recommended dosage, key precautions, and what to avoid — highlighted up front.",
  },
  {
    icon: History,
    title: "Scan history",
    description:
      "Every scan is saved so you can revisit what you took, and when, any time later.",
  },
  {
    icon: Lock,
    title: "Private by design",
    description:
      "Photos are used only to identify the medicine. We never sell your data — ever.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <p className="mb-3 text-[12.5px] font-semibold uppercase tracking-wider text-brand">
          What you get
        </p>
        <h2 className="mb-4 text-[32px] leading-tight text-ink">
          Everything on a medicine, decoded
        </h2>
        <p className="text-[15px] leading-relaxed text-muted">
          One scan turns a confusing label into a clear, structured briefing
          you can actually understand.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl bg-bg-card p-7 transition-shadow hover:shadow-md hover:shadow-brand-dark/5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-mint text-brand-dark">
              <feature.icon size={18} />
            </div>
            <h3 className="mb-2 text-[16.5px] font-semibold text-ink">
              {feature.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
