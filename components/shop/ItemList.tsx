'use client'

import ItemCard from "@/components/shop/ItemCard";
import {useEffect, useState} from "react";
import GetAllItems from "@/actions/items/get-all";
import {Item} from "@/lib/models";
import {useSearchParams} from "next/navigation";

interface Props{
    token?: string
}
export default function ItemList(props: Props){
    const [items, setItems] = useState<Item[]>([])
    const path = useSearchParams()
    const search = path.get('search') ?? '';
    const category = path.get('category') ?? '';
    useEffect(() => {
        let search = path.get('search')
        let category = path.get('category')
        if (search === null) {
            search = ''
        }
        if (category === null) {
            category = ''
        }
        GetAllItems(2000, 0, search, category).then((items) => setItems(items))
    }, [search, category])

    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {items.map((item) => (
                <ItemCard key={item.id} Item={item} token={props.token}/>
            ))}
        </div>
    )
}