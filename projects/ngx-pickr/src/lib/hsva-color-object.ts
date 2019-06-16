export interface HsvaColorObject {
  toHSVA(): string[];
  toHSLA(): string[];
  toRGBA(): string[];
  toHEXA(): string[];
  toCMYK(): string[]
  clone(): HsvaColorObject;
}
