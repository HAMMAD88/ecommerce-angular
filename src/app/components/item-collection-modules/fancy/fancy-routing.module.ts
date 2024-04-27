import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FancyComponent } from './fancy.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: FancyComponent }])],
    exports: [RouterModule]
})
export class FancyRoutingModule {}
