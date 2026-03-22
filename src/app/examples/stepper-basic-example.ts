import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmButtonImports } from '../libs/button/src';
import { HlmStepperImports } from '../stepper';

@Component({
  selector: 'docs-stepper-basic-example',
  imports: [HlmStepperImports, HlmButtonImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <hlm-stepper>
      <hlm-step label="Step One">
        <div class="flex flex-col gap-4">
          <div
            class="rounded-lg border-2 border-dashed  font-medium text-muted-foreground h-48 flex items-center justify-center text-lg"
          >
            Content 1
          </div>
          <div class="flex justify-end">
            <button hlmBtn hlmStepperNext>Next</button>
          </div>
        </div>
      </hlm-step>

      <hlm-step label="Step Two">
        <div class="flex flex-col gap-4 ">
          <div
            class="rounded-lg border-2 border-dashed  font-medium text-muted-foreground h-48 flex items-center justify-center text-lg"
          >
            Content 2
          </div>
          <div class="flex justify-between gap-2">
            <button hlmBtn variant="outline" hlmStepperPrevious>Back</button>
            <button hlmBtn hlmStepperNext>Next</button>
          </div>
        </div>
      </hlm-step>

      <hlm-step label="Step Three">
        <div class="flex flex-col gap-4">
          <div
            class="rounded-lg border-2 border-dashed  font-medium text-muted-foreground h-48 flex items-center justify-center text-lg"
          >
            Content 3
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
export class StepperBasicExampleComponent {}
