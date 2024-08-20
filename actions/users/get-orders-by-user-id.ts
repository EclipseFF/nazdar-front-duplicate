'use server'

export async function GetOrdersByUserId(userId: number) {
    const orders = [
        {
            id: 1,
            itemName: "Букет Роз",
            price: "12 999 тг.",
            imageUrl: "/temp/flowerItem.png",
            userId: 1,
        },
        {
            id: 2,
            itemName: "Букет Лилий",
            price: "15 499 тг.",
            imageUrl: "/temp/flowerItem.png",
            userId: 1,
        },
        {
            id: 3,
            itemName: "Свадебный Букет",
            price: "22 000 тг.",
            imageUrl: "/temp/flowerItem.png",
            userId: 1,
        },
    ];

    /*
    try {
        const response = await fetch(`${apiUrl}/orders?userId=${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch orders');
        }
        const json = await response.json();
        return json;
    } catch (e) {
        console.error('Error fetching orders:', e);
        return [];
    }
    */

    return orders.filter(order => order.userId === userId);
}