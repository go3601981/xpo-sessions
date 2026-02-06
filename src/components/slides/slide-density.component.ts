import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-density',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-8 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Controlled Flexibility</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Two Density Presets That Both Meet Standards</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          We offer organizers a choice between maximum glanceability and maximum content coverage, without compromising the legibility floor.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        <!-- Preset A: Comfortable -->
        <div class="group relative">
          <div class="absolute -inset-4 rounded-xl bg-gradient-to-b from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div class="relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div class="h-2 bg-blue-500 w-full"></div>
            <div class="p-6 md:p-8">
              <div class="flex items-center justify-between mb-6">
                <h4 class="text-2xl font-bold text-gray-900">Preset A: Comfortable</h4>
                <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full tracking-wide">Default</span>
              </div>
              
              <!-- Real Text Mockup -->
              <div class="bg-white rounded-lg p-6 border border-gray-200 mb-6 shadow-sm ring-4 ring-gray-50 relative overflow-hidden">
                 <div class="absolute top-0 right-0 px-2 py-1 bg-gray-100 text-[10px] font-bold text-gray-400 rounded-bl">BADGE PREVIEW</div>
                 
                 <div class="space-y-4 font-sans mt-2">
                    <div class="flex flex-col">
                        <div class="flex items-center gap-2">
                           <span class="text-sm font-bold text-blue-600">9:00 AM</span>
                           <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">• Main Stage</span>
                        </div>
                        <span class="text-base font-bold text-gray-900 leading-tight">Welcome Keynote</span>
                    </div>
                    <div class="w-full h-px bg-gray-100"></div>
                    <div class="flex flex-col">
                        <div class="flex items-center gap-2">
                           <span class="text-sm font-bold text-blue-600">10:30 AM</span>
                           <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">• Room 204</span>
                        </div>
                        <span class="text-base font-bold text-gray-900 leading-tight">Product Strategy</span>
                    </div>
                    <div class="w-full h-px bg-gray-100"></div>
                    <div class="flex flex-col">
                        <div class="flex items-center gap-2">
                           <span class="text-sm font-bold text-blue-600">12:00 PM</span>
                           <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">• Hall B</span>
                        </div>
                        <span class="text-base font-bold text-gray-900 leading-tight">Networking Lunch</span>
                    </div>
                 </div>
              </div>

              <ul class="space-y-3">
                <li class="flex items-start gap-3 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span><strong>Optimized for Glanceability:</strong> Instant recognition at walking speed.</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span><strong>Generous Spacing:</strong> 12pt primary type, comfortable leading.</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span><strong>Full Context:</strong> Includes distinct location data.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Preset B: Dense -->
        <div class="group relative">
          <div class="absolute -inset-4 rounded-xl bg-gradient-to-b from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div class="relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div class="h-2 bg-indigo-500 w-full"></div>
            <div class="p-6 md:p-8">
              <div class="flex items-center justify-between mb-6">
                <h4 class="text-2xl font-bold text-gray-900">Preset B: Compact</h4>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase rounded-full tracking-wide">High Volume</span>
              </div>

              <!-- Real Text Mockup -->
              <div class="bg-white rounded-lg p-6 border border-gray-200 mb-6 shadow-sm ring-4 ring-gray-50 relative overflow-hidden">
                 <div class="absolute top-0 right-0 px-2 py-1 bg-gray-100 text-[10px] font-bold text-gray-400 rounded-bl">BADGE PREVIEW</div>

                 <div class="space-y-2.5 font-sans mt-2">
                    <div class="flex items-baseline gap-2">
                        <div class="flex flex-col w-16 shrink-0">
                           <span class="text-xs font-bold text-indigo-600 whitespace-nowrap">9:00 AM</span>
                           <span class="text-[9px] text-gray-400 font-medium truncate">Stage 1</span>
                        </div>
                        <span class="text-sm font-bold text-gray-900 leading-tight truncate">Welcome Keynote</span>
                    </div>
                    <div class="w-full h-px bg-gray-100"></div>
                    <div class="flex items-baseline gap-2">
                         <div class="flex flex-col w-16 shrink-0">
                           <span class="text-xs font-bold text-indigo-600 whitespace-nowrap">10:00 AM</span>
                           <span class="text-[9px] text-gray-400 font-medium truncate">Rm 201</span>
                        </div>
                        <span class="text-sm font-bold text-gray-900 leading-tight truncate">Breakout Session A</span>
                    </div>
                    <div class="w-full h-px bg-gray-100"></div>
                    <div class="flex items-baseline gap-2">
                        <div class="flex flex-col w-16 shrink-0">
                           <span class="text-xs font-bold text-indigo-600 whitespace-nowrap">10:00 AM</span>
                           <span class="text-[9px] text-gray-400 font-medium truncate">Rm 202</span>
                        </div>
                        <span class="text-sm font-bold text-gray-900 leading-tight truncate">Breakout Session B</span>
                    </div>
                    <div class="w-full h-px bg-gray-100"></div>
                    <div class="flex items-baseline gap-2">
                        <div class="flex flex-col w-16 shrink-0">
                           <span class="text-xs font-bold text-indigo-600 whitespace-nowrap">11:30 AM</span>
                           <span class="text-[9px] text-gray-400 font-medium truncate">Lab A</span>
                        </div>
                        <span class="text-sm font-bold text-gray-900 leading-tight truncate">Workshop: Angular</span>
                    </div>
                    <div class="w-full h-px bg-gray-100"></div>
                    <div class="flex items-baseline gap-2">
                        <div class="flex flex-col w-16 shrink-0">
                           <span class="text-xs font-bold text-indigo-600 whitespace-nowrap">1:00 PM</span>
                           <span class="text-[9px] text-gray-400 font-medium truncate">Hall B</span>
                        </div>
                        <span class="text-sm font-bold text-gray-900 leading-tight truncate">Lunch & Learn</span>
                    </div>
                 </div>
              </div>

              <ul class="space-y-3">
                <li class="flex items-start gap-3 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span><strong>Optimized for Coverage:</strong> Maximizes information per inch.</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span><strong>Integrated Location:</strong> Room codes stacked under time.</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span><strong>Higher Count:</strong> Displays 5-7 items if space allows.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  `
})
export class SlideDensityComponent {}