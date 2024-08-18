import CreateItemForm from "@/components/admin/CreateItemForm";
import GetAllCategories from "@/actions/categories/get-all-categories";


export default async function Page(){
    const categories = await GetAllCategories()

    return (
        <div>
            <CreateItemForm categories={categories} />
        </div>
    )
}
