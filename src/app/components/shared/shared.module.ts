import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
    imports: [CommonModule, ButtonModule, CarouselModule],
    declarations: [CarouselComponent],
    exports: [CarouselComponent]
})
export class SharedModule {}
