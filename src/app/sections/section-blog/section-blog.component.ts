import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-blog',
    templateUrl: './section-blog.component.html',
    styleUrls: ['./section-blog.component.scss']
})
export class SectionBlogComponent implements OnInit {
    heading = '30% of Identity Theft victim scammed by family members and close friends.';
    subheading = 'The most common place to find all your personal data is on your own computer. ';
    articles = [
        { image: 'http://www.shockmansion.com/wp-content/myimages/2016/04/Spark1.jpg', name: 'Heading', text: 'Identity Thief Shield locates each piece of data you leave behind, displays it, and allows you to take action.Identity Thief Shield locates each piece of data you leave behind, displays it, and allows you to take action.Identity Thief Shield locates each piece of data you leave behind, displays it, and allows you to take action.' },
        { image: 'http://www.shockmansion.com/wp-content/myimages/2016/04/Spark1.jpg', name: 'Heading', text: 'Identity Thief Shield locates each piece of data you leave behind, displays it, and allows you to take action.Identity Thief Shield locates each piece of data you leave behind, displays it, and allows you to take action.Identity Thief Shield locates each piece of data you leave behind, displays it, and allows you to take action.' }
    ];
    bottomtext = 'Identity Theft Shield is equipped with the document search engine, looking for numbers or data related to your identity INSIDE of the files on your hard drive. ';
    bottomheading = 'Identity Theft is still very real, dont take it lightly, but take charge!';
    constructor() { }

    ngOnInit() {
    }

}
