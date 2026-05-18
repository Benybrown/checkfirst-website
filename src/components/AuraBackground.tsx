"use client";

import UnicornScene from "unicornstudio-react";

export function AuraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-screen opacity-75"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 82%, transparent)",
        }}
      >
        <UnicornScene projectId="ty3N7ZPaIU7KlWixQFIc" />
      </div>
      <div className="cf-blob-one absolute left-[-10%] top-[-14%] h-[52vw] w-[52vw] rounded-full bg-blue-200/35 blur-[7rem]" />
      <div className="cf-blob-two absolute bottom-[-18%] right-[-12%] h-[58vw] w-[58vw] rounded-full bg-cyan-200/24 blur-[8rem]" />
      <div className="absolute left-[36%] top-[28%] h-[28vw] w-[28vw] rounded-full bg-white/48 blur-[5rem]" />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.09) 1px, transparent 0)",
          backgroundSize: "2rem 2rem",
        }}
      />
    </div>
  );
}
