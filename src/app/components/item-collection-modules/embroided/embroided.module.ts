import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbroidedComponent } from './embroided.component';
import { EmbroidedRoutingModule } from './embroided-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [CommonModule, EmbroidedRoutingModule, SharedModule],
    declarations: [EmbroidedComponent]
})
export class EmbroidedModule {}
