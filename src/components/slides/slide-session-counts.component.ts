import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-session-counts',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-12 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Capacity Planning</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Recommended Session Counts by Badge Size</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          We define capacity based on the user's ability to consume information, not just the physical ability to print ink on paper.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
        
        <!-- 4x3 Badge Card -->
        <div class="bg-white p-8 rounded-[14px] border border-[#E5E7EB] shadow-sm relative overflow-hidden flex flex-col">
          <div class="absolute top-0 w-full left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          
          <div class="flex items-center justify-between mb-6">
            <h4 class="text-2xl font-bold text-[#1F2937]">4″ × 3″ Badge <span class="text-gray-400 font-normal text-lg">(Compact)</span></h4>
            <div class="w-10 h-8 border-2 border-gray-300 rounded bg-gray-50 flex items-center justify-center">
                <div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1">
                    <div class="w-full h-0.5 bg-gray-300 rounded-full"></div>
                    <div class="w-full h-0.5 bg-gray-300 rounded-full"></div>
                    <div class="w-full h-0.5 bg-gray-300 rounded-full"></div>
                </div>
            </div>
          </div>

          <div class="mb-8">
            <div class="flex items-baseline gap-2">
              <span class="text-5xl font-bold text-[#3B5BDB]">3–4</span>
              <span class="text-xl font-medium text-gray-500">sessions</span>
            </div>
            <p class="text-sm text-blue-600 font-medium mt-1 uppercase tracking-wide">Recommended Range</p>
          </div>

          <ul class="space-y-4 text-[#4B5563] flex-grow">
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Optimized for fast scanning and legibility at arm’s length.</span>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Designed to avoid visual crowding in a vertically constrained space.</span>
            </li>
          </ul>
        </div>

        <!-- 4x6 Badge Card -->
        <div class="bg-white p-8 rounded-[14px] border border-[#E5E7EB] shadow-sm relative overflow-hidden flex flex-col">
          <div class="absolute top-0 w-full left-0 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>

          <div class="flex items-center justify-between mb-6">
            <h4 class="text-2xl font-bold text-[#1F2937]">4″ × 6″ Badge <span class="text-gray-400 font-normal text-lg">(Standard)</span></h4>
            <div class="w-8 h-12 border-2 border-gray-300 rounded bg-gray-50 flex items-center justify-center">
                 <div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-1">
                    <div class="w-full h-0.5 bg-gray-300 rounded-full"></div>
                    <div class="w-full h-0.5 bg-gray-300 rounded-full"></div>
                    <div class="w-full h-0.5 bg-gray-300 rounded-full"></div>
                    <div class="w-full h-0.5 bg-gray-300 rounded-full"></div>
                    <div class="w-full h-0.5 bg-gray-300 rounded-full"></div>
                </div>
            </div>
          </div>

          <div class="mb-8">
            <div class="flex items-baseline gap-2">
              <span class="text-5xl font-bold text-indigo-600">5–7</span>
              <span class="text-xl font-medium text-gray-500">sessions</span>
            </div>
            <p class="text-sm text-indigo-600 font-medium mt-1 uppercase tracking-wide">Recommended Range</p>
          </div>

          <ul class="space-y-4 text-[#4B5563] flex-grow">
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Allows additional vertical space without compromising readability.</span>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Maintains a predictable scanning rhythm for longer itineraries.</span>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              <span><strong>Top-Heavy Priority:</strong> The bottom 25% is often obscured by tables or twisting. Critical data must sit above this "Visual Fold".</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Explanatory Note -->
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 flex gap-4 items-center">
        <div class="p-2 bg-white rounded-full shadow-sm text-gray-400">
           <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <p class="text-gray-600 text-sm md:text-base leading-relaxed">
          These ranges are designed to balance information coverage with real-world readability. More sessions can technically fit, but doing so degrades scan speed and trust.
        </p>
      </div>

    </div>
  `
})
export class SlideSessionCountsComponent {}