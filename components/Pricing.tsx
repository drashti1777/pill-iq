import { Check, TriangleAlert, ShieldCheck } from "lucide-react";

const freeFeatures = [
  "3 Scans",
  "Uses, dosage & side effects",
];

const premiumFeatures = [
  "50 Scans",
  "Scan history",
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <p className="mb-3 text-[12.5px] font-semibold uppercase tracking-wider text-brand">
          Pricing
        </p>
        <h2 className="text-[32px] leading-tight text-ink">
          Start free. Upgrade when you need more.
        </h2>
      </div>

      <div className="mb-14 grid gap-6 md:grid-cols-2">
        {/* Free plan */}
        <div className="rounded-3xl bg-bg-card p-9">
          <p className="mb-1 text-[13px] font-medium uppercase tracking-wide text-muted">
            Free
          </p>
          <p className="mb-6 font-serif text-[32px] text-ink">
            ₹0<span className="text-[15px] text-muted"> / forever</span>
          </p>
          <ul className="mb-8 space-y-3.5">
            {freeFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-ink/85">
                <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://play.google.com/store/apps/details?id=com.midnight.pilliq_app&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full border border-line py-3 text-center text-[14.5px] font-medium text-ink transition-colors hover:bg-bg"
          >
            Get the App
          </a>
        </div>

        {/* Premium plan */}
        <div className="rounded-3xl bg-brand-dark p-9 text-white">
          <p className="mb-1 text-[13px] font-medium uppercase tracking-wide text-accent-mint">
            Premium
          </p>
          <p className="mb-6 font-serif text-[32px]">
            ₹100<span className="text-[15px] text-white/60"> / month</span>
          </p>
          <ul className="mb-8 space-y-3.5">
            {premiumFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-white/85">
                <Check size={16} className="mt-0.5 shrink-0 text-accent-mint" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://play.google.com/store/apps/details?id=com.midnight.pilliq_app&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full bg-accent-mint py-3 text-center text-[14.5px] font-medium text-brand-dark transition-transform hover:scale-[1.01]"
          >
            Get the App
          </a>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex items-start gap-3.5 rounded-2xl bg-[#fbf3e9] p-6">
          <TriangleAlert size={18} className="mt-0.5 shrink-0 text-[#b3781f]" />
          <div>
            <h3 className="mb-1.5 text-[15px] font-semibold text-ink">
              Medical disclaimer
            </h3>
            <p className="text-[13.5px] leading-relaxed text-muted">
              Pill IQ is for informational purposes only. It is not a
              substitute for professional medical advice. Always consult a
              licensed healthcare professional before taking any medication.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3.5 rounded-2xl bg-accent-mint/40 p-6">
          <ShieldCheck size={18} className="mt-0.5 shrink-0 text-brand-dark" />
          <div>
            <h3 className="mb-1.5 text-[15px] font-semibold text-ink">
              Your privacy, protected
            </h3>
            <p className="text-[13.5px] leading-relaxed text-muted">
              Photos are used only to identify the medicine and are never
              sold or shared with advertisers. Your scan history stays yours
              — export or delete it any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
