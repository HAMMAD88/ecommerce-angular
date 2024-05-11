import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmbroidedComponent } from './embroided.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: EmbroidedComponent }])],
  exports: [RouterModule]
})
export class EmbroidedRoutingModule {}
