import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-conclusion',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-12 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Data Selection Strategy</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Session Information Shown on the Badge — and Why</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          We prioritize the specific data points that facilitate rapid orientation, preserving white space to guarantee legibility.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        <!-- Field 1: Start Time -->
        <div class="bg-white p-8 rounded-[14px] border border-[#E5E7EB] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-[#3B5BDB] transition-colors">
          <div class="flex items-start justify-between mb-6">
            <div class="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wide">Primary Anchor</span>
          </div>
          
          <h4 class="text-2xl font-bold text-[#1F2937] mb-4">Start Time <span class="text-gray-400 font-normal text-lg">(+ Time Zone)</span></h4>
          
          <ul class="space-y-4 text-[#4B5563]">
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span><strong>Essential for Orientation:</strong> Acts as the absolute sorting mechanism for a user in motion.</span>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span><strong>Supports Glanceability:</strong> Provides instant context ("Am I late?") with minimal cognitive load.</span>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span><strong>High Value-to-Space Ratio:</strong> Delivers critical utility while consuming less than 15% of the line width.</span>
            </li>
          </ul>
        </div>

        <!-- Field 2: Session Title -->
        <div class="bg-white p-8 rounded-[14px] border border-[#E5E7EB] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-[#3B5BDB] transition-colors">
          <div class="flex items-start justify-between mb-6">
            <div class="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wide">Confirmation</span>
          </div>
          
          <h4 class="text-2xl font-bold text-[#1F2937] mb-4">Session Title</h4>
          
          <ul class="space-y-4 text-[#4B5563]">
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span><strong>Essential for Verification:</strong> The only field required to confirm "This is the session I selected."</span>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span><strong>Supports Glanceability:</strong> Users recognize key topics and patterns instantly without reading every word.</span>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span><strong>High Value-to-Space Ratio:</strong> Justifies the use of bold weight and larger font size for maximum readability.</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Exclusion Note -->
      <div class="bg-gray-50 border-l-4 border-[#9CA3AF] p-6 rounded-r-lg flex items-center gap-6">
        <div class="hidden md:block p-3 bg-white rounded-full shadow-sm text-gray-500">
           <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div>
           <p class="text-[#4B5563] text-lg leading-relaxed font-medium">
             Other session metadata (duration, speakers, track type, room number) is intentionally excluded to preserve readability and scanning speed, and remains available in the app.
           </p>
        </div>
      </div>

    </div>
  `
})
export class SlideConclusionComponent {}