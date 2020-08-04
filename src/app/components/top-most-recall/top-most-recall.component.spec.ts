import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMostRecallComponent } from './top-most-recall.component';

describe('TopMostRecallComponent', () => {
  let component: TopMostRecallComponent;
  let fixture: ComponentFixture<TopMostRecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMostRecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMostRecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
