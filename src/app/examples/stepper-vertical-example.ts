import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmButtonImports } from '../libs/button/src';
import { HlmStepperImports } from '../stepper';

@Component({
  selector: 'docs-stepper-vertical-example',
  imports: [HlmStepperImports, HlmButtonImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <hlm-stepper orientation="vertical">
      <hlm-step label="Campaign">
        <div class="flex flex-col gap-4">
          <div
            class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
          >
            <p class="max-w-sm text-center text-sm text-muted-foreground">
              Use the vertical orientation when content is dense or the available horizontal space
              is limited.
            </p>
          </div>

          <div class="flex justify-end">
            <button hlmBtn hlmStepperNext>Next</button>
          </div>
        </div>
      </hlm-step>

      <hlm-step label="Audience">
        <div class="flex flex-col gap-4">
          <div
            class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
          >
            <p class="max-w-sm text-center text-sm text-muted-foreground">
              Vertical steppers keep each header aligned with its content panel and are easier to
              scan on narrow layouts.
            </p>
          </div>

          <div class="flex justify-between gap-2">
            <button hlmBtn variant="outline" hlmStepperPrevious>Back</button>
            <button hlmBtn hlmStepperNext>Next</button>
          </div>
        </div>
      </hlm-step>

      <hlm-step label="Review">
        <div class="flex flex-col gap-4">
          <div
            class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
          >
            <p class="max-w-sm text-center text-sm text-muted-foreground">
              Keep the rest of the docs horizontal, and reserve vertical orientation for flows that
              need the extra room.
            </p>
          </div>

          <div class="flex justify-between gap-2">
            <button hlmBtn variant="outline" hlmStepperPrevious>Back</button>
            <button hlmBtn>Publish</button>
          </div>
        </div>
      </hlm-step>
    </hlm-stepper>
  `,
})
export class StepperVerticalExampleComponent {}
