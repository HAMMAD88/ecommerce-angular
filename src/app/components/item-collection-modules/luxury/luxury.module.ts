import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryComponent } from './luxury.component';
import { LuxuryRoutingModule } from './luxury-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [CommonModule, LuxuryRoutingModule, SharedModule],
    declarations: [LuxuryComponent]
})
export class LuxuryModule {}
