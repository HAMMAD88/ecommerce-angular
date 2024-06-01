import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [CommonModule, ButtonModule, CarouselModule],
    declarations: [CarouselComponent, HeaderComponent],
    exports: [CarouselComponent, HeaderComponent]
})
export class SharedModule {}
