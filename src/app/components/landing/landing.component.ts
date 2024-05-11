import { Component } from '@angular/core';
import { CarouselModel } from '../shared/carousel/carousel.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  dashboardItems: CarouselModel[] = [];

  ngOnInit(): void {
    this.dashboardItems = [
      {
        id: 1,
        price: 0,
        title: '',
        children: [
          {
            templateContent: environment.baseHref + '/assets/suits/1.jpg'
          },
          {
            templateContent: environment.baseHref + '/assets/suits/2.jpg'
          },
          {
            templateContent: environment.baseHref + '/assets/suits/3.jpg'
          },
          {
            templateContent: environment.baseHref + '/assets/suits/4.jpg'
          },
          {
            templateContent: environment.baseHref + '/assets/suits/5.jpg'
          },
          {
            templateContent: environment.baseHref + '/assets/suits/6.jpg'
          },
          {
            templateContent: environment.baseHref + '/assets/suits/7.jpg'
          },
          {
            templateContent: environment.baseHref + '/assets/suits/8.jpg'
          },
          {
            templateContent: environment.baseHref + '/assets/suits/9.jpg'
          },
          {
            templateContent: environment.baseHref + '/assets/suits/10.jpg'
          }
        ]
      }
    ];
  }
}
