import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationService } from './services/presentation.service';
import { NavBarComponent } from './components/ui/nav-bar.component';
import { LogoComponent } from './components/ui/logo.component';
import { SlideTitleComponent } from './components/slides/slide-title.component';
import { SlideProblemComponent } from './components/slides/slide-problem.component';
import { SlideSolutionComponent } from './components/slides/slide-solution.component';
import { SlideMetricsComponent } from './components/slides/slide-metrics.component';
import { SlideLegibilityComponent } from './components/slides/slide-roadmap.component';
import { SlideRulesComponent } from './components/slides/slide-rules.component';
import { SlideDensityComponent } from './components/slides/slide-density.component';
import { SlideCriteriaComponent } from './components/slides/slide-criteria.component';
import { SlideConclusionComponent } from './components/slides/slide-conclusion.component';
import { SlideSessionCountsComponent } from './components/slides/slide-session-counts.component';
import { SlideWhyV1Component } from './components/slides/slide-why-v1.component';
import { SlideOrientationComponent } from './components/slides/slide-orientation.component';
import { SlideFilteringComponent } from './components/slides/slide-filtering.component';
import { SlideMultiDayComponent } from './components/slides/slide-multi-day.component';
import { SlideImplementationComponent } from './components/slides/slide-implementation.component';
import { SlideEdgeCasesComponent } from './components/slides/slide-edge-cases.component';
import { SlideVisuals4x3Component } from './components/slides/slide-visuals-4x3.component';
import { SlideVisuals4x6Component } from './components/slides/slide-visuals-4x6.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    LogoComponent,
    SlideTitleComponent,
    SlideProblemComponent,
    SlideSolutionComponent,
    SlideMetricsComponent,
    SlideLegibilityComponent,
    SlideRulesComponent,
    SlideDensityComponent,
    SlideCriteriaComponent,
    SlideConclusionComponent,
    SlideSessionCountsComponent,
    SlideWhyV1Component,
    SlideOrientationComponent,
    SlideFilteringComponent,
    SlideMultiDayComponent,
    SlideImplementationComponent,
    SlideEdgeCasesComponent,
    SlideVisuals4x3Component,
    SlideVisuals4x6Component
  ],
  template: `
    <app-logo />

    <main class="w-full h-screen bg-[#F8FAFC] overflow-hidden relative pb-20">
      
      <!-- Slide Container -->
      <!-- We use CSS transitions for opacity/transform based on active index -->
      
      @switch (presentation.currentSlideIndex()) {
        @case (0) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-title />
          </div>
        }
        @case (1) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-problem />
          </div>
        }
        @case (2) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-solution />
          </div>
        }
        @case (3) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-metrics />
          </div>
        }
        @case (4) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-orientation />
          </div>
        }
        @case (5) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-legibility />
          </div>
        }
        @case (6) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-rules />
          </div>
        }
        @case (7) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-filtering />
          </div>
        }
        @case (8) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-conclusion />
          </div>
        }
        @case (9) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-multi-day />
          </div>
        }
        @case (10) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-session-counts />
          </div>
        }
        @case (11) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-density />
          </div>
        }
        @case (12) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-criteria />
          </div>
        }
        @case (13) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-implementation />
          </div>
        }
        @case (14) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-edge-cases />
          </div>
        }
        @case (15) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-why-v1 />
          </div>
        }
        @case (16) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-visuals-4x3 />
          </div>
        }
        @case (17) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-visuals-4x6 />
          </div>
        }
      }

    </main>

    <app-nav-bar />
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class AppComponent {
  presentation = inject(PresentationService);
}