import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyComponent } from './fancy.component';
import { FancyRoutingModule } from './fancy-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [CommonModule, FancyRoutingModule, SharedModule],
    declarations: [FancyComponent]
})
export class FancyModule {}
