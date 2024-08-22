'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EditCategoryForm from "@/components/admin/EditCategoryForm";
import GetCategoryById from "@/actions/categories/get-category";

export default function Page({ params }: { params: { id: string } }) {
    const router = useRouter();

    const [category, setCategory] = useState<{ id: number, name: string } | null>(null);

    useEffect(() => {
        if (params.id) {
            GetCategoryById(Number(params.id)).then((data) => setCategory(data));
        }
    }, [params.id]);

    if (!category) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <EditCategoryForm category={category} />
        </div>
    );
}