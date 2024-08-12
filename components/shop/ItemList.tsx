'use client'

import ItemCard from "@/components/shop/ItemCard";
import {useEffect, useState} from "react";
import GetAllItems from "@/actions/items/get-all";
import {Item} from "@/lib/models";

interface Props{
    token?: string
}
export default function ItemList(props: Props){
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        GetAllItems(100, 0).then((items) => setItems(items))
    }, [])

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {items.map((item) => (
                <ItemCard key={item.id} Item={item} token={props.token}/>
            ))}
        </div>
    )
}