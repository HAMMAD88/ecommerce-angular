import { createReducer, on } from '@ngrx/store';
import { Product } from '../../../store/state/app-state';
import { setLandingPageProducts } from './dashboard.actions';
import { Dashboard } from './dashboard.models';

const initState: Dashboard = {
    products: []
};

export const dashboardProductsReducer = createReducer(
    initState,
    on(setLandingPageProducts, (state, { products }) => ({ ...state, products }))
);
