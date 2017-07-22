import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIdentityComponent } from './section-identity.component';

describe('SectionIdentityComponent', () => {
  let component: SectionIdentityComponent;
  let fixture: ComponentFixture<SectionIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
