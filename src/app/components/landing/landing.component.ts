import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../layout/service/app.layout.service';
import { CarouselModel } from '../shared/carousel/carousel.component';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {
    items: CarouselModel[] = [];
    constructor(
        public layoutService: LayoutService,
        public router: Router
    ) { }

    ngOnInit(): void {
        this.items = [
            {
                id: 1,
                title: "Karandi",
                children: [
                    {
                        templateContent: "./../../../assets/suits/1.jpg"
                    },
                    {
                        templateContent: "./../../../assets/suits/2.jpg"
                    }
                ]
            }
        ]
    }
}
