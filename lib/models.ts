export interface Item {
    id:number
    name: string
    price: number
    images: string[]
    description?: string
    categories?: Category[]
}

export interface CartItemModel {
    id: number
    name: string
    price: number
    quantity: number
    image: string
    description?: string
}

export interface User {
    id: number
    phoneNumber: string
    name?: string
    surname?: string
    patronymic?: string
}

export interface Session {
    userId: number
    token: string
}

export interface Category{
    id: number
    name: string
}

export interface Order {
    id: number;
    itemName: string;
    price: string;
    imageUrl: string;
    userId: number;
}