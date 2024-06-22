import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'product-list',
    templateUrl: './productlist.component.html'
})
export class ProductListComponent {
    color1: string = 'Bluegray';
    products2 = [
        {
            color: 'Bluegray',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-2-1.png'
        },
        {
            color: 'Indigo',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-2-2.png'
        },
        {
            color: 'Purple',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-2-3.png'
        },
        {
            color: 'Cyan',
            image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-2-4.png'
        }
    ];
}
