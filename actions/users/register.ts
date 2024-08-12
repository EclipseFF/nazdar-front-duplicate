"use server"

import {apiUrl} from "@/lib/api";
import {Item, User, Session} from "@/lib/models";
import {cookies} from "next/headers";

/*export default async function Register(phoneNumber: string)  {
    const headers: Headers = new Headers()

    const request: RequestInfo = new Request(apiUrl +'/user', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(phoneNumber)
    })

    return fetch(request)
        .then(res => {
            console.log("got response:", res)
        })
}*/

export default async function Register(phoneNumber: string) {
    const body = new FormData
    body.append("phoneNumber", phoneNumber)
    try {
        const response = await fetch(apiUrl + '/user', {
            method: "POST",
            body: body
        });
        const json = await response.json();

        const User: User = {
            id: json.user.id,
            phoneNumber: json.user.phone
        }
        const Session: Session ={
            userId: json.session.userId,
            token: json.session.token
        }

        if (Session.token) {
            cookies().set("token", Session.token, {expires: Date.now() + 60 * 60 * 24 * 1000*30, httpOnly: true})
        }

        console.log(User)
        console.log(Session)


    } catch (e) {
        console.log(e);
        console.log("Shikanoko noko noko koshitantan")
        console.log("Ты дебил")
        console.log("Панки хой")

    }
}