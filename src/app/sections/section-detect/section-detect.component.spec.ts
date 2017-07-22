import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDetectComponent } from './section-detect.component';

describe('SectionDetectComponent', () => {
  let component: SectionDetectComponent;
  let fixture: ComponentFixture<SectionDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
