import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-legibility',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Human Factors Engineering</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Legibility Is Distance-Based, Not Subjective</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          We adhere to signage and wayfinding standards (ISO 9241, SEGD), rather than web typography rules, to guarantee utility in motion.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <!-- Card 1: The Standard -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col">
          <div class="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mb-6 text-teal-600">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h4 class="text-lg font-bold text-[#1F2937] mb-2">The Standard</h4>
          <p class="text-sm text-[#6B7280] leading-relaxed mb-4 flex-grow">
            <strong>ISO 9241 & SEGD</strong> dictate that text size must be a function of viewing distance (Visual Angle).
          </p>
          <div class="bg-teal-50/50 p-3 rounded border border-teal-100">
             <p class="text-[11px] font-semibold text-teal-800 uppercase tracking-wide mb-1">Critical Reference</p>
             <p class="text-xs text-teal-700">Calori & Vanden-Eynden,<br/><em>"Signage and Wayfinding Design"</em></p>
          </div>
        </div>

        <!-- Card 2: The Context -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col">
          <div class="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-6 text-orange-600">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 class="text-lg font-bold text-[#1F2937] mb-2">The Friction</h4>
          <p class="text-sm text-[#6B7280] leading-relaxed mb-4 flex-grow">
            Badges are "signs in motion." Users are walking, often in poor lighting. This is not a phone screen held static at 12 inches.
          </p>
          <div class="bg-orange-50/50 p-3 rounded border border-orange-100">
             <p class="text-[11px] font-semibold text-orange-800 uppercase tracking-wide mb-1">Impact</p>
             <p class="text-xs text-orange-700">Scan speed drops by 40% due to motion blur and glare.</p>
          </div>
        </div>

        <!-- Card 3: The Calculation -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col">
          <div class="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h4 class="text-lg font-bold text-[#1F2937] mb-2">The Result</h4>
          <p class="text-sm text-[#6B7280] leading-relaxed mb-4 flex-grow">
            To achieve a 95% recognition rate at arm's length (24") during transit, type cannot dip below specific thresholds.
          </p>
          <div class="bg-indigo-50/50 p-3 rounded border border-indigo-100">
             <p class="text-[11px] font-semibold text-indigo-800 uppercase tracking-wide mb-1">Design Floor</p>
             <p class="text-xs text-indigo-700">10pt Minimum Size<br/>Sans-Serif Mandatory</p>
          </div>
        </div>

      </div>

      <!-- Bottom Principle Bar: UPDATED FOR CONTRAST -->
      <div class="w-full bg-[#1F2937] text-white p-6 rounded-[14px] flex flex-col md:flex-row items-center justify-between shadow-lg gap-4">
        <div class="flex items-start gap-4">
          <div class="p-3 bg-white/10 rounded-lg shrink-0">
            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          <div>
            <h5 class="font-bold text-base text-white mb-1">Additional V1 Requirement: High-Contrast Zones</h5>
            <p class="text-sm text-gray-300 leading-relaxed max-w-3xl">
                Legibility is strictly a function of contrast. Dynamic text <strong>must</strong> sit on a white or light-grey background. 
                <span class="text-yellow-400 font-medium">Full-bleed background images are prohibited behind schedule data</span> to prevent contrast failure.
            </p>
          </div>
        </div>
        <div class="shrink-0">
            <span class="inline-flex items-center px-4 py-1.5 rounded bg-white/10 text-white text-xs font-bold uppercase border border-white/20 tracking-wider">
                Mandatory
            </span>
        </div>
      </div>

    </div>
  `
})
export class SlideLegibilityComponent {}