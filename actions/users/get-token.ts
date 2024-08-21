'use server'

import {cookies} from "next/headers";

export default async function GetUserToken() {
    const token = cookies().get("token")?.value
    return token
}