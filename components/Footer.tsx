"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import PillIcon from "@/components/PillIcon";

const links = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const hash = href.replace("/", ""); // "#features"
      
      if (pathname === "/") {
        const targetId = hash.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(href);
      }
    }
  };

  return (
    <footer className="mt-auto border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-brand-dark text-white">
            <PillIcon size={14} />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Pill <span className="text-brand">IQ</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => {
            const isHash = link.href.startsWith("/#");
            return isHash ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[13.5px] text-muted transition-colors hover:text-ink cursor-pointer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13.5px] text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-6xl text-center text-[12px] text-muted/80 space-y-1">
        <p>
          For informational purposes only — not a substitute for professional
          medical advice.
        </p>
        <p>
          © 2026 Pill IQ. A Product by{" "}
          <a
            href="https://themidnight.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand transition-colors hover:text-brand-dark"
          >
            Midnight Digital Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
}
