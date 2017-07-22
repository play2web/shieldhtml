import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-footer',
    templateUrl: './section-footer.component.html',
    styleUrls: ['./section-footer.component.scss']
})
export class SectionFooterComponent implements OnInit {
    header = 'Identity Thief Shield locates each piece of data you leave behind, displays it, and allows you to take action.Identity Thief Shield locates each piece of data you leave behind, displays it, and allows you to take action.Identity';
    icons = [
        { id: 1, name: 'facebook' },
        { id: 2, name: 'linkedin' },
        { id: 3, name: 'google' },
        { id: 4, name: 'twitter' }
    ];
    constructor() { }

    ngOnInit() {
    }

}
