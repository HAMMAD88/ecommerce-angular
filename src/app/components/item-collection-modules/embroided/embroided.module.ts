import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbroidedComponent } from './embroided.component';
import { EmbroidedRoutingModule } from './embroided-routing.module';

@NgModule({
  imports: [CommonModule, EmbroidedRoutingModule],
  declarations: [EmbroidedComponent]
})
export class EmbroidedModule {}
