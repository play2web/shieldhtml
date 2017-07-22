import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-identity',
  templateUrl: './section-identity.component.html',
  styleUrls: ['./section-identity.component.scss']
})
export class SectionIdentityComponent implements OnInit {
    heading = 'Every 2 seconds thieves steal another identity.';
    subheading = 'With Identity Theft Shield start prevent today';
    breadcrumbs = [
        { id: 1, name: 'Scan' },
        { id: 2, name: 'Detect' },
        { id: 3, name: 'Prevent' }
    ];
  constructor() { }

  ngOnInit() {
  }

}
