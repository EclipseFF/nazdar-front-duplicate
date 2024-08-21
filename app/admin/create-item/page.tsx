import CreateItemForm from "@/components/admin/CreateItemForm";
import GetAllCategories from "@/actions/categories/get-all-categories";


export default async function Page(){

    return (
        <div>
            <CreateItemForm/>
        </div>
    )
}
