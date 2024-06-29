import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { StoreModule, createReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { cartReducer } from './store/reducers/cart-reducer';
import { AppState } from './store/state/app-state';
import { dashboardProductsReducer } from './components/landing/states/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppLayoutModule,
        CommonModule,
        StoreModule.forRoot<AppState>({
            cart: cartReducer,
        }),
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: false,
            autoPause: true,
            features: {
                pause: false,
                lock: true,
                persist: true
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
