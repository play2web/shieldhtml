import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-detect',
    templateUrl: './section-detect.component.html',
    styleUrls: ['./section-detect.component.scss']
})
export class SectionDetectComponent implements OnInit {
    title = ' Do you know you leave all your personal information at disposal to hackers every time you use your computer?!?';
    subtitle = 'Identity Thief Shield locates each piece of data you leave behind, displays it, and allows you to take action.';
    requests = [
        { title: 'Home address', introtext: 'Identity Thief Shield locates', description: 'Identity Thief Shield locates each piece of data you leave behind'},
        { title: 'Home address', introtext: 'Identity Thief Shield locates', description: 'Identity Thief Shield locates each piece of data you leave behind' },
        { title: 'Home address', introtext: 'Identity Thief Shield locates', description: 'Identity Thief Shield locates each piece of data you leave behind' },
        { title: 'Home address', introtext: 'Identity Thief Shield locates', description: 'Identity Thief Shield locates each piece of data you leave behind' },
        { title: 'Home address', introtext: 'Identity Thief Shield locates', description: 'Identity Thief Shield locates each piece of data you leave behind' }
    ];
    footerText = 'We detect and protect your:';
    constructor() { }

    ngOnInit() {
    }

}
