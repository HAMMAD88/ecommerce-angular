import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-featured-products',
    templateUrl: './featured-products.component.html',
    styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
    constructor() { }
    products: any[] = [];

    ngOnInit() {
        this.products = [
            {
                price: '$140.00',
                image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-4-1.png'
            },
            {
                price: '$82.00',
                image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-4-2.png'
            },
            {
                price: '$54.00',
                image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-4-3.png'
            },
            {
                price: '$72.00',
                image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-4-4.png'
            },
            {
                price: '$99.00',
                image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-4-5.png'
            },
            {
                price: '$89.00',
                image: environment.baseHref + 'assets/demo/images/ecommerce/product-list/product-list-4-6.png'
            }
        ];
    }
}
