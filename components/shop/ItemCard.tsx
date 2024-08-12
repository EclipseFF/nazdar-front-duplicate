'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
import type {CartItemModel, Item} from "@/lib/models";
import {apiUrl} from "@/lib/api";
import AddCartItem from "@/actions/cart/add-cart-item";
import GetAllCategories from "@/actions/categories/get-all-categories";
import Register from "@/actions/users/register";
import cart from "@/components/cart/Cart";
import {useRouter} from "next/navigation";

interface Props {
    token?: string
    Item: Item
}

export default function ItemCard(props: Props) {
    const [count, setCount] = useState(0);
    const router = useRouter();

    return (
        <div className="w-[210px] h-[390px] border-2 border-[#F3F3F3] rounded-[40px]" >
            <div className="grid justify-items-center pt-4">
                <Image src={apiUrl + "/images/" + props.Item.id + "/" + props.Item.images[0]} alt={'Товар'} width={175} height={200} className="rounded-[30px]" />
            </div>
            <p className="font-semibold md:font-bold pl-5">{props.Item.name}</p>
            <p className="text-gray-400 pl-4 pt-3">Цена:</p>
            <div className="flex items-center gap-3">
                <p className="font-bold pl-4">{props.Item.price.toString() + ' тг.'}</p>
                <div className="flex items-center gap-3">
                    <button onClick={()=>{count === 0 ? setCount(0) : setCount(count-1)}}>
                        <Image src={'/icons/decrease.svg'} alt={'-'} width={30} height={30}/>
                    </button>
                    <p>{count}</p>
                    <button onClick={()=>{setCount(count+1)}}>
                        <Image src={'/icons/increase.svg'} alt={'+'} width={30} height={30}/>
                    </button>
                </div>
            </div>
            <div className="flex justify-center pt-4">

                    <button onClick={() => {
                        {!props.token && router.push('/login')}
                        {props.token && count > 0 && (
                        AddCartItem({
                            id: props.Item.id,
                            name: props.Item.name,
                            price: props.Item.price,
                            quantity: count,
                            image: apiUrl + "/images/" + props.Item.id + "/" + props.Item.images[0]
                        }, props.token))}
                    }}
                            className="w-[170px] h-[40px] bg-primary_purple rounded-[6px] text-white font-bold text-[12px] ">В
                        корзину</button>

            </div>
        </div>
    )
}