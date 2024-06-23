import { createReducer } from "@ngrx/store";
import { Product } from "../state/app-state";


const initState: Product[] = [];

export const cartReducer = createReducer(
    initState,
)
