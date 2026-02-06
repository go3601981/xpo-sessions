import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-conclusion',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-8 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Data Selection Strategy</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">The "Three Pillars" of Wayfinding</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          To ensure the badge is a standalone navigation tool, we now include Location. This forces stricter character limits on titles but closes the "Where do I go?" loop.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <!-- Field 1: Start Time -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-[#3B5BDB] transition-colors">
          <div class="flex items-start justify-between mb-4">
            <div class="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold uppercase tracking-wide">Sort Key</span>
          </div>
          
          <h4 class="text-xl font-bold text-[#1F2937] mb-3">Start Time</h4>
          
          <ul class="space-y-3 text-sm text-[#4B5563]">
            <li class="flex gap-2">
              <svg class="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span><strong>Primary Anchor:</strong> The absolute sorting mechanism.</span>
            </li>
            <li class="flex gap-2">
              <svg class="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span><strong>Context:</strong> Instant answer to "Am I late?"</span>
            </li>
          </ul>
        </div>

        <!-- Field 2: Location (NEW) -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-[#3B5BDB] transition-colors">
          <div class="flex items-start justify-between mb-4">
            <div class="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold uppercase tracking-wide">Wayfinding</span>
          </div>
          
          <h4 class="text-xl font-bold text-[#1F2937] mb-3">Room / Location</h4>
          
          <ul class="space-y-3 text-sm text-[#4B5563]">
            <li class="flex gap-2">
              <svg class="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span><strong>Actionable:</strong> Eliminates the need to open the app to find "Where."</span>
            </li>
            <li class="flex gap-2">
              <svg class="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span><strong>Abbreviated:</strong> Uses short-codes (e.g. "Rm 102", "Hall B").</span>
            </li>
          </ul>
        </div>

        <!-- Field 3: Session Title -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-[#3B5BDB] transition-colors">
          <div class="flex items-start justify-between mb-4">
            <div class="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold uppercase tracking-wide">Verification</span>
          </div>
          
          <h4 class="text-xl font-bold text-[#1F2937] mb-3">Session Title</h4>
          
          <ul class="space-y-3 text-sm text-[#4B5563]">
            <li class="flex gap-2">
              <svg class="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span><strong>Truncated:</strong> Aggressively shortened to fit lines shared with Location.</span>
            </li>
            <li class="flex gap-2">
              <svg class="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span><strong>Context:</strong> "Topic" recognition over full grammar.</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Mitigation / Liability Note -->
      <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg flex items-center gap-6">
        <div class="hidden md:block p-3 bg-white rounded-full shadow-sm text-amber-500">
           <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        </div>
        <div>
           <h4 class="text-amber-800 font-bold text-lg mb-1">Mitigation: The Static Snapshot Rule</h4>
           <p class="text-amber-700 text-base leading-relaxed">
             To protect against schedule changes after printing, every badge <strong>MUST</strong> include a static footer: 'Check App for Updates.' This shifts the 'Source of Truth' liability back to the digital state.
           </p>
        </div>
      </div>

    </div>
  `
})
export class SlideConclusionComponent {}