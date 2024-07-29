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

// export default class CartItemModel {
//     private _name: string;
//     private _price: number;
//     private _quantity: number;
//     private _image: string;
//
//     constructor(name: string, price: number, quantity: number, image: string) {
//         this._name = name;
//         this._price = price;
//         this._quantity = quantity;
//         this._image = image;
//     }
//
//     get name(): string {
//         return this._name;
//     }
//
//     set name(value: string) {
//         this._name = value;
//     }
//
//     get price(): number {
//         return this._price;
//     }
//
//     set price(value: number) {
//         this._price = value;
//     }
//
//     get quantity(): number {
//         return this._quantity;
//     }
//
//     set quantity(value: number) {
//         this._quantity = value;
//     }
//
//     get image(): string {
//         return this._image;
//     }
//
//     set image(value: string) {
//         this._image = value;
//     }
// }