import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-visuals-4x3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-full flex flex-col justify-center max-w-[90rem] mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-8 text-center">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-2">Visual Verification</h2>
        <h3 class="text-3xl font-bold text-[#1F2937]">4″ × 3″ Badge Layouts (Schedule Only)</h3>
        <p class="text-[#6B7280] mt-2">Maximized for data density. Branding and attendee details removed to prioritize wayfinding.</p>
      </div>

      <!-- Badge Container Grid -->
      <div class="flex justify-center items-start gap-8">

        <!-- BADGE 1: COMFORTABLE (4 Sessions) -->
        <div class="flex flex-col items-center gap-4">
          <div class="relative bg-white rounded shadow-lg border border-gray-300 overflow-hidden flex flex-col" style="width: 320px; height: 240px;">
            <!-- Punch Slot -->
            <div class="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-200 rounded-full z-20"></div>
            
            <!-- Safe Area Margin (Start content lower to clear slot) -->
            <div class="flex-1 mx-4 mt-8 mb-4 flex flex-col">
              
              <!-- Day Header -->
              <div class="border-b-2 border-black pb-1 mb-2">
                <h2 class="text-lg font-bold text-black uppercase tracking-tight">Friday, Feb 6</h2>
              </div>

              <!-- Schedule List (Comfortable spacing) -->
              <div class="flex-1 flex flex-col justify-between">
                 <!-- Item 1 -->
                 <div class="flex gap-3">
                   <div class="w-16 shrink-0 text-sm font-bold text-black whitespace-nowrap">9:00 AM</div>
                   <div class="flex-1 min-w-0">
                     <div class="text-sm font-bold text-black leading-tight truncate">Opening Keynote</div>
                     <div class="text-xs text-gray-600 truncate">Main Stage</div>
                   </div>
                 </div>

                 <!-- Item 2 -->
                 <div class="flex gap-3">
                   <div class="w-16 shrink-0 text-sm font-bold text-black whitespace-nowrap">10:30 AM</div>
                   <div class="flex-1 min-w-0">
                     <div class="text-sm font-bold text-black leading-tight truncate">Product Roadmap</div>
                     <div class="text-xs text-gray-600 truncate">Room 101</div>
                   </div>
                 </div>

                 <!-- Item 3 -->
                 <div class="flex gap-3">
                   <div class="w-16 shrink-0 text-sm font-bold text-black whitespace-nowrap">12:00 PM</div>
                   <div class="flex-1 min-w-0">
                     <div class="text-sm font-bold text-black leading-tight truncate">Lunch & Learn</div>
                     <div class="text-xs text-gray-600 truncate">Grand Hall</div>
                   </div>
                 </div>

                 <!-- Item 4 -->
                 <div class="flex gap-3">
                   <div class="w-16 shrink-0 text-sm font-bold text-black whitespace-nowrap">1:30 PM</div>
                   <div class="flex-1 min-w-0">
                     <div class="text-sm font-bold text-black leading-tight truncate">Design Systems</div>
                     <div class="text-xs text-gray-600 truncate">Room 204</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
          <div class="text-center">
             <h4 class="font-bold text-gray-900">Comfortable</h4>
             <p class="text-xs text-gray-500">4 Sessions • 11pt Type</p>
          </div>
        </div>


        <!-- BADGE 2: COMPACT (5 Sessions - Adjusted to fit) -->
        <div class="flex flex-col items-center gap-4">
          <div class="relative bg-white rounded shadow-lg border border-gray-300 overflow-hidden flex flex-col" style="width: 320px; height: 240px;">
            <div class="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-200 rounded-full z-20"></div>
            
            <div class="flex-1 mx-4 mt-8 mb-3 flex flex-col">
              
              <!-- Day Header -->
              <div class="border-b border-black pb-1 mb-1.5">
                <h2 class="text-base font-bold text-black uppercase tracking-tight">Friday, Feb 6</h2>
              </div>

              <!-- Schedule List (Compact spacing) -->
              <div class="flex-1 flex flex-col justify-start gap-1.5">
                 
                 <div class="flex gap-2 items-baseline">
                   <div class="w-14 shrink-0 text-xs font-bold text-black whitespace-nowrap">9:00 AM</div>
                   <div class="flex-1 min-w-0 overflow-hidden">
                     <div class="text-xs font-bold text-black truncate">Opening Keynote</div>
                     <div class="text-[10px] text-gray-600 truncate">Main Stage</div>
                   </div>
                 </div>
                 
                 <div class="flex gap-2 items-baseline">
                   <div class="w-14 shrink-0 text-xs font-bold text-black whitespace-nowrap">10:00 AM</div>
                   <div class="flex-1 min-w-0 overflow-hidden">
                     <div class="text-xs font-bold text-black truncate">Product Strategy</div>
                     <div class="text-[10px] text-gray-600 truncate">Room 101</div>
                   </div>
                 </div>

                 <div class="flex gap-2 items-baseline">
                   <div class="w-14 shrink-0 text-xs font-bold text-black whitespace-nowrap">11:00 AM</div>
                   <div class="flex-1 min-w-0 overflow-hidden">
                     <div class="text-xs font-bold text-black truncate">Networking Break</div>
                     <div class="text-[10px] text-gray-600 truncate">Lobby</div>
                   </div>
                 </div>

                 <div class="flex gap-2 items-baseline">
                   <div class="w-14 shrink-0 text-xs font-bold text-black whitespace-nowrap">12:00 PM</div>
                   <div class="flex-1 min-w-0 overflow-hidden">
                     <div class="text-xs font-bold text-black truncate">Executive Lunch</div>
                     <div class="text-[10px] text-gray-600 truncate">Ballroom B</div>
                   </div>
                 </div>

                 <div class="flex gap-2 items-baseline">
                   <div class="w-14 shrink-0 text-xs font-bold text-black whitespace-nowrap">1:30 PM</div>
                   <div class="flex-1 min-w-0 overflow-hidden">
                     <div class="text-xs font-bold text-black truncate">Engineering Sync</div>
                     <div class="text-[10px] text-gray-600 truncate">Room 205</div>
                   </div>
                 </div>
                 
                 <!-- Item 6 Removed because it was cut in half -->

              </div>
            </div>
          </div>
          <div class="text-center">
             <h4 class="font-bold text-gray-900">Compact</h4>
             <p class="text-xs text-gray-500">5 Sessions • 10pt Type</p>
          </div>
        </div>


        <!-- BADGE 3: EXTREME (10 Sessions - Single Column) -->
        <div class="flex flex-col items-center gap-4">
          <div class="relative bg-white rounded shadow-lg border border-gray-300 overflow-hidden flex flex-col" style="width: 320px; height: 240px;">
            <div class="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-200 rounded-full z-20"></div>
            
            <div class="flex-1 mx-3 mt-7 mb-2 flex flex-col">
              
              <!-- Single Column List -->
              <div class="flex flex-col h-full">
                
                <!-- Day 1 -->
                <div class="mb-1">
                  <div class="border-b border-black pb-0.5 mb-0.5">
                    <h2 class="text-[9px] font-bold text-black uppercase">Fri, Feb 6</h2>
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <div class="flex gap-2 items-baseline"><span class="text-[9px] font-bold text-black whitespace-nowrap w-8">9:00</span> <span class="text-[9px] text-black truncate flex-1">Opening Keynote Address</span> <span class="text-[8px] text-gray-500 w-6 text-right">Main</span></div>
                    <div class="flex gap-2 items-baseline"><span class="text-[9px] font-bold text-black whitespace-nowrap w-8">10:00</span> <span class="text-[9px] text-black truncate flex-1">Product Strategy Roadmap</span> <span class="text-[8px] text-gray-500 w-6 text-right">R101</span></div>
                    <div class="flex gap-2 items-baseline"><span class="text-[9px] font-bold text-black whitespace-nowrap w-8">11:00</span> <span class="text-[9px] text-black truncate flex-1">UX Design Systems</span> <span class="text-[8px] text-gray-500 w-6 text-right">R105</span></div>
                    <div class="flex gap-2 items-baseline"><span class="text-[9px] font-bold text-black whitespace-nowrap w-8">12:00</span> <span class="text-[9px] text-black truncate flex-1">Networking Lunch Break</span> <span class="text-[8px] text-gray-500 w-6 text-right">Hall</span></div>
                    <div class="flex gap-2 items-baseline"><span class="text-[9px] font-bold text-black whitespace-nowrap w-8">1:00</span> <span class="text-[9px] text-black truncate flex-1">Global Sales Kickoff</span> <span class="text-[8px] text-gray-500 w-6 text-right">R202</span></div>
                  </div>
                </div>

                <!-- Day 2 -->
                <div>
                  <div class="border-b border-black pb-0.5 mb-0.5">
                    <h2 class="text-[9px] font-bold text-black uppercase">Sat, Feb 7</h2>
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <div class="flex gap-2 items-baseline"><span class="text-[9px] font-bold text-black whitespace-nowrap w-8">9:00</span> <span class="text-[9px] text-black truncate flex-1">Morning Coffee & Bagels</span> <span class="text-[8px] text-gray-500 w-6 text-right">Cafe</span></div>
                    <div class="flex gap-2 items-baseline"><span class="text-[9px] font-bold text-black whitespace-nowrap w-8">10:00</span> <span class="text-[9px] text-black truncate flex-1">Interactive Workshop Lab</span> <span class="text-[8px] text-gray-500 w-6 text-right">R204</span></div>
                    <div class="flex gap-2 items-baseline"><span class="text-[9px] font-bold text-black whitespace-nowrap w-8">11:00</span> <span class="text-[9px] text-black truncate flex-1">Live Coding Session</span> <span class="text-[8px] text-gray-500 w-6 text-right">Lab</span></div>
                    <div class="flex gap-2 items-baseline"><span class="text-[9px] font-bold text-black whitespace-nowrap w-8">12:00</span> <span class="text-[9px] text-black truncate flex-1">Partner Showcase Lunch</span> <span class="text-[8px] text-gray-500 w-6 text-right">Hall</span></div>
                    <div class="flex gap-2 items-baseline"><span class="text-[9px] font-bold text-black whitespace-nowrap w-8">1:00</span> <span class="text-[9px] text-black truncate flex-1">Closing Leadership Panel</span> <span class="text-[8px] text-gray-500 w-6 text-right">Main</span></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="text-center">
             <h4 class="font-bold text-gray-900">Extreme</h4>
             <p class="text-xs text-gray-500">10 Sessions (2 Days) • Single Column</p>
          </div>
        </div>

      </div>
    </div>
  `
})
export class SlideVisuals4x3Component {}