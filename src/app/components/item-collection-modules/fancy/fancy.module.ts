import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyComponent } from './fancy.component';
import { FancyRoutingModule } from './fancy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FancyRoutingModule
  ],
  declarations: [FancyComponent]
})
export class FancyModule { }
