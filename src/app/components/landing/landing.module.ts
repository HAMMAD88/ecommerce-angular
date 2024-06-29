import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { StyleClassModule } from 'primeng/styleclass';
import { ProductListModule } from '../ecommerce/productlist/productlist.module';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { DashboardEffect } from './states/dashboard.effect';
import { dashboardProductsReducer } from './states/dashboard.reducer';

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
        StoreModule.forFeature('dashboard', dashboardProductsReducer),
        EffectsModule.forFeature([DashboardEffect])
    ],
    declarations: [LandingComponent]
})
export class LandingModule {}
