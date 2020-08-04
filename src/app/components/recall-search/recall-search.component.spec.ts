import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecallSearchComponent } from './recall-search.component';

describe('RecallSearchComponent', () => {
  let component: RecallSearchComponent;
  let fixture: ComponentFixture<RecallSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecallSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecallSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
