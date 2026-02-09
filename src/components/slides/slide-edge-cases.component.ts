import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-edge-cases',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Quality Assurance</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Edge Cases & QA Guardrails</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          Handling the extremes to prevent production failures.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm">
           <h4 class="text-lg font-bold text-red-600 mb-2">Margin Enforcement</h4>
           <p class="text-sm text-gray-600">
             If a widget is placed too close to the edge, the UI must auto-snap it back to the safe zone (0.25"). We do not allow printing in the danger zone.
           </p>
        </div>

        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm">
           <h4 class="text-lg font-bold text-blue-600 mb-2">Long Title Truncation</h4>
           <p class="text-sm text-gray-600">
             Titles longer than 2 lines (Preset A) or 1 line (Preset B) are ellipsed (...). We do <strong>not</strong> shrink the font size to fit text.
           </p>
        </div>

        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm">
           <h4 class="text-lg font-bold text-indigo-600 mb-2">Multi-day Headers</h4>
           <p class="text-sm text-gray-600">
             Day headers must stick to the top of their group. They cannot be orphaned (a header at the bottom of the column with no sessions below it).
           </p>
        </div>

        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm">
           <h4 class="text-lg font-bold text-amber-600 mb-2">Extreme Mode Warnings</h4>
           <p class="text-sm text-gray-600">
             If "Extreme" preset is selected, the UI must display a persistent warning label: "Readability may be compromised."
           </p>
        </div>

      </div>

    </div>
  `
})
export class SlideEdgeCasesComponent {}