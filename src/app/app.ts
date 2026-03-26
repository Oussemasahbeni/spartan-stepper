import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StepperBasicExampleComponent } from './examples/stepper-basic-example';
import { StepperErrorExampleComponent } from './examples/stepper-error-example';
import { StepperIndicatorsExampleComponent } from './examples/stepper-indicators-example';
import { StepperLayoutExampleComponent } from './examples/stepper-layout-example';
import { StepperLazyContentExampleComponent } from './examples/stepper-lazy-content-example';
import { StepperResponsiveExampleComponent } from './examples/stepper-responsive-example';
import { StepperRtlExampleComponent } from './examples/stepper-rtl-example';
import { StepperStatesExampleComponent } from './examples/stepper-states-example';
import { StepperValidationExampleComponent } from './examples/stepper-validation-example';
import { StepperVerticalExampleComponent } from './examples/stepper-vertical-example';
import { SiteHeader } from './layout/site-header';

@Component({
  selector: 'app-root',
  imports: [
    StepperBasicExampleComponent,
    StepperErrorExampleComponent,
    StepperLayoutExampleComponent,
    StepperIndicatorsExampleComponent,
    StepperRtlExampleComponent,
    StepperResponsiveExampleComponent,
    StepperStatesExampleComponent,
    StepperValidationExampleComponent,
    StepperLazyContentExampleComponent,
    StepperVerticalExampleComponent,
    SiteHeader,
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
