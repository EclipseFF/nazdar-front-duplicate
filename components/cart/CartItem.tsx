import Image from "next/image";
import React from "react";
import {CartItemModel} from "@/lib/models";
import {apiUrl} from "@/lib/api";
import RemoveCartItem from "@/actions/cart/remove-cart-item";
import {useRouter} from "next/navigation";

type Props = {
    props: CartItemModel
    token?: string
}

export default function CartItem({props, token}: Props) {
    return (
        <div>
            <div className="border-2 border-[#F3F3F3] rounded-[20px] p-4 flex items-center justify-between">
                <div className=" flex items-center gap-2">
                    <Image src={apiUrl + "/images/" + props.id + "/" + props.image} alt={'Flower 1'} width={80} height={80}/>
                    <div>
                        <p>{props.name} {props.quantity + "шт"}</p>
                        <p>{props.price + " тг."}</p>
                    </div>
                </div>
                <Image src={'/icons/close.svg'} alt={'Закрыть'} width={20} height={20} onClick={() => RemoveCartItem(token || '', props.id).then(() => location.reload())}/>
            </div>
        </div>
    )
}