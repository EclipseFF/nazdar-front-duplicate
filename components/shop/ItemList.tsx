'use client'

import ItemCard from "@/components/shop/ItemCard";
import {useEffect, useState} from "react";
import GetAllItems from "@/actions/items/get-all";
import {Item} from "@/lib/models";

export default function ItemList(){
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        GetAllItems(100, 0).then((items) => setItems(items))
    }, [])

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {items.map((item) => (
                <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} images={item.images}/>
            ))}
        </div>
    )
}