import { Dashboard } from "../../components/landing/states/dashboard.models"

export interface AppState {
    dashboard?: Dashboard,
    cart: Product[]
}

export interface Product {
    id: number,
    imageUrl: string,
    category: string,
    price: number,
    stock: number,
    reviews: Review[]
}

export interface Review {
    name: string,
    rating: string,
    comment: string,
    title: string
}
