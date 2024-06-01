import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() title: string = '';
    @Input() subTitle: string = '';
    @Input() description: string = '';
    @Input() imageNumber: number = 9;
    @Input() imageFormat: string = 'jpg';

    constructor() {}

    ngOnInit() {}
}
