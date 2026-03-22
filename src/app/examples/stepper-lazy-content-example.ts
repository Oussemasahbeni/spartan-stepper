import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmButtonImports } from '../libs/button/src';
import { HlmStepperImports } from '../stepper';

@Component({
  selector: 'docs-stepper-lazy-content-example',
  imports: [HlmStepperImports, HlmButtonImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <hlm-stepper>
      <hlm-step label="Overview">
        <div class="flex flex-col gap-4">
          <div
            class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
          >
            <p class="max-w-sm text-center text-sm text-muted-foreground">
              The first step renders immediately. Later steps use
              <code class="font-mono text-foreground">hlmStepContent</code> so their bodies are
              attached lazily.
            </p>
          </div>

          <div class="flex justify-end">
            <button hlmBtn hlmStepperNext>Inspect lazy content</button>
          </div>
        </div>
      </hlm-step>

      <hlm-step label="Analytics">
        <ng-template hlmStepContent>
          <div
            class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
          >
            Lazy analytics content
          </div>

          <div class="mt-4 flex justify-between gap-2">
            <button hlmBtn variant="outline" hlmStepperPrevious>Back</button>
            <button hlmBtn hlmStepperNext>Next</button>
          </div>
        </ng-template>
      </hlm-step>

      <hlm-step label="Summary">
        <ng-template hlmStepContent>
          <div class="flex flex-col gap-4">
            <div
              class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
            >
              <p class="max-w-sm text-center text-sm text-muted-foreground">
                Lazy steps keep the initial render lighter while preserving the same stepper API.
              </p>
            </div>

            <div class="flex justify-between gap-2">
              <button hlmBtn variant="outline" hlmStepperPrevious>Back</button>
              <button hlmBtn>Done</button>
            </div>
          </div>
        </ng-template>
      </hlm-step>
    </hlm-stepper>
  `,
})
export class StepperLazyContentExampleComponent {}
