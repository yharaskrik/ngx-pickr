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

import Pickr from '@simonwep/pickr';
import {DOCUMENT} from '@angular/common';
import {themes} from './types/pickr-themes';

@Directive({
  selector: '[ngxPickr]'
})
export class NgxPickrDirective implements AfterViewInit, OnChanges {

  private container;
  @Input() theme: Pickr.Theme = 'classic';
  @Output() readonly init = new EventEmitter<Pickr>();
  @Output() readonly save = new EventEmitter<Pickr.HSVaColor>();
  @Output() readonly change = new EventEmitter<Pickr.HSVaColor>();
  @Output() readonly swatchSelect = new EventEmitter<Pickr.HSVaColor>();
  @Output() readonly hide = new EventEmitter<Pickr>();
  @Output() readonly show = new EventEmitter<Pickr>();
  @Output() readonly clear = new EventEmitter<Pickr>();
  @Output() readonly changeStop = new EventEmitter<Pickr>();
  @Output() readonly cancel = new EventEmitter<Pickr>();
  private pickr: Pickr;

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
      ...themes[this.theme],
      el: this.container
    });

    this.pickr.on('init', instance => {
      this.init.emit(instance);
    }).on('hide', instance => {
      this.hide.emit(instance);
    }).on('show', (instance) => {
      this.show.emit(instance);
    }).on('save', (color, instance) => {
      this.save.emit(color);
    }).on('clear', instance => {
      this.clear.emit(instance);
    }).on('change', (color, instance) => {
      this.change.emit(color);
    }).on('changestop', instance => {
      this.changeStop.emit(instance);
    }).on('cancel', instance => {
      this.cancel.emit(instance);
    }).on('swatchselect', (color, instance) => {
      this.swatchSelect.emit(color);
    });
  }
}
