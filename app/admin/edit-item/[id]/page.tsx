
import {redirect, useRouter} from "next/navigation";
import EditItemForm from "@/components/admin/EditItemForm";
import { Item, Category } from "@/lib/models";
import GetAllCategories from "@/actions/categories/get-all-categories";
import GetItemById from "@/actions/items/get-item";


export default function Page({ params }: { params: { id: string } }){
    const id = parseInt(params.id)
    if (isNaN(id)) {
        redirect("/admin")
    }
    return (
        <div className="p-4">
            <EditItemForm id={id} />
        </div>
    );
}