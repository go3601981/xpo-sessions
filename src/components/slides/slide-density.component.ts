import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-density',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-6 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-2">Controlled Flexibility</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Density Presets & Typography</h3>
        <p class="text-[#6B7280] mt-2 max-w-3xl text-lg">
          We offer organizers choice, but enforce strict typography rules. Font family is restricted to approved legible sans-serifs (no script/novelty).
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        <!-- Preset A: Comfortable -->
        <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
          <div class="h-1.5 bg-blue-500 w-full"></div>
          <div class="p-5">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-lg font-bold text-gray-900">Preset A: Comfortable</h4>
              <span class="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase rounded-full tracking-wide">Default</span>
            </div>
            
            <div class="bg-gray-50 p-3 rounded border border-gray-100 mb-4">
               <p class="text-xs text-gray-500 font-mono mb-1"><strong>Specs:</strong></p>
               <ul class="text-xs text-gray-600 space-y-1">
                 <li>• Primary Font: <strong>12pt</strong></li>
                 <li>• Line Height: <strong>1.4 (17pt)</strong></li>
                 <li>• Max Lines: <strong>2 per title</strong></li>
               </ul>
            </div>

            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-xs text-gray-600">
                <svg class="w-4 h-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span><strong>Best Legibility:</strong> Instant recognition.</span>
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-600">
                <svg class="w-4 h-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span><strong>Context:</strong> Full location details.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Preset B: Dense -->
        <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
          <div class="h-1.5 bg-indigo-500 w-full"></div>
          <div class="p-5">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-lg font-bold text-gray-900">Preset B: Compact</h4>
              <span class="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase rounded-full tracking-wide">High Vol</span>
            </div>

            <div class="bg-gray-50 p-3 rounded border border-gray-100 mb-4">
               <p class="text-xs text-gray-500 font-mono mb-1"><strong>Specs:</strong></p>
               <ul class="text-xs text-gray-600 space-y-1">
                 <li>• Primary Font: <strong>10pt</strong></li>
                 <li>• Line Height: <strong>1.2 (12pt)</strong></li>
                 <li>• Max Lines: <strong>1 (Truncated)</strong></li>
               </ul>
            </div>

            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-xs text-gray-600">
                <svg class="w-4 h-4 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span><strong>Max Coverage:</strong> More items per inch.</span>
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-600">
                <svg class="w-4 h-4 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span><strong>Integrated:</strong> Room code stacked.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Preset C: Extreme (NEW) -->
        <div class="bg-white rounded-xl border-2 border-amber-400 shadow-sm overflow-hidden flex flex-col h-full relative">
           <div class="absolute top-0 right-0 bg-amber-400 text-white text-[9px] font-bold px-2 py-1 rounded-bl">Use with Caution</div>
          <div class="h-1.5 bg-amber-500 w-full"></div>
          <div class="p-5">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-lg font-bold text-gray-900">Preset C: Extreme</h4>
              <span class="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded-full tracking-wide">Org Choice</span>
            </div>

            <div class="bg-amber-50 p-3 rounded border border-amber-100 mb-4">
               <p class="text-xs text-amber-700 font-mono mb-1"><strong>Specs (Risk):</strong></p>
               <ul class="text-xs text-amber-800 space-y-1">
                 <li>• Primary Font: <strong>9pt</strong> (Sub-standard)</li>
                 <li>• Line Height: <strong>1.1 (Tight)</strong></li>
                 <li>• Truncation: <strong>Aggressive</strong></li>
               </ul>
            </div>

            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-xs text-gray-600">
                <svg class="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                <span><strong>Organizer Autonomy:</strong> Available if requested.</span>
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-600">
                <svg class="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                <span><strong>Readability Risk:</strong> May fail for older eyes or low light.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  `
})
export class SlideDensityComponent {}