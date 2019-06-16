import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxPickrComponent} from './ngx-pickr.component';

describe('NgxPickrComponent', () => {
  let component: NgxPickrComponent;
  let fixture: ComponentFixture<NgxPickrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxPickrComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPickrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
