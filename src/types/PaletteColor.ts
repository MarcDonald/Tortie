import { validateRange } from '../utils';

export default class PaletteColor {
  constructor(
    readonly name: string,
    readonly hue: number,
    readonly saturation: number,
    readonly lightness: number
  ) {
    PaletteColor.validateName(name);
    this.validateHue();
    PaletteColor.validatePercentage(saturation, 'saturation');
    PaletteColor.validatePercentage(lightness, 'lightness');
    this.name = name;
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
  }

  get rawHslValues(): string {
    return `${this.hue}deg, ${this.saturation}%, ${this.lightness}%`;
  }

  get hsl(): string {
    return `hsl(${this.rawHslValues})`;
  }

  private static validateName(name: string) {
    if (!name || name === '') {
      throw new Error('You must supply a name');
    }
  }

  private static validatePercentage(percentage: number, fieldName: string) {
    validateRange(percentage, 0, 100, fieldName);
  }

  public hsla(alpha: number) {
    validateRange(alpha, 0, 1, 'alpha');
    return `hsla(${this.rawHslValues}, ${alpha})`;
  }

  public toString(): string {
    return this.hsl;
  }

  private validateHue() {
    validateRange(this.hue, 0, 360, 'hue');
  }
}
