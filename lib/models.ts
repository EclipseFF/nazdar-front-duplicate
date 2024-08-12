export interface Item {
    id:number
    name: string
    price: number
    images: string[]
}

export interface CartItemModel {
    id: number
    name: string
    price: number
    quantity: number
    image: string
}

export interface User {
    id: number
    phoneNumber: string
}

export interface Session {
    userId: number
    token: string
}