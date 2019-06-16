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
import {PickrInstance} from './types/pickr-instance';
import {HsvaColorObject} from './types/hsva-color-object';
import {themes} from './types/pickr-themes';

@Directive({
  selector: '[ngxPickr]'
})
export class NgxPickrDirective implements AfterViewInit, OnChanges {

  private pickr: PickrInstance;

  private container;

  @Input() config = themes.classic;

  @Output() readonly init = new EventEmitter<PickrInstance>();

  @Output() readonly save = new EventEmitter<HsvaColorObject>();

  @Output() readonly change = new EventEmitter<HsvaColorObject>();

  @Output() readonly swatchSelect = new EventEmitter<HsvaColorObject>();

  constructor(private el: ElementRef,
              @Inject(DOCUMENT) private document: any,
              private renderer2: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.config) {
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
