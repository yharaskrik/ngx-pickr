import {HsvaColorObject} from './hsva-color-object';

export interface PickrInstance {
  setHSVA(h: number, s: number, v: number, a: number, silent: boolean): boolean;

  setColor(representation: string, silent: boolean): boolean;

  on(event: string, cb: (...args: any[]) => void): PickrInstance;

  off(event: string, cb: (...args: any[]) => void): PickrInstance;

  show(): PickrInstance;

  hide(): PickrInstance;

  disable(): PickrInstance;

  enable(): PickrInstance;

  isOpen(): boolean;

  getRoot(): HTMLElement;

  getColor(): HsvaColorObject;

  destroy(): HsvaColorObject;

  destroyAndRemove(): HsvaColorObject;

  setColorRepresentation(type: string): boolean;

  applyColor(silent: boolean): void;

  addSwatch(color: string): boolean;

  removeSwatch(index: number): void;
}
