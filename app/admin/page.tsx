'use server'

import AdminPage from "@/components/admin/AdminPage";
import {cookies} from "next/headers";
import CheckSession from "@/actions/session/check-session";
import {redirect} from "next/navigation";

export default async function Page() {
    const token = cookies().get("adtoken")?.value
    if (!token) {
        redirect("/admin/login")
    }
    const isLogged = await CheckSession(token)
    if (!isLogged) {
        redirect("/admin/login")
    }
   return (
       <div>
           <AdminPage />
       </div>
   )
}