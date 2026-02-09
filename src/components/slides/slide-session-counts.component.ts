import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-session-counts',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-8 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Capacity Planning</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Recommended Session Counts</h3>
        <p class="text-[#6B7280] mt-2 max-w-3xl text-lg">
          We define capacity based on user cognition, but allow an "Extreme" override at the organizer's discretion.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        
        <!-- 4x3 Badge Card -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm flex flex-col">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-xl font-bold text-[#1F2937]">4″ × 3″ Badge</h4>
            <div class="w-8 h-6 border-2 border-gray-300 rounded bg-gray-50"></div>
          </div>

          <div class="grid grid-cols-3 gap-2 mb-4 text-center">
            <!-- Comfortable -->
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-blue-600">3–4</span>
              <p class="text-[10px] text-blue-600 font-bold uppercase tracking-wide">Comfortable</p>
            </div>
            
            <!-- Compact -->
            <div class="flex flex-col items-center border-x border-gray-100">
              <span class="text-3xl font-bold text-indigo-600">5-6</span>
              <p class="text-[10px] text-indigo-600 font-bold uppercase tracking-wide">Compact</p>
            </div>

            <!-- Extreme -->
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-red-500">8-12</span>
              <p class="text-[10px] text-red-600 font-bold uppercase tracking-wide">Extreme</p>
            </div>
          </div>

          <p class="text-sm text-[#4B5563] mb-2 mt-auto"><strong>Comfortable:</strong> Best legibility & scan speed.</p>
        </div>

        <!-- 4x6 Badge Card -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm flex flex-col">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-xl font-bold text-[#1F2937]">4″ × 6″ Badge</h4>
            <div class="w-6 h-9 border-2 border-gray-300 rounded bg-gray-50"></div>
          </div>

          <div class="grid grid-cols-3 gap-2 mb-4 text-center">
            <!-- Comfortable -->
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-blue-600">5–7</span>
              <p class="text-[10px] text-blue-600 font-bold uppercase tracking-wide">Comfortable</p>
            </div>
            
            <!-- Compact -->
            <div class="flex flex-col items-center border-x border-gray-100">
              <span class="text-3xl font-bold text-indigo-600">8-10</span>
              <p class="text-[10px] text-indigo-600 font-bold uppercase tracking-wide">Compact</p>
            </div>

            <!-- Extreme -->
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-red-500">12-16</span>
              <p class="text-[10px] text-red-600 font-bold uppercase tracking-wide">Extreme</p>
            </div>
          </div>

          <p class="text-sm text-[#4B5563] mb-2 mt-auto"><strong>Comfortable:</strong> Predictable scanning rhythm.</p>
        </div>

      </div>

      <!-- Caution Note -->
      <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-4 items-center">
        <div class="p-2 bg-white rounded-full shadow-sm text-amber-500 shrink-0">
           <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        </div>
        <p class="text-amber-800 text-sm leading-relaxed">
          <strong>Caution:</strong> The "Extreme" presets sacrifice legibility for density. Font sizes drop below ISO wayfinding standards (9pt or less).
        </p>
      </div>

    </div>
  `
})
export class SlideSessionCountsComponent {}