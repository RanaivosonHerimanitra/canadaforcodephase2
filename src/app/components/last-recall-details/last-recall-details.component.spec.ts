import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRecallDetailsComponent } from './last-recall-details.component';

describe('LastRecallDetailsComponent', () => {
  let component: LastRecallDetailsComponent;
  let fixture: ComponentFixture<LastRecallDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastRecallDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastRecallDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
