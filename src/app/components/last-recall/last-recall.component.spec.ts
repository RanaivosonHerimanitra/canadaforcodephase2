import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRecallComponent } from './last-recall.component';

describe('LastRecallComponent', () => {
  let component: LastRecallComponent;
  let fixture: ComponentFixture<LastRecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastRecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastRecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
