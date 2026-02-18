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
  templateUrl: './app.component.html'
})
export class AppComponent {
  presentation = inject(PresentationService);
}