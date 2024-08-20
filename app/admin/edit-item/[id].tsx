'use client'

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EditItemForm from "@/components/admin/EditItemForm";
import { Item, Category } from "@/lib/models";
import GetAllCategories from "@/actions/categories/get-all-categories";
import GetItemById from "@/actions/items/get-item";


export default function Page(){
    const router = useRouter();
    const { id } = router.query;  // Extract the item ID from the URL

    const [item, setItem] = useState<Item | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        if (id) {
            GetItemById(Number(id)).then((data) => setItem(data));
            GetAllCategories().then((data) => setCategories(data));
        }
    }, [id]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <EditItemForm item={item} categories={categories} />
        </div>
    );
}