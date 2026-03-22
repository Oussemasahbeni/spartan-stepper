import { ChangeDetectionStrategy, Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideWorkflow } from '@ng-icons/lucide';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { ThemeSwitch } from './theme-switch';

@Component({
  selector: 'app-site-header',
  imports: [HlmSeparatorImports, HlmIconImports, ThemeSwitch],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideIcons({ lucideWorkflow })],
  template: `
    <header
      class="bg-background/95 sticky top-0 z-30 flex h-14 w-full shrink-0 items-center justify-between gap-4 border-b px-4 backdrop-blur md:px-6"
    >
      <div class="flex min-w-0 items-center gap-3">
        <a href="#top" class="flex min-w-0 items-center gap-3">
          <span
            class="bg-primary/10 text-primary inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20"
          >
            <ng-icon hlmIcon size="sm" name="lucideWorkflow" />
          </span>
          <div class="min-w-0">
            <p class="truncate text-sm font-semibold">Spartan Stepper</p>
          </div>
        </a>

        <hlm-separator
          orientation="vertical"
          class="hidden data-[orientation=vertical]:h-4 md:block"
        />

        <nav class="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
          <a
            class="rounded-md px-2 py-1 transition-colors hover:bg-muted hover:text-foreground"
            href="#installation"
          >
            Installation
          </a>
          <a
            class="rounded-md px-2 py-1 transition-colors hover:bg-muted hover:text-foreground"
            href="#usage"
          >
            Usage
          </a>
          <a
            class="rounded-md px-2 py-1 transition-colors hover:bg-muted hover:text-foreground"
            href="#examples"
          >
            Examples
          </a>
          <a
            class="rounded-md px-2 py-1 transition-colors hover:bg-muted hover:text-foreground"
            href="#api"
          >
            API
          </a>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <app-theme-switch />
      </div>
    </header>
  `,
})
export class SiteHeader {}
