import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantRecallSearchComponent } from './instant-recall-search.component';

describe('InstantRecallSearchComponent', () => {
  let component: InstantRecallSearchComponent;
  let fixture: ComponentFixture<InstantRecallSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantRecallSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantRecallSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
