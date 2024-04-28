import { Component, Input, TemplateRef } from '@angular/core';

export interface CarouselModel {
    id: number;
    title: string;
    price: number;
    children: CoruselChild[];
}

export interface CoruselChild {
    templateContent: string;
}

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
    @Input() carouselItem!: CarouselModel;
    @Input() carouselHeader!: TemplateRef<any>;
    @Input() carouselFooter!: TemplateRef<any>;
    @Input() carouselBody!: TemplateRef<any>;
    @Input() childHeight: string = '300';

    carouselPageNumber: number = 0;

    onPageChange(event: any): void {
        this.carouselPageNumber = event.page;
    }
}
