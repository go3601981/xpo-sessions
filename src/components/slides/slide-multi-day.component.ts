import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-multi-day',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <div class="mb-10">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Multi-day Considerations</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Multi-day Events: Date Placement Options</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          Adding dates increases vertical density pressure. We provide two rendering modes to handle this.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        
        <!-- Option 1 -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm flex flex-col">
           <div class="flex items-center justify-between mb-4">
             <h4 class="text-lg font-bold text-[#1F2937]">Option 1: Day Header</h4>
             <span class="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase rounded">Recommended</span>
           </div>
           
           <div class="bg-gray-50 p-4 rounded border border-gray-200 mb-4 font-sans">
              <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 border-b border-gray-300 pb-1">Fri, Feb 6</div>
              <div class="flex items-center gap-2 mb-2">
                 <span class="text-xs font-bold text-blue-600 w-12 shrink-0">9:00 AM</span>
                 <span class="text-xs text-gray-800">Keynote</span>
              </div>
              <div class="flex items-center gap-2">
                 <span class="text-xs font-bold text-blue-600 w-12 shrink-0 whitespace-nowrap">11:00 AM</span>
                 <span class="text-xs text-gray-800">Workshop</span>
              </div>
           </div>

           <p class="text-sm text-[#6B7280]">
             <strong>Pros:</strong> Clearest distinction between days.<br>
             <strong>Cons:</strong> Consumes a full line of vertical space per day.
           </p>
        </div>

        <!-- Option 2 -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm flex flex-col">
           <div class="flex items-center justify-between mb-4">
             <h4 class="text-lg font-bold text-[#1F2937]">Option 2: Inline Label</h4>
             <span class="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase rounded">Space Saver</span>
           </div>
           
           <div class="bg-gray-50 p-4 rounded border border-gray-200 mb-4 font-sans">
              <div class="flex items-center gap-2 mb-2">
                 <div class="flex flex-col w-12 leading-none shrink-0">
                   <span class="text-[9px] font-bold text-gray-400">Fri 6</span>
                   <span class="text-xs font-bold text-blue-600">9:00A</span>
                 </div>
                 <span class="text-xs text-gray-800">Keynote</span>
              </div>
              <div class="flex items-center gap-2">
                 <div class="flex flex-col w-12 leading-none shrink-0">
                   <span class="text-[9px] font-bold text-gray-400">Sat 7</span>
                   <span class="text-xs font-bold text-blue-600">9:00A</span>
                 </div>
                 <span class="text-xs text-gray-800">Wrap-up</span>
              </div>
           </div>

           <p class="text-sm text-[#6B7280]">
             <strong>Pros:</strong> Saves vertical lines for more sessions.<br>
             <strong>Cons:</strong> Clutters the time column; harder to scan.
           </p>
        </div>

      </div>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
         <p class="text-blue-800 text-sm">
           <strong>Decision:</strong> Default to <strong>Day Headers</strong> for clarity. Inline labels are only used in "Extreme" density modes or when space is critically low.
         </p>
      </div>

    </div>
  `
})
export class SlideMultiDayComponent {}