'use client'
import Image from "next/image";
import {useState} from "react";
import type {Item} from "@/lib/models";


export default function ItemCard(props: Item) {
    const [count, setCount] = useState(1);
    return (
        <div className="w-[210px] h-[390px] border-2 border-[#F3F3F3] rounded-[40px]" >
            <div className="grid justify-items-center pt-4">
                <Image src={props.images[0]} alt={'Товар'} width={175} height={200} className="rounded-[30px]" />
            </div>
            <p className="font-semibold md:font-bold pl-5">{props.name}</p>
            <p className="text-gray-400 pl-4 pt-3">Цена:</p>
            <div className="flex items-center gap-3">
                <p className="font-bold pl-4">{props.price.toString() + ' тг.'}</p>
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
                <button className="w-[170px] h-[40px] bg-primary_purple rounded-[6px] text-white font-bold text-[12px] ">Оформить</button>
            </div>
        </div>
    )
}