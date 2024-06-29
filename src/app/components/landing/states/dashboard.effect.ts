import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, catchError, exhaustMap, map, of } from 'rxjs';
import { fetchError } from '../../../store/actions/global.actions';
import { Product } from '../../../store/state/app-state';
import { loadLandingPageProducts, setLandingPageProducts } from './dashboard.actions';

@Injectable()
export class DashboardEffect {
    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) {}

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadLandingPageProducts),
            exhaustMap(() =>
                this.fetchLandingPageProducts().pipe(
                    map(products => setLandingPageProducts({ products })),
                    catchError(error => {
                        console.error('Error loading products:', error);
                        return of(fetchError());
                    })
                )
            )
        )
    );

    fetchLandingPageProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('assets/demo/demo-data/products.json');
    }

    dispatchProducts(action: any, products: Product[]) {
        if (!products) return fetchError();

        return setLandingPageProducts({ products });
    }
}
