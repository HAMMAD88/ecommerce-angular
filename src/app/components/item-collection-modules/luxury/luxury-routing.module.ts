import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LuxuryComponent } from './luxury.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: LuxuryComponent }])],
  exports: [RouterModule]
})
export class LuxuryRoutingModule {}
