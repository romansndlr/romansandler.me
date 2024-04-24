import { Controller } from '@hotwired/stimulus'

type ThemeValue = 'dark' | 'light'

export class DarkModeController extends Controller<HTMLButtonElement> {
  static values = {
    theme: String,
  }

  declare themeValue: ThemeValue

  get isDark() {
    return this.themeValue === 'dark'
  }

  connect() {
    const theme = document.documentElement.dataset.theme as ThemeValue

    if (!theme) {
      throw new Error('Theme is not set on the document element')
    }

    this.themeValue = theme

    this.updateToggleAttributes()
  }

  toggle() {
    this.themeValue = this.isDark ? 'light' : 'dark'

    localStorage.setItem('theme', this.themeValue)

    document.documentElement.dataset.theme = this.themeValue

    this.updateToggleAttributes()
  }

  private updateToggleAttributes() {
    this.element.setAttribute('aria-checked', this.isDark ? 'true' : 'false')
  }
}
