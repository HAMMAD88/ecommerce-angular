import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { StyleClassModule } from 'primeng/styleclass';
import { ProductoverviewModule } from '../ecommerce/productoverview/productoverview.module';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ProductListModule } from '../ecommerce/productlist/productlist.module';
import { StoreModule } from '@ngrx/store';
import { dashboardProductsReducer } from './states/reducers/dashboard-products.reducer';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        SharedModule,
        ProductListModule,
        StoreModule.forFeature('dashboardProducts', dashboardProductsReducer)
    ],
    declarations: [LandingComponent]
})
export class LandingModule {}
