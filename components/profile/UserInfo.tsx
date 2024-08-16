'use client'
export default function UserInfo() {
    return (
        <div className="p-4 md:p-6 bg-white rounded-lg mx-auto max-w-xs md:max-w-none">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-center">Профиль</h2>
            <div className="space-y-4 text-center md:text-left">
                <div>
                    <label className="block text-gray-700 font-semibold">Имя:</label>
                    <p className="text-gray-900">Иван Иванович</p>
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Email:</label>
                    <p className="text-gray-900">ivan.ivanovich@example.com</p>
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Телефон:</label>
                    <p className="text-gray-900">+7 (999) 123-45-67</p>
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Адрес:</label>
                    <p className="text-gray-900">г. Москва, ул. Примерная, д. 1</p>
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Дата регистрации:</label>
                    <p className="text-gray-900">01.01.2020</p>
                </div>
            </div>
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded w-full">Редактировать профиль</button>
        </div>
    );
}