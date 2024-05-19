import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { BasicRoutingModule } from './basic-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { ProductListModule } from '../../ecommerce/productlist/productlist.module';

@NgModule({
    imports: [CommonModule, BasicRoutingModule, SharedModule, ProductListModule],
    declarations: [BasicComponent]
})
export class BasicModule {}
