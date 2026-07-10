"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Is Pill IQ a replacement for a doctor or pharmacist?",
    answer:
      "No. It gives you clear, quick information to understand a medicine, but isn't medical advice. Always consult a licensed healthcare professional before taking any medication.",
  },
  {
    question: "What can I scan?",
    answer:
      "Medicine packaging, blister packs, and bottles. Take a fresh photo or upload an existing one from your gallery — either works.",
  },
  {
    question: "How accurate is the analysis?",
    answer:
      "Our AI recognizes over 1,200 medicines and returns structured information in seconds. For anything you plan to take, confirm with a professional — the app flags this on every result.",
  },
  {
    question: "What's the difference between Free and Premium?",
    answer:
      "Free covers up to 3 scans a day with core details. Premium unlocks 50 scans per day, full interaction and warning reports, and lets you export or share your scan history.",
  },
  {
    question: "Do you sell my data or photos?",
    answer:
      "Never. Photos are only used to identify the medicine you scan. We don't sell or share your data or images with advertisers.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Pill IQ is available on Android phones and tablets running Android 8.0 or later. An iOS version is on the way.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <div className="mx-auto mb-12 text-center">
        <p className="mb-3 text-[12.5px] font-semibold uppercase tracking-wider text-brand">
          FAQ
        </p>
        <h2 className="text-[32px] leading-tight text-ink">Questions, answered</h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl bg-bg-card"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-medium text-ink">
                  {faq.question}
                </span>
                <Plus
                  size={17}
                  className={`shrink-0 text-muted transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                }`}
                style={{ display: "grid" }}
              >
                <div className="overflow-hidden px-6">
                  <p className="text-[14px] leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
