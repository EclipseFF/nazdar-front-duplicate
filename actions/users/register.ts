"use server"

import {apiUrl} from "@/lib/api";
import {Item, User, Session} from "@/lib/models";
import {cookies} from "next/headers";

export default async function Register(phoneNumber: string, name: string) {

    const body = new FormData
    body.append("phoneNumber", phoneNumber)
    body.append("name", name)
    try {
        const response = await fetch(apiUrl + '/user', {
            method: "POST",
            body: body
        });
        const json = await response.json();

        const User: User = {
            id: json.user.id,
            phoneNumber: json.user.phone,
            name: json.user.name
        }
        const Session: Session ={
            userId: json.session.userId,
            token: json.session.token
        }

        if (Session.token) {
            cookies().set("token", Session.token, {expires: Date.now() + 60 * 60 * 24 * 1000*30, httpOnly: true})
        }



    } catch (e) {


    }
}