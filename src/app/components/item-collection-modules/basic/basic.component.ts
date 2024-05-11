import { Component, OnInit } from '@angular/core';
import { CarouselModel } from '../../shared/carousel/carousel.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  items: CarouselModel[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        id: 1,
        title: 'Karandi',
        price: 5000,
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
      },
      {
        id: 1,
        price: 5000,
        title: 'Cotton',
        children: [
          {
            templateContent: environment.baseHref + '/assets/suits/3.jpg'
          },
          {
            templateContent: environment.baseHref + '/assets/suits/4.jpg'
          }
        ]
      },
      {
        id: 1,
        price: 5000,
        title: 'Silk',
        children: [
          {
            templateContent: environment.baseHref + '/assets/suits/5.jpg'
          },
          {
            templateContent: environment.baseHref + '/assets/suits/6.jpg'
          }
        ]
      },
      {
        id: 1,
        price: 5000,
        title: 'Boski',
        children: [
          {
            templateContent: environment.baseHref + '/assets/suits/7.jpg'
          },
          {
            templateContent: environment.baseHref + '/assets/suits/8.jpg'
          }
        ]
      }
    ];
  }
}
