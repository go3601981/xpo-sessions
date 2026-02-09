import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-orientation',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <div class="mb-10">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Hardware Compatibility</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Orientation Controls: Flip Capability</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          Attendees manipulate badges differently. We provide design controls to accommodate lanyard flipping.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <!-- Controls -->
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm">
             <div class="flex items-start gap-4">
               <div class="p-2 bg-indigo-50 text-indigo-600 rounded">
                 <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
               </div>
               <div>
                 <h4 class="text-lg font-bold text-[#1F2937] mb-2">Invert Schedule</h4>
                 <p class="text-sm text-[#6B7280]">
                   Organizers can toggle <strong>"Flip Orientation"</strong> in the widget settings. This prints the schedule upside-down relative to the attendee name, allowing the user to lift and read the badge without twisting the lanyard.
                 </p>
               </div>
             </div>
          </div>

          <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm">
             <div class="flex items-start gap-4">
               <div class="p-2 bg-green-50 text-green-600 rounded">
                 <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
               </div>
               <div>
                 <h4 class="text-lg font-bold text-[#1F2937] mb-2">WYSIWYG Compliance</h4>
                 <p class="text-sm text-[#6B7280]">
                   Rotation must respect safety margins. The Editor Preview will accurately reflect the chosen orientation to prevent printing into the punch slot area.
                 </p>
               </div>
             </div>
          </div>
        </div>

        <!-- Visual Aid -->
        <div class="flex justify-center gap-8 bg-gray-50 p-8 rounded-xl border border-gray-200">
           <!-- Normal -->
           <div class="flex flex-col items-center gap-3">
              <div class="w-32 h-48 bg-white border border-gray-300 shadow flex flex-col relative overflow-hidden">
                 <!-- Punch slot area -->
                 <div class="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-200 rounded-full"></div>
                 
                 <!-- Dummy Content -->
                 <div class="mt-8 px-3 space-y-2">
                    <div class="border-b border-gray-100 pb-1">
                      <div class="flex justify-between text-[6px] font-bold text-gray-800">
                        <span>9:00 AM</span>
                        <span>Keynote</span>
                      </div>
                      <div class="text-[5px] text-gray-500">Main Stage</div>
                    </div>
                    <div class="border-b border-gray-100 pb-1">
                      <div class="flex justify-between text-[6px] font-bold text-gray-800">
                        <span>10:30 AM</span>
                        <span>Breakout</span>
                      </div>
                      <div class="text-[5px] text-gray-500">Room 101</div>
                    </div>
                    <div>
                      <div class="flex justify-between text-[6px] font-bold text-gray-800">
                        <span>12:00 PM</span>
                        <span>Lunch</span>
                      </div>
                      <div class="text-[5px] text-gray-500">Hall B</div>
                    </div>
                 </div>
              </div>
              <span class="text-xs font-bold text-gray-500 uppercase">Standard</span>
           </div>

           <!-- Inverted -->
           <div class="flex flex-col items-center gap-3">
              <div class="w-32 h-48 bg-white border border-gray-300 shadow flex flex-col relative overflow-hidden">
                 <!-- Punch slot area (Visual reference, physically at bottom in this view but conceptually top of badge) -->
                 <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-200 rounded-full"></div>
                 
                 <!-- Dummy Content (Rotated 180) -->
                 <div class="absolute inset-0 flex flex-col justify-end pb-8 px-3 rotate-180">
                    <div class="space-y-2">
                        <div class="border-b border-gray-100 pb-1">
                          <div class="flex justify-between text-[6px] font-bold text-gray-800">
                            <span>9:00 AM</span>
                            <span>Keynote</span>
                          </div>
                          <div class="text-[5px] text-gray-500">Main Stage</div>
                        </div>
                        <div class="border-b border-gray-100 pb-1">
                          <div class="flex justify-between text-[6px] font-bold text-gray-800">
                            <span>10:30 AM</span>
                            <span>Breakout</span>
                          </div>
                          <div class="text-[5px] text-gray-500">Room 101</div>
                        </div>
                        <div>
                          <div class="flex justify-between text-[6px] font-bold text-gray-800">
                            <span>12:00 PM</span>
                            <span>Lunch</span>
                          </div>
                          <div class="text-[5px] text-gray-500">Hall B</div>
                        </div>
                    </div>
                 </div>
              </div>
              <span class="text-xs font-bold text-gray-500 uppercase">Inverted (Flip)</span>
           </div>
        </div>

      </div>
    </div>
  `
})
export class SlideOrientationComponent {}