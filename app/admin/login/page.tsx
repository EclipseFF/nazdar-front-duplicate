import AdminLoginForm from "@/components/LoginForm";
import {cookies} from "next/headers";
import CheckSession from "@/actions/session/check-session";
import {redirect} from "next/navigation";

export default async function Page() {
    const token = cookies().get("adtoken")?.value
    if (token) {
        const isLogged = await CheckSession(token)
        if (isLogged) {
            redirect("/admin")
        }
    }



    return (
        <div>
            <AdminLoginForm />
        </div>
    )
}