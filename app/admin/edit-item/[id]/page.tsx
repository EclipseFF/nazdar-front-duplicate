'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EditItemForm from "@/components/admin/EditItemForm";
import { Item, Category } from "@/lib/models";
import GetAllCategories from "@/actions/categories/get-all-categories";
import GetItemById from "@/actions/items/get-item";


export default function Page({ params }: { params: { id: string } }){
    const router = useRouter();

    const [item, setItem] = useState<Item | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        if (params.id) {
            GetItemById(Number(params.id)).then((data) => setItem(data));
            GetAllCategories().then((data) => setCategories(data));
        }
    }, [params.id]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <EditItemForm item={item} categories={categories} />
        </div>
    );
}