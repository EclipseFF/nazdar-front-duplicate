'use client'

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EditCategoryForm from "@/components/admin/EditCategoryForm";
import GetCategoryById from "@/actions/categories/get-category";

export default function Page({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { id } = router.query;  // Extract the category ID from the URL

    const [category, setCategory] = useState<{ id: number, name: string } | null>(null);

    useEffect(() => {
        if (id) {
            GetCategoryById(Number(params.id)).then((data) => setCategory(data));
        }
    }, [id]);

    if (!category) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <EditCategoryForm category={category} />
        </div>
    );
}