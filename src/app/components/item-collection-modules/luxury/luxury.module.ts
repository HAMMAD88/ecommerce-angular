import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryComponent } from './luxury.component';
import { LuxuryRoutingModule } from './luxury-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LuxuryRoutingModule
  ],
  declarations: [LuxuryComponent]
})
export class LuxuryModule { }
