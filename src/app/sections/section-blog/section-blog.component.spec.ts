import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogComponent } from './section-blog.component';

describe('SectionBlogComponent', () => {
  let component: SectionBlogComponent;
  let fixture: ComponentFixture<SectionBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
