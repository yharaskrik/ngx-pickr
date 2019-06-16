import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges
} from '@angular/core';

import Pickr from 'node_modules/@simonwep/pickr/dist/pickr.min';
import {DOCUMENT} from '@angular/common';
import {PickrConfig} from './pickr-config';
import {PickrInstance} from './pickr-instance';
import {HsvaColorObject} from './hsva-color-object';

const themes: { [key: string]: PickrConfig } = {
  classic:
    {
      swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
      ],

      components:
        {
          preview: true,
          opacity: true,
          hue: true,
          interaction:
            {
              hex: true,
              rgba:
                true,
              hsva:
                true,
              input:
                true,
              clear:
                true,
              save:
                true
            }
        }
    },
  monolith:
    {
      swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)'
      ],

      defaultRepresentation: 'HEXA',
      components: {
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
          hex: false,
          rgba: false,
          hsva: false,
          input: true,
          clear: true,
          save: true
        }
      }
    },
  nano:
    {
      swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)'
      ],

      defaultRepresentation: 'HEXA',
      components: {
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
          hex: false,
          rgba: false,
          hsva: false,
          input: true,
          clear: true,
          save: true
        }
      }
    }
};

@Directive({
  selector: '[ngxPickr]'
})
export class NgxPickrDirective implements AfterViewInit, OnChanges {

  private pickr: PickrInstance;

  @Input() config = themes.classic;

  @Output() readonly init = new EventEmitter<PickrInstance>();

  @Output() readonly save = new EventEmitter<HsvaColorObject>();

  @Output() readonly change = new EventEmitter<HsvaColorObject>();

  @Output() readonly swatchSelect = new EventEmitter<HsvaColorObject>();

  container;

  constructor(private el: ElementRef,
              @Inject(DOCUMENT) private document: any,
              private renderer2: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.setupPickrContainer();
    }
  }

  ngAfterViewInit(): void {
    this.setupPickrContainer();
  }

  setupPickrContainer(): void {
    if (this.container) {
      this.renderer2.removeChild(this.el.nativeElement, this.container);
    }

    this.container = this.document.createElement('p');

    this.renderer2.appendChild(this.el.nativeElement, this.container);

    if (this.pickr) {
      this.pickr.destroyAndRemove();
    }

    this.pickr = Pickr.create({
      el: this.container,
      theme: this.config.theme || 'classic',
      default: this.config.default || 'E91E63',
      ...this.config
    });

    this.pickr.on('init', (...args) => {
      this.init.emit(args[0]);
    }).on('save', (...args) => {
      this.save.emit(args[0]);
    }).on('change', (...args) => {
      this.change.emit(args[0]);
    }).on('swatchselect', (...args) => {
      this.swatchSelect.emit(args[0]);
    });
  }
}
