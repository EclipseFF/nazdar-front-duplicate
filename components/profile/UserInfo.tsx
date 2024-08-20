'use client'

import { useEffect, useState } from "react";
import { GetUserByToken} from "@/actions/users/get-user-by-id";
import { User } from "@/lib/models";
import UpdateUser from "@/actions/users/update-user";

export default function UserInfo({ token }: { token: string | null }) {
    const [user, setUser] = useState<User | null>(null);
    const [name, setName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    useEffect(() => {
        async function fetchUserData() {
            if (token) {
                const userData = await GetUserByToken();  // Pass token to your API call
                if (userData) {
                    setUser(userData);
                    setName(userData.name || "");
                    setPhoneNumber(userData.phoneNumber || "");
                }
            }
        }

        fetchUserData();
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (user) {
            const updatedUser = await UpdateUser({
                id: user.id,
                phone: phoneNumber,
                name: name
            });

            if (updatedUser) {
                setUser(updatedUser);
                alert('Информация обновлена успешно');
            } else {
                alert('Не удалось обновить информацию');
            }
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-xl font-bold mb-4">Информация о пользователе</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Имя</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700">Телефон</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Сохранить</button>
            </form>
        </div>
    );
}