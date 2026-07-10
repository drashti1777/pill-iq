import { Camera, Brain, FileText } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Camera,
    title: "Snap or upload",
    description:
      "Take a photo of any packaging, blister pack, or bottle — or pick one from your gallery.",
  },
  {
    number: 2,
    icon: Brain,
    title: "AI analyzes it",
    description:
      "The medicine is identified and its uses, dosage, side effects, warnings & storage are pulled together.",
  },
  {
    number: 3,
    icon: FileText,
    title: "Read clear results",
    description:
      "A plain-language summary appears — structured, easy to scan, and saved to your history.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-dark py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-3 text-[12.5px] font-semibold uppercase tracking-wider text-accent-mint">
          How it works
        </p>
        <h2 className="mb-16 text-[32px] leading-tight">
          Three taps from label to clarity
        </h2>

        <div className="relative grid gap-12 md:grid-cols-3">
          <div className="absolute left-[16.5%] right-[16.5%] top-6 hidden h-px bg-white/15 md:block" />
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center">
              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <step.icon size={19} />
                <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-mint text-[10px] font-semibold text-brand-dark">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-2 text-[17px] font-medium">{step.title}</h3>
              <p className="max-w-[240px] text-[13.5px] leading-relaxed text-white/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
