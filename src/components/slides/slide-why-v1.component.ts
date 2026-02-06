import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-why-v1',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div class="mb-12 text-center md:text-left">
        <h2 class="text-[#3B5BDB] font-semibold uppercase tracking-wider text-sm mb-3">Strategic Summary</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-[#1F2937]">Why This Is the Right V1 Decision</h3>
        <p class="text-[#6B7280] mt-4 max-w-3xl text-lg">
          A focused, constraint-aware execution that balances user needs with technical reality.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Card 1: Value -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm hover:border-[#3B5BDB] transition-colors group">
          <div class="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
             <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h4 class="text-xl font-bold text-[#1F2937] mb-2">Delivers Clear Attendee Value</h4>
          <p class="text-[#6B7280] text-sm leading-relaxed">
            Solves the primary "Where do I go next?" problem without clutter or confusion, respecting the user's cognitive load in a busy environment.
          </p>
        </div>

        <!-- Card 2: Reality -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm hover:border-[#3B5BDB] transition-colors group">
          <div class="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
             <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </div>
          <h4 class="text-xl font-bold text-[#1F2937] mb-2">Respects Physical Reality</h4>
          <p class="text-[#6B7280] text-sm leading-relaxed">
            Acknowledges hardware margins, slot punches, and print resolution limits. It doesn't promise a web-like layout on a piece of paper.
          </p>
        </div>

        <!-- Card 3: Scope -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm hover:border-[#3B5BDB] transition-colors group">
          <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
             <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
          </div>
          <h4 class="text-xl font-bold text-[#1F2937] mb-2">Avoids Scope Creep</h4>
          <p class="text-[#6B7280] text-sm leading-relaxed">
            By setting strict "What it is Not" boundaries, we prevent the badge from becoming a poor replacement for the mobile app.
          </p>
        </div>

        <!-- Card 4: Efficiency -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm hover:border-[#3B5BDB] transition-colors group">
          <div class="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
             <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h4 class="text-xl font-bold text-[#1F2937] mb-2">Operational Efficiency</h4>
          <p class="text-[#6B7280] text-sm leading-relaxed">
            Empowers attendees to self-navigate immediately. This directly reduces the queue volume at Info Desks answering 'Where do I go?' questions.
          </p>
        </div>

        <!-- Card 5: Monetization (UPDATED) -->
        <div class="bg-white p-6 rounded-[14px] border border-[#E5E7EB] shadow-sm hover:border-[#3B5BDB] transition-colors group">
          <div class="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
             <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h4 class="text-xl font-bold text-[#1F2937] mb-2">Monetization Opportunity</h4>
          <p class="text-[#6B7280] text-sm leading-relaxed">
            Variable data printing slows down check-in throughput. To offset this operational 'cost,' this capability will be gated as a <strong>Premium Tier</strong> upgrade, driving upsell revenue.
          </p>
        </div>

        <!-- Conclusion Box -->
        <div class="bg-gradient-to-br from-[#3B5BDB] to-[#2563EB] p-6 rounded-[14px] shadow-lg flex flex-col justify-center text-white">
           <h4 class="text-xl font-bold mb-2">Ready for Execution</h4>
           <p class="text-blue-100 text-sm leading-relaxed mb-4">
             The framework is complete. The rules are defined. The value is clear.
           </p>
           <div class="mt-auto">
             <span class="inline-flex items-center px-3 py-1 rounded bg-white/20 text-white text-xs font-bold uppercase border border-white/30 backdrop-blur-sm">
                Approved Strategy
             </span>
           </div>
        </div>

      </div>

    </div>
  `
})
export class SlideWhyV1Component {}