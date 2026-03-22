import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { LOCAL_STORAGE } from './tokens';

export type Theme = 'light' | 'dark';
export const THEMES: Theme[] = ['light', 'dark'] as const;

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _localStorage = inject(LOCAL_STORAGE);
  private readonly _localStorageKey = 'theme-preference';
  private readonly _isBrowser = isPlatformBrowser(this._platformId);

  private readonly _theme = signal<Theme>(this._getInitialTheme());
  readonly theme = this._theme.asReadonly();

  setTheme(theme: Theme): void {
    this._theme.set(theme);

    if (!this._isBrowser) {
      return;
    }

    this._localStorage?.setItem(this._localStorageKey, theme);
    this._applyDomChanges(theme);
  }

  private _getInitialTheme(): Theme {
    if (!this._isBrowser) {
      return 'dark';
    }

    const savedTheme = this._localStorage?.getItem(this._localStorageKey) ?? null;

    if (this._isTheme(savedTheme)) {
      return savedTheme;
    }

    return this.document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }

  private _isTheme(value: string | null): value is Theme {
    return value === 'light' || value === 'dark';
  }

  private _applyDomChanges(theme: Theme): void {
    const isDark = theme === 'dark';

    if (isDark) {
      this.document.documentElement.classList.add('dark');
    } else {
      this.document.documentElement.classList.remove('dark');
    }
  }
}
