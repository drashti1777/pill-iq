import { Camera, Brain, Home, History, User } from "lucide-react";
import PillIcon from "@/components/PillIcon";

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[310px] select-none rounded-[2.75rem] border-[6px] border-ink bg-ink p-2 shadow-2xl animate-float">
      <div className="overflow-hidden rounded-[2.1rem] bg-white">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[11px] font-medium text-ink">
          <span>9:34</span>
          <span className="flex items-center gap-1 text-[10px] text-ink/70">
            5G <span className="inline-block h-2 w-3.5 rounded-[2px] bg-ink/70" />
          </span>
        </div>

        <div className="px-5 pb-6 pt-1">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-serif text-[19px] text-ink">Hi, Jhon Doe</h3>
            <span className="rounded-full bg-accent-mint px-2.5 py-1 text-[10px] font-medium text-brand-dark">
              Scans 6/100
            </span>
          </div>
          <p className="mb-3 text-[11px] font-medium text-muted">
            AI Medicine Identifier
          </p>

          {/* Scan frame */}
          <div className="relative mb-3 flex flex-col items-center justify-center rounded-2xl bg-accent-mint/40 px-4 py-7 overflow-hidden">
            <span className="absolute left-2 top-2 h-3.5 w-3.5 rounded-tl-md border-l-2 border-t-2 border-brand" />
            <span className="absolute right-2 top-2 h-3.5 w-3.5 rounded-tr-md border-r-2 border-t-2 border-brand" />
            <span className="absolute bottom-2 left-2 h-3.5 w-3.5 rounded-bl-md border-b-2 border-l-2 border-brand" />
            <span className="absolute bottom-2 right-2 h-3.5 w-3.5 rounded-br-md border-b-2 border-r-2 border-brand" />

            {/* Scanning animation laser line */}
            <div className="absolute left-0 w-full h-[2.5px] bg-gradient-to-r from-transparent via-brand to-transparent shadow-[0_0_8px_#1b6b45] animate-scan pointer-events-none" />

            <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-brand-dark">
              <Camera size={18} />
            </div>
            <p className="font-serif text-[13px] italic text-brand-dark">
              Tap to scan medicine
            </p>
            <p className="mt-0.5 text-center text-[10px] text-muted">
              Take a photo or upload from gallery
            </p>
          </div>

          {/* Feature rows */}
          <div className="mb-2 flex items-start gap-2.5 rounded-xl bg-bg px-3 py-2.5">
            <span className="mt-0.5 text-brand-dark">
              <PillIcon size={14} />
            </span>
            <div>
              <p className="text-[11.5px] font-semibold text-ink">Point &amp; Identify</p>
              <p className="text-[10px] leading-snug text-muted">
                Take a photo or upload any medicine packaging or blister pack.
              </p>
            </div>
          </div>
          <div className="mb-3.5 flex items-start gap-2.5 rounded-xl bg-bg px-3 py-2.5">
            <span className="mt-0.5 text-brand-dark">
              <Brain size={14} />
            </span>
            <div>
              <p className="text-[11.5px] font-semibold text-ink">AI-Powered Analysis</p>
              <p className="text-[10px] leading-snug text-muted">
                Uses, dosage, side effects &amp; storage in seconds.
              </p>
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-dark py-3 text-[12.5px] font-medium text-white">
            <PillIcon size={14} />
            Scan Medicine
            <span className="ml-1 rounded-full bg-white/15 px-1.5 py-0.5 text-[9.5px]">
              94 left
            </span>
          </button>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center justify-around border-t border-line py-3">
          <div className="flex flex-col items-center gap-0.5 text-brand-dark">
            <Home size={16} />
            <span className="text-[9px] font-medium">Home</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-muted/70">
            <History size={16} />
            <span className="text-[9px]">History</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-muted/70">
            <User size={16} />
            <span className="text-[9px]">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
