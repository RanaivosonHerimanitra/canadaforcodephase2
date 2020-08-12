import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Recall15Component } from './recall15.component';

describe('Recall15Component', () => {
  let component: Recall15Component;
  let fixture: ComponentFixture<Recall15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recall15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recall15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
