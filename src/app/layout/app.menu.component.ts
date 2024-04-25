import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Unstitched',
        items: [
          {
            label: 'Basic',
            routerLink: ['/']
          },
          {
            label: 'Luxury',
            routerLink: ['/luxury']
          },
          {
            label: 'Embroidered',
            routerLink: ['/embroided']
          },
          {
            label: 'Fancy',
            routerLink: ['/fancy']
          },
        ]
      },
      // {
      // 	label: 'Luxury',
      // 	items: [
      // 		{
      // 			label: 'Luxury',
      // 			icon: 'pi pi-fw pi-home',
      // 			routerLink: ['/']
      // 		}
      // 	]
      // },
      // {
      // 	label: 'Embroideries',
      // 	items: [
      // 		{
      // 			label: 'Embroideries',
      // 			icon: 'pi pi-fw pi-home',
      // 			routerLink: ['/']
      // 		}
      // 	]
      // }
    ];
  }
}
