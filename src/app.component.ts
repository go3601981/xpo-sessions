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
    SlideConclusionComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  presentation = inject(PresentationService);
}