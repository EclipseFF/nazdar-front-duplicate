'use server'
import {apiUrl} from "@/lib/api";
import {Item, User} from "@/lib/models";

export default async function GetAllUsers(limit: number, offset: number): Promise<User[]> {
    try {
        const response = await fetch(apiUrl + '/user?offset=' + offset + '&limit='+limit);
        const json = await response.json();

        let users: User[] = [];
        if (Array.isArray(json)) {
            json.forEach((user: any) => {
                const temp: User = {
                    id: user.id,
                    phoneNumber: user.phoneNumber,
                    name: user.name,
                    surname: user.surname,
                    patronymic: user.patronymic
                }
                users.push(temp);
            })
        }

        return users;
    } catch (e) {
        console.log(e);
        return []
    }
}