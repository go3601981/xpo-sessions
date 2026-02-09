import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-implementation',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <div class="mb-8">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Workflow</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Implementation Direction</h3>
        <p class="text-[#6B7280] mt-2 text-lg">
          The Organizer experience within the Badge Editor.
        </p>
      </div>

      <div class="relative pl-8 border-l-2 border-gray-200 space-y-10">
        
        <!-- Step 1 -->
        <div class="relative">
          <div class="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
          <h4 class="text-xl font-bold text-[#1F2937] mb-2">Drag & Drop Widget</h4>
          <p class="text-gray-600 max-w-2xl">
            Organizer drags the "Session List" widget onto the badge canvas (back side). The widget snaps to safe margins automatically.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="relative">
          <div class="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
          <h4 class="text-xl font-bold text-[#1F2937] mb-2">Configuration</h4>
          <p class="text-gray-600 max-w-2xl">
            Organizer selects Density Preset (A, B, or Extreme), toggles "Flip Orientation," and sets optional filtering rules (e.g., "Hide Meals").
          </p>
        </div>

        <!-- Step 3 -->
        <div class="relative">
          <div class="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
          <h4 class="text-xl font-bold text-[#1F2937] mb-2">Live Preview & Overflow</h4>
          <p class="text-gray-600 max-w-2xl">
            The editor shows a WYSIWYG preview using dummy data or real session data. Overflow is visualized immediately—if content exceeds the box, it shows the "See App for More" footer.
          </p>
        </div>

      </div>

    </div>
  `
})
export class SlideImplementationComponent {}