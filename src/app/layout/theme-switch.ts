import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideMonitor, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-switch',
  imports: [HlmIconImports, HlmButtonImports],
  providers: [
    provideIcons({
      lucideMoon,
      lucideSun,
      lucideCheck,
      lucideMonitor,
    }),
  ],
  template: `
    <button type="button" variant="outline" hlmBtn size="icon" (click)="toggleTheme()">
      <ng-icon hlmIcon size="sm" [name]="iconName()" />
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:keydown)': 'onKeydown($event)',
  },
})
export class ThemeSwitch {
  // ==========================================
  // Services
  // ==========================================
  private readonly _themeService = inject(ThemeService);

  // ==========================================
  // State
  // ==========================================
  protected readonly currentTheme = this._themeService.theme;

  protected readonly iconName = computed(() => {
    const theme = this.currentTheme();

    return theme === 'dark' ? 'lucideSun' : 'lucideMoon';
  });

  // ==========================================
  // Public Methods
  // ==========================================

  protected toggleTheme(): void {
    this._themeService.setTheme(this.currentTheme() === 'dark' ? 'light' : 'dark');
  }

  protected onKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('input, textarea, select, [contenteditable]')) return;

    if (event.key.toLowerCase() === 'd' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      this.toggleTheme();
    }
  }
}
