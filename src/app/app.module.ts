import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { AppComponent } from './app.component';
import { SectionHeaderComponent } from './sections/section-header/section-header.component';
import { SectionDetectComponent } from './sections/section-detect/section-detect.component';
import { SectionIdentityComponent } from './sections/section-identity/section-identity.component';
import { SectionBlogComponent } from './sections/section-blog/section-blog.component';
import { SectionFooterComponent } from './sections/section-footer/section-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SectionHeaderComponent,
    SectionDetectComponent,
    SectionIdentityComponent,
    SectionBlogComponent,
    SectionFooterComponent
  ],
  imports: [
      BrowserModule,
      PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
