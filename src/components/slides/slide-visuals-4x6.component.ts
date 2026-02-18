import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-visuals-4x6',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-full flex flex-col justify-center max-w-[90rem] mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-6 text-center">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-2">Visual Verification</h2>
        <h3 class="text-3xl font-bold text-[#1F2937]">4″ × 6″ Badge Layouts (Schedule Only)</h3>
        <p class="text-[#6B7280] mt-2">Vertical canvas utilized strictly for agenda data. No branding. No whitespace.</p>
      </div>

      <!-- Badge Container Grid -->
      <div class="flex justify-center items-start gap-12">

        <!-- BADGE 1: COMFORTABLE (7 Sessions) -->
        <div class="flex flex-col items-center gap-4">
          <div class="relative bg-white rounded shadow-lg border border-gray-300 overflow-hidden flex flex-col" style="width: 260px; height: 390px;">
            <div class="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-2 bg-gray-200 rounded-full z-20"></div>
            
            <div class="flex-1 mx-4 mt-8 mb-4 flex flex-col">
              <!-- Header -->
              <div class="border-b-2 border-black pb-2 mb-4">
                <h1 class="text-xl font-extrabold text-black uppercase tracking-tight">Friday, Feb 6</h1>
              </div>

              <div class="flex-1 flex flex-col justify-between">
                 <!-- Item 1 -->
                 <div class="flex gap-2">
                   <div class="w-12 shrink-0 text-sm font-bold text-black pt-0.5 whitespace-nowrap">09:00</div>
                   <div class="flex-1">
                     <div class="text-sm font-bold text-black leading-snug">Registration</div>
                     <div class="text-xs text-gray-600">Lobby A</div>
                   </div>
                 </div>

                 <!-- Item 2 -->
                 <div class="flex gap-2">
                   <div class="w-12 shrink-0 text-sm font-bold text-black pt-0.5 whitespace-nowrap">10:00</div>
                   <div class="flex-1">
                     <div class="text-sm font-bold text-black leading-snug">Opening Ceremony</div>
                     <div class="text-xs text-gray-600">Main Hall</div>
                   </div>
                 </div>

                 <!-- Item 3 -->
                 <div class="flex gap-2">
                   <div class="w-12 shrink-0 text-sm font-bold text-black pt-0.5 whitespace-nowrap">11:30</div>
                   <div class="flex-1">
                     <div class="text-sm font-bold text-black leading-snug">Keynote Speech</div>
                     <div class="text-xs text-gray-600">Main Hall</div>
                   </div>
                 </div>

                 <!-- Item 4 -->
                 <div class="flex gap-2">
                   <div class="w-12 shrink-0 text-sm font-bold text-black pt-0.5 whitespace-nowrap">12:30</div>
                   <div class="flex-1">
                     <div class="text-sm font-bold text-black leading-snug">Networking Lunch</div>
                     <div class="text-xs text-gray-600">Ballroom</div>
                   </div>
                 </div>

                 <!-- Item 5 -->
                 <div class="flex gap-2">
                   <div class="w-12 shrink-0 text-sm font-bold text-black pt-0.5 whitespace-nowrap">02:00</div>
                   <div class="flex-1">
                     <div class="text-sm font-bold text-black leading-snug">Breakout Session A</div>
                     <div class="text-xs text-gray-600">Room 104</div>
                   </div>
                 </div>

                 <!-- Item 6 -->
                 <div class="flex gap-2">
                   <div class="w-12 shrink-0 text-sm font-bold text-black pt-0.5 whitespace-nowrap">03:30</div>
                   <div class="flex-1">
                     <div class="text-sm font-bold text-black leading-snug">Afternoon Break</div>
                     <div class="text-xs text-gray-600">Foyer</div>
                   </div>
                 </div>

                 <!-- Item 7 -->
                 <div class="flex gap-2">
                   <div class="w-12 shrink-0 text-sm font-bold text-black pt-0.5 whitespace-nowrap">04:00</div>
                   <div class="flex-1">
                     <div class="text-sm font-bold text-black leading-snug">Closing Panel</div>
                     <div class="text-xs text-gray-600">Main Hall</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
          <div class="text-center">
             <h4 class="font-bold text-gray-900">Comfortable</h4>
             <p class="text-xs text-gray-500">7 Sessions • 11pt Type</p>
          </div>
        </div>


        <!-- BADGE 2: COMPACT (10 Sessions - 2 Days) -->
        <div class="flex flex-col items-center gap-4">
          <div class="relative bg-white rounded shadow-lg border border-gray-300 overflow-hidden flex flex-col" style="width: 260px; height: 390px;">
            <div class="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-2 bg-gray-200 rounded-full z-20"></div>
            
            <div class="flex-1 mx-4 mt-8 mb-4 flex flex-col gap-5">
              
              <!-- Day 1 Block (5 Items) - Removed flex-1 to tighten spacing -->
              <div class="flex flex-col">
                <div class="border-b-2 border-black pb-1 mb-1.5">
                  <h2 class="text-sm font-bold text-black uppercase">Friday, Feb 6</h2>
                </div>
                <div class="flex flex-col gap-2">
                   <div class="flex gap-2 items-baseline">
                     <div class="w-10 shrink-0 text-xs font-bold text-black whitespace-nowrap">09:00</div>
                     <div class="flex-1 text-xs text-black truncate">Registration & Coffee</div>
                   </div>
                   <div class="flex gap-2 items-baseline">
                     <div class="w-10 shrink-0 text-xs font-bold text-black whitespace-nowrap">10:00</div>
                     <div class="flex-1 text-xs text-black truncate">Keynote Address</div>
                   </div>
                   <div class="flex gap-2 items-baseline">
                     <div class="w-10 shrink-0 text-xs font-bold text-black whitespace-nowrap">12:00</div>
                     <div class="flex-1 text-xs text-black truncate">Lunch Break</div>
                   </div>
                   <div class="flex gap-2 items-baseline">
                     <div class="w-10 shrink-0 text-xs font-bold text-black whitespace-nowrap">02:00</div>
                     <div class="flex-1 text-xs text-black truncate">Workshop Track A</div>
                   </div>
                   <div class="flex gap-2 items-baseline">
                     <div class="w-10 shrink-0 text-xs font-bold text-black whitespace-nowrap">04:00</div>
                     <div class="flex-1 text-xs text-black truncate">Happy Hour</div>
                   </div>
                </div>
              </div>

              <!-- Day 2 Block (5 Items) - Removed flex-1 to tighten spacing -->
              <div class="flex flex-col">
                <div class="border-b-2 border-black pb-1 mb-1.5">
                  <h2 class="text-sm font-bold text-black uppercase">Saturday, Feb 7</h2>
                </div>
                <div class="flex flex-col gap-2">
                   <div class="flex gap-2 items-baseline">
                     <div class="w-10 shrink-0 text-xs font-bold text-black whitespace-nowrap">09:00</div>
                     <div class="flex-1 text-xs text-black truncate">Breakfast</div>
                   </div>
                   <div class="flex gap-2 items-baseline">
                     <div class="w-10 shrink-0 text-xs font-bold text-black whitespace-nowrap">10:00</div>
                     <div class="flex-1 text-xs text-black truncate">Morning Panel</div>
                   </div>
                   <div class="flex gap-2 items-baseline">
                     <div class="w-10 shrink-0 text-xs font-bold text-black whitespace-nowrap">11:30</div>
                     <div class="flex-1 text-xs text-black truncate">Tech Deep Dive</div>
                   </div>
                   <div class="flex gap-2 items-baseline">
                     <div class="w-10 shrink-0 text-xs font-bold text-black whitespace-nowrap">01:00</div>
                     <div class="flex-1 text-xs text-black truncate">Networking Lunch</div>
                   </div>
                   <div class="flex gap-2 items-baseline">
                     <div class="w-10 shrink-0 text-xs font-bold text-black whitespace-nowrap">02:30</div>
                     <div class="flex-1 text-xs text-black truncate">Closing Ceremony</div>
                   </div>
                </div>
              </div>

            </div>
          </div>
          <div class="text-center">
             <h4 class="font-bold text-gray-900">Compact</h4>
             <p class="text-xs text-gray-500">10 Sessions (2 Days) • 10pt Type</p>
          </div>
        </div>


        <!-- BADGE 3: EXTREME (16 Sessions - 2 Days) -->
        <div class="flex flex-col items-center gap-4">
          <div class="relative bg-white rounded shadow-lg border border-gray-300 overflow-hidden flex flex-col" style="width: 260px; height: 390px;">
            <div class="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-2 bg-gray-200 rounded-full z-20"></div>
            
            <div class="flex-1 mx-4 mt-7 mb-2 flex flex-col gap-2">
              
              <!-- Day 1 Block (8 Items) -->
              <div class="flex flex-col">
                <div class="border-b border-black pb-0.5 mb-1">
                  <h2 class="text-[10px] font-bold text-black uppercase">Friday, Feb 6</h2>
                </div>
                <div class="flex flex-col gap-[3px]">
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">09:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Registration & Welcome Kit</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">Lobby A</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">10:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Opening Keynote: Future Tech</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">Main</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">11:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Scaling Product Teams Globally</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">R101</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">12:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Networking Lunch & Connect</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">Hall</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">01:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Design Systems Workshop Lab</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">R202</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">02:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Executive Leadership Panel Talk</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">Main</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">03:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Afternoon Coffee & Networking</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">Bar</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">04:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Rooftop Social Mixer Event</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">Roof</span>
                   </div>
                </div>
              </div>

              <!-- Day 2 Block (8 Items) -->
              <div class="flex flex-col">
                <div class="border-b border-black pb-0.5 mb-1">
                  <h2 class="text-[10px] font-bold text-black uppercase">Saturday, Feb 7</h2>
                </div>
                <div class="flex flex-col gap-[3px]">
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">09:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Morning Wellness Yoga Session</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">Lawn</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">10:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Product Strategy Deep Dive</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">R104</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">11:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">UX Trends For 2026</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">R105</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">12:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Partner Showcase & Lunch</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">Hall</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">01:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Live Coding Demo Lab</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">Lab</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">02:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Sponsor Technology Showcase</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">Stage</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">03:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Community Awards Ceremony</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">Main</span>
                   </div>
                   <div class="flex gap-1.5 items-baseline border-b border-gray-100 pb-[1px]">
                     <span class="w-7 shrink-0 text-[8px] font-bold text-black whitespace-nowrap">04:00</span>
                     <span class="flex-1 text-[8px] text-black truncate">Closing Remarks & Farewell</span>
                     <span class="text-[7px] text-gray-500 truncate w-10 text-right">Exit</span>
                   </div>
                </div>
              </div>

            </div>
          </div>
          <div class="text-center">
             <h4 class="font-bold text-red-700">Extreme</h4>
             <p class="text-xs text-red-600 font-bold">16 Sessions (2 Days) • Wall of Text</p>
          </div>
        </div>

      </div>
    </div>
  `
})
export class SlideVisuals4x6Component {}