import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, ButtonModule, CarouselModule, RouterModule],
    declarations: [CarouselComponent, HeaderComponent, FeaturedProductsComponent],
    exports: [CarouselComponent, HeaderComponent, FeaturedProductsComponent]
})
export class SharedModule {}
