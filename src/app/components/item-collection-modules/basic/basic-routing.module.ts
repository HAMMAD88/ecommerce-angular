import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasicComponent } from './basic.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: BasicComponent }])],
    exports: [RouterModule]
})
export class BasicRoutingModule {}
