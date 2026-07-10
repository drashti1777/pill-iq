const GooglePlayIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={`shrink-0 ${className}`}>
    <path stroke="#ffffff" strokeWidth="0.8" d="M3.609 1.814c-.198.204-.316.516-.316.899v18.574c0 .383.118.695.316.899l.061.054L14.28 11.63v-.26L3.67 1.76l-.061.054z" />
    <path stroke="#ffffff" strokeWidth="0.8" d="M17.8 15.195l-3.52-3.52v-.35l3.52-3.52.078.045 4.17 2.37c1.19.677 1.19 1.79 0 2.47l-4.17 2.37-.078.135z" />
    <path stroke="#ffffff" strokeWidth="0.8" d="M14.28 11.37L3.67 20.98c.376.425.992.475 1.688.08l8.922-5.07-2.64-2.62z" />
    <path stroke="#ffffff" strokeWidth="0.8" d="M14.28 11.63l2.64-2.63-8.922-5.07c-.696-.395-1.312-.345-1.688.08l10.61 9.62z" />
  </svg>
);

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-gradient-to-br from-brand-dark to-brand-darker p-10 text-white md:flex-row md:items-center md:p-14">
        <div className="max-w-md">
          <h2 className="mb-3 text-[28px] leading-tight">
            Understand your medicine before you take it.
          </h2>
          <p className="text-[14.5px] leading-relaxed text-white/70">
            Download Pill IQ free on Google Play 
          </p>
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=com.midnight.pilliq_app&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-2.5 rounded-full bg-white px-5 py-3 text-brand-dark transition-transform hover:scale-[1.02]"
        >
          <GooglePlayIcon size={22} />
          <span className="text-left leading-tight">
            <span className="block text-[9.5px] uppercase tracking-wide text-brand-dark/60">
              Get it on
            </span>
            <span className="block text-[14px] font-semibold">Google Play</span>
          </span>
        </a>
      </div>
    </section>
  );
}
