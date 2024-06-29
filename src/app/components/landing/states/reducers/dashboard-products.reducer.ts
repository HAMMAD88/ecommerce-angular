import { createReducer } from "@ngrx/store";
import { Product } from "../../../../store/state/app-state";


const initState: Product[] = [];

export const dashboardProductsReducer = createReducer(
    initState,
)
