import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummernoteTestComponent } from './summernote-test.component';

describe('SummernoteTestComponent', () => {
  let component: SummernoteTestComponent;
  let fixture: ComponentFixture<SummernoteTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummernoteTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummernoteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
