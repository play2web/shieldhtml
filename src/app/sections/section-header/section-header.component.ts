import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
    title = 'Shield Software';
    heading = ' 13.1 Million Americans have their identities stolen every year losing nearly $15 Billion.'; 
    subheading = 'he best prevention and protection tools to stop Identity Theft from your own computer.';
    smallintro = 'Now you can better help to safeguard your personal information with Identity Theft Shield.';
    constructor() { }

  ngOnInit() {
  }

}
