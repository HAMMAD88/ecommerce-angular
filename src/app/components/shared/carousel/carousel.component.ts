import { Component, Input, TemplateRef } from '@angular/core';
import { LayoutService } from '../../../layout/service/app.layout.service';

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
  @Input() showFooter: boolean = true;
  @Input() childHeight: string = '300';
  @Input() showSwitchers: boolean = this.layoutService.isDesktop();

  carouselPageNumber: number = 0;

  constructor(private layoutService: LayoutService) {}

  onPageChange(event: any): void {
    this.carouselPageNumber = event.page;
  }
}
