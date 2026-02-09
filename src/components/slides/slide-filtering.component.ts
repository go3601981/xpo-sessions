import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-filtering',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Relevance Engine</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Session Selection & Filtering</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          Space is scarce. Organizers can filter out "noise" to maximize the utility of the printed area.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm flex flex-col h-full">
           <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
           </div>
           <h4 class="text-lg font-bold text-[#1F2937] mb-2">Default Behavior</h4>
           <p class="text-sm text-[#6B7280] leading-relaxed mb-4">
             Chronological sorting of <strong>Upcoming</strong> sessions. Logic automatically prioritizes what is next, pruning past events.
           </p>
        </div>

        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm flex flex-col h-full">
           <div class="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
           </div>
           <h4 class="text-lg font-bold text-[#1F2937] mb-2">Noise Filtering</h4>
           <p class="text-sm text-[#6B7280] leading-relaxed mb-4">
             Organizers can exclude specific tracks or session types (e.g., "Meals," "Breaks," "General Housekeeping") to save lines for content.
           </p>
        </div>

        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm flex flex-col h-full">
           <div class="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
           </div>
           <h4 class="text-lg font-bold text-[#1F2937] mb-2">Assignments First</h4>
           <p class="text-sm text-[#6B7280] leading-relaxed mb-4">
             If a user has <strong>Assigned Sessions</strong> (workshops, VIP tracks), these are prioritized at the top of the list over general admission items.
           </p>
        </div>

      </div>

      <div class="mt-8 p-4 bg-gray-100 rounded-lg border-l-4 border-gray-500">
         <p class="text-sm text-gray-700 font-medium">
           <span class="font-bold">Implementation Note:</span> All filtering rules are configured inside the Badge Editor > Session List Widget settings.
         </p>
      </div>

    </div>
  `
})
export class SlideFilteringComponent {}