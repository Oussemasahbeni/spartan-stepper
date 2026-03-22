import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HlmButtonImports } from '../libs/button/src';
import { HlmHeaderPosition, HlmLabelPosition, HlmStepperImports } from '../stepper';

@Component({
  selector: 'docs-stepper-layout-example',
  imports: [HlmStepperImports, HlmButtonImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mb-4 flex flex-wrap items-center gap-2">
      <button
        hlmBtn
        variant="outline"
        size="sm"
        (click)="labelPosition.update(v => v === 'end' ? 'bottom' : 'end')"
      >
        Label Position: {{ labelPosition() }}
      </button>

      <button
        hlmBtn
        variant="outline"
        size="sm"
        (click)="headerPosition.update(v => v === 'top' ? 'bottom' : 'top')"
      >
        Header Position: {{ headerPosition() }}
      </button>
    </div>

    <hlm-stepper [labelPosition]="labelPosition()" [headerPosition]="headerPosition()">
      <hlm-step label="Overview">
        <div class="flex flex-col gap-4">
          <div
            class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
          >
            <p class="max-w-sm text-center text-sm text-muted-foreground">
              This example focuses on the horizontal layout controls:
              <code class="font-mono text-foreground">labelPosition</code> and
              <code class="font-mono text-foreground">headerPosition</code>.
            </p>
          </div>
          <div class="flex justify-end">
            <button hlmBtn hlmStepperNext>Next</button>
          </div>
        </div>
      </hlm-step>

      <hlm-step label="Preferences" optional>
        <div class="flex flex-col gap-4">
          <div
            class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
          >
            <p class="max-w-sm text-center text-sm text-muted-foreground">
              Horizontal headers can move above or below the content panel, and labels can sit
              beside the indicator or below it.
            </p>
          </div>
          <div class="flex justify-between gap-2">
            <button hlmBtn variant="outline" hlmStepperPrevious>Back</button>
            <button hlmBtn hlmStepperNext>Next</button>
          </div>
        </div>
      </hlm-step>

      <hlm-step label="Done">
        <div class="flex flex-col gap-4">
          <div
            class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
          >
            <p class="max-w-sm text-center text-sm text-muted-foreground">
              The layout options can be used in combination to create a variety of stepper designs
              to fit your application's needs.
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
export class StepperLayoutExampleComponent {
  protected readonly labelPosition = signal<HlmLabelPosition>('end');
  protected readonly headerPosition = signal<HlmHeaderPosition>('top');
}
