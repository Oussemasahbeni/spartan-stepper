import { CdkStepHeader, StepState } from '@angular/cdk/stepper';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCircleAlert, lucidePencil } from '@ng-icons/lucide';
import { ButtonVariants, HlmButtonImports } from '../libs/button/src';
import { HlmIconImports } from '../libs/icon/src';
import { HlmStepLabel } from './step-label';
import { HlmLabelPosition } from './stepper';

export type HlmStepperIndicatorMode = 'number' | 'state' | 'icon';

@Component({
  selector: 'hlm-step-header',
  imports: [NgTemplateOutlet, HlmIconImports, HlmButtonImports],
  providers: [provideIcons({ lucideCheck, lucideCircleAlert, lucidePencil })],
  template: `
    <button hlmBtn size="icon-sm" class="rounded-full" [variant]="buttonVariant()">
      @if (iconName(); as icon) {
        <ng-icon hlm [name]="icon" size="sm" />
      } @else {
        <span aria-hidden="true">{{ index() + 1 }}</span>
      }
    </button>

    <span
      class="flex min-w-0 flex-col truncate text-sm font-medium"
      [class.text-destructive]="state() === 'error'"
    >
      @if (templateLabel(); as templateLabel) {
        <ng-container [ngTemplateOutlet]="templateLabel.template" />
      } @else if (stringLabel(); as stringLabel) {
        {{ stringLabel }}
      } @else {
        Step {{ index() + 1 }}
      }

      @if (showOptionalLabel()) {
        <span class="text-muted-foreground text-xs">Optional</span>
      }

      @if (showErrorLabel()) {
        <span class="text-destructive text-xs">{{ errorMessage() }}</span>
      }
    </span>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'group inline-flex shrink-0  outline-none items-center gap-2 transition-opacity data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
    '[class.flex-col]': 'labelPosition() === "bottom"',
    '[class.text-center]': 'labelPosition() === "bottom"',
    '[attr.data-disabled]': 'disabled() ? "true" : null',
  },
})
export class HlmStepHeader extends CdkStepHeader {
  readonly state = input<StepState>('number');
  readonly label = input<HlmStepLabel | string | null>(null);
  readonly errorMessage = input('');
  readonly index = input(0);
  readonly selected = input(false);
  readonly reached = input(false);
  readonly active = input(false);
  readonly optional = input(false);
  readonly disabled = input(false);
  readonly icon = input<string | null>(null);
  readonly indicatorMode = input<HlmStepperIndicatorMode>('state');
  readonly labelPosition = input<HlmLabelPosition>('end');

  protected readonly stringLabel = computed(() => {
    const label = this.label();
    return typeof label === 'string' ? label : null;
  });

  readonly templateLabel = computed(() => {
    const label = this.label();
    return label instanceof HlmStepLabel ? label : null;
  });

  readonly showOptionalLabel = computed(() => this.optional() && this.state() !== 'error');
  readonly showErrorLabel = computed(() => this.state() === 'error' && !!this.errorMessage());

  readonly buttonVariant = computed<ButtonVariants['variant']>(() => {
    if (this.state() === 'error') {
      return 'destructive';
    }

    if (this.selected() || this.reached()) {
      return 'default';
    }

    return 'outline';
  });

  readonly iconName = computed(() => {
    const state = this.state();
    const mode = this.indicatorMode();
    const showStateIcon = this.selected() || this.reached();

    if (mode === 'number') {
      return null;
    }

    if (state === 'error') {
      return 'lucideCircleAlert';
    }

    if (mode === 'state') {
      if (!showStateIcon) {
        return null;
      }

      return 'lucideCheck';

      // TODO: to be discussed: should we follow the same ui as material stepper and show a pencil icon for edit state?
      // if (state === 'done') return 'lucideCheck';
      // if (state === 'edit') return 'lucidePencil';
      return null;
    }

    return this.icon();
  });
}
