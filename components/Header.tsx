"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import PillIcon from "@/components/PillIcon";

const GooglePlayIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={`shrink-0 ${className}`}>
    <path stroke="#0e3a28" strokeWidth="0.8" d="M3.609 1.814c-.198.204-.316.516-.316.899v18.574c0 .383.118.695.316.899l.061.054L14.28 11.63v-.26L3.67 1.76l-.061.054z" />
    <path stroke="#0e3a28" strokeWidth="0.8" d="M17.8 15.195l-3.52-3.52v-.35l3.52-3.52.078.045 4.17 2.37c1.19.677 1.19 1.79 0 2.47l-4.17 2.37-.078.135z" />
    <path stroke="#0e3a28" strokeWidth="0.8" d="M14.28 11.37L3.67 20.98c.376.425.992.475 1.688.08l8.922-5.07-2.64-2.62z" />
    <path stroke="#0e3a28" strokeWidth="0.8" d="M14.28 11.63l2.64-2.63-8.922-5.07c-.696-.395-1.312-.345-1.688.08l10.61 9.62z" />
  </svg>
);

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const hash = href.replace("/", ""); // e.g., "#faq"

    if (pathname === "/") {
      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", hash);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/0 bg-bg/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-brand-dark text-white">
            <PillIcon size={17} />
          </span>
          <span className="text-[17px] font-semibold tracking-tight">
            Pill <span className="text-brand">IQ</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-[14.5px] text-ink/80 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://play.google.com/store/apps/details?id=com.midnight.pilliq_app&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-brand-dark px-4 py-2.5 text-[13.5px] font-medium text-white transition-transform hover:scale-[1.03]"
        >
          <GooglePlayIcon size={16} />
          Get the App
        </a>
      </div>
    </header>
  );
}
