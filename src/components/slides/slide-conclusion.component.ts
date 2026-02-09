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
          We include Time, Location, and Title. Date is handled contextually for multi-day events.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        
        <!-- Field 1: Start Time -->
        <div class="bg-white p-5 rounded-[14px] border border-[#E5E7EB] shadow-sm">
          <div class="flex items-center gap-2 mb-3">
             <div class="p-1.5 bg-blue-50 text-blue-600 rounded">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
             <h4 class="font-bold text-[#1F2937]">Start Time</h4>
          </div>
          <p class="text-xs text-gray-500">The absolute sort key. Answers "Am I late?"</p>
        </div>

        <!-- Field 2: Location -->
        <div class="bg-white p-5 rounded-[14px] border border-[#E5E7EB] shadow-sm">
          <div class="flex items-center gap-2 mb-3">
             <div class="p-1.5 bg-orange-50 text-orange-600 rounded">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
             </div>
             <h4 class="font-bold text-[#1F2937]">Location</h4>
          </div>
          <p class="text-xs text-gray-500">Closes the wayfinding loop. Uses short-codes (e.g. "Rm 102").</p>
        </div>

        <!-- Field 3: Title -->
        <div class="bg-white p-5 rounded-[14px] border border-[#E5E7EB] shadow-sm">
          <div class="flex items-center gap-2 mb-3">
             <div class="p-1.5 bg-indigo-50 text-indigo-600 rounded">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
             </div>
             <h4 class="font-bold text-[#1F2937]">Session Title</h4>
          </div>
          <p class="text-xs text-gray-500">Truncated for context. Topic recognition over grammar.</p>
        </div>

        <!-- Field 4: Date (NEW) -->
        <div class="bg-white p-5 rounded-[14px] border border-[#E5E7EB] shadow-sm">
          <div class="flex items-center gap-2 mb-3">
             <div class="p-1.5 bg-teal-50 text-teal-600 rounded">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
             </div>
             <h4 class="font-bold text-[#1F2937]">Date Support</h4>
          </div>
          <p class="text-xs text-gray-500">Day Headers for multi-day events. Essential for conferences.</p>
        </div>

      </div>

      <!-- Optional Footer -->
      <div class="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
        <div class="flex items-center justify-between mb-2">
           <h4 class="text-gray-800 font-bold text-lg">Disclaimer Strategy: Optional Recommendation</h4>
           <span class="px-2 py-1 bg-gray-200 text-gray-600 text-[10px] font-bold uppercase rounded">Organizer Controlled</span>
        </div>
        <p class="text-gray-600 text-base leading-relaxed mb-2">
           Printing implies non-real-time updates. Organizers <em>may</em> choose to add a static footer ("Check App for Updates") to mitigate liability, but this is <strong>not mandatory</strong>.
        </p>
      </div>

    </div>
  `
})
export class SlideConclusionComponent {}