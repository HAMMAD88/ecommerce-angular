import { createAction, props } from "@ngrx/store";
import { Product } from "../../../store/state/app-state";

export const loadLandingPageProducts = createAction('[DASHBOARD PROCESS] LoadLandingPageProducts');
export const setLandingPageProducts = createAction('[DASHBOARD PROCESS] SetLandingPageProducts', props<{ products: Product[] }>());