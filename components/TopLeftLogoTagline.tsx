// app/components/TopLeftLogoTagline.tsx
// Renders the full logo (2) inside a dark panel with the tagline (3) beneath.
// Mobile: centers the block above the hero; Desktop: aligns in the left column.


import React from "react";
import Image from "next/image";


export function TopLeftLogoTagline() {
return (
<div className="w-full">
{/* Panel that matches the red rectangle #2 in your screenshot */}
<div className="bg-[#0c1726] rounded-2xl border border-white/10 shadow-xl px-4 sm:px-6 py-6 sm:py-8 flex items-center justify-center min-h-[180px] sm:min-h-[240px] md:min-h-[300px]">
<Image
src="/logo-neurasprint.png" // place /public/logo-neurasprint.png
alt="NeuraSprint AI"
width={360}
height={100}
priority
className="h-auto w-[220px] sm:w-[300px] md:w-[340px] lg:w-[360px]"
/>
</div>


{/* Tagline under the panel (red bar #3) */}
<p className="mt-3 text-center md:text-left text-sm sm:text-base font-semibold tracking-tight text-slate-100">
Practical AI. Real ROI. One Sprint.
</p>
</div>
);
}
