"use client";

import { Zap, ArrowRight, ShieldCheck } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const GooglePlayIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={`shrink-0 ${className}`}>
    <path stroke="#0e3a28" strokeWidth="0.8" d="M3.609 1.814c-.198.204-.316.516-.316.899v18.574c0 .383.118.695.316.899l.061.054L14.28 11.63v-.26L3.67 1.76l-.061.054z" />
    <path stroke="#0e3a28" strokeWidth="0.8" d="M17.8 15.195l-3.52-3.52v-.35l3.52-3.52.078.045 4.17 2.37c1.19.677 1.19 1.79 0 2.47l-4.17 2.37-.078.135z" />
    <path stroke="#0e3a28" strokeWidth="0.8" d="M14.28 11.37L3.67 20.98c.376.425.992.475 1.688.08l8.922-5.07-2.64-2.62z" />
    <path stroke="#0e3a28" strokeWidth="0.8" d="M14.28 11.63l2.64-2.63-8.922-5.07c-.696-.395-1.312-.345-1.688.08l10.61 9.62z" />
  </svg>
);

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-4 md:grid-cols-2 md:pt-6">
      <div>
        <span className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-accent-mint px-3 py-1.5 text-[12.5px] font-medium text-brand-dark animate-fade-in-up">
          <Zap size={13} />
          AI Medicine Identifier
        </span>

        <h1 className="mb-6 max-w-lg text-[40px] leading-[1.15] tracking-tight text-ink md:text-[44px] animate-fade-in-up delay-100">
          Scan any medicine. Know exactly what you&rsquo;re taking.
        </h1>

        <p className="mb-8 max-w-md text-[15.5px] leading-relaxed text-muted animate-fade-in-up delay-200">
          Point your camera at any packaging, blister pack, or bottle. Our AI
          reads it and explains the uses, dosage, side effects, warnings, and
          storage — in seconds, in plain language.
        </p>

        <div className="mb-10 flex flex-wrap items-center gap-6 animate-fade-in-up delay-300">
          <a
            href="https://play.google.com/store/apps/details?id=com.midnight.pilliq_app&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-brand-dark px-5 py-3 text-white transition-transform hover:scale-[1.02]"
          >
            <GooglePlayIcon size={22} />
            <span className="text-left leading-tight">
              <span className="block text-[9.5px] uppercase tracking-wide text-white/70">
                Get it on
              </span>
              <span className="block text-[14px] font-semibold">Google Play</span>
            </span>
          </a>
          <a
            href="#how-it-works"
            onClick={handleScroll}
            className="flex items-center gap-1.5 text-[14.5px] font-medium text-brand-dark"
          >
            See how it works
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-8 animate-fade-in-up delay-500">
          <div>
            <p className="font-serif text-[22px] text-ink">1,200+</p>
            <p className="text-[12px] text-muted">medicines recognized</p>
          </div>
          <div className="h-8 w-px bg-line" />
          <div>
            <p className="font-serif text-[22px] text-ink">&lt; 3s</p>
            <p className="text-[12px] text-muted">average scan time</p>
          </div>
          <div className="h-8 w-px bg-line" />
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-brand-dark" />
            <div>
              <p className="text-[12px] font-medium leading-tight text-ink">Private</p>
              <p className="text-[12px] leading-tight text-muted">by design</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <PhoneMockup />
      </div>
    </section>
  );
}
