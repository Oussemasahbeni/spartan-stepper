import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmButtonImports } from '../libs/button/src';
import { HlmStepperImports } from '../stepper';

@Component({
  selector: 'docs-stepper-states-example',
  imports: [HlmStepperImports, HlmButtonImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <hlm-stepper indicatorMode="state">
      <hlm-step label="Completed" [completed]="true">
        <div class="flex flex-col gap-4">
          <div
            class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
          >
            <p class="max-w-sm text-center text-sm text-muted-foreground">
              Completed steps render the state indicator and remain navigable in non-linear mode.
            </p>
          </div>

          <div class="flex justify-end">
            <button hlmBtn hlmStepperNext>Next</button>
          </div>
        </div>
      </hlm-step>

      <hlm-step label="Optional" optional>
        <div class="flex flex-col gap-4">
          <div
            class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
          >
            <p class="max-w-sm text-center text-sm text-muted-foreground">
              Optional steps show supporting metadata in the header without changing the navigation
              API.
            </p>
          </div>

          <div class="flex justify-between gap-2">
            <button hlmBtn variant="outline" hlmStepperPrevious>Back</button>
            <button hlmBtn hlmStepperNext>Next</button>
          </div>
        </div>
      </hlm-step>

      <hlm-step [editable]="false">
        <ng-template hlmStepLabel>Locked After Complete</ng-template>

        <div class="flex flex-col gap-4">
          <div
            class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
          >
            <p class="max-w-sm text-center text-sm text-muted-foreground">
              This step uses <code class="font-mono text-foreground">editable="false"</code> to
              mirror the Angular Material behavior for finalized steps.
            </p>
          </div>

          <div class="flex justify-between gap-2">
            <button hlmBtn variant="outline" hlmStepperPrevious>Back</button>
            <button hlmBtn>Finish</button>
          </div>
        </div>
      </hlm-step>
    </hlm-stepper>
  `,
})
export class StepperStatesExampleComponent {}
