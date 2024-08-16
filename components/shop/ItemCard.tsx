'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
import type {CartItemModel, Item} from "@/lib/models";
import {apiUrl} from "@/lib/api";
import AddCartItem from "@/actions/cart/add-cart-item";
import GetAllCategories from "@/actions/categories/get-all-categories";
import Register from "@/actions/users/register";
import cart from "@/components/cart/Cart";
import {useRouter} from "next/navigation";
import RegistrationForm from "@/components/profile/RegistrationForm";
import {
    AlertDialog,
    AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";

interface Props {
    token?: string
    Item: Item
}

export default function ItemCard(props: Props) {
    const [count, setCount] = useState(0);
    const router = useRouter();
    const [inputNumber, setInputNumber] = useState<string>("")
    const [inputname, setName] = useState<string>("")
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    return (
        <div className="w-[150px] h-[300px] md:w-[210px] md:h-[390px] border-2 border-[#F3F3F3] rounded-[40px]" >
            <div className="grid justify-items-center pt-4">
                <Image src={apiUrl + "/images/" + props.Item.id + "/" + props.Item.images[0]} alt={'Товар'} width={120} height={150} className="rounded-[30px] w-[115px] h-[130px] md:w-[175px] md:h-[200px]" />
            </div>
            <p className="text-sm md:text-base font-semibold md:font-bold pl-3 md:pl-5">{props.Item.name}</p>
            <p className="text-gray-400 pl-3 md:pl-4 pt-3 text-xs md:text-sm">Цена:</p>
            <div className="flex items-center gap-2 md:gap-3 pl-3 md:pl-4">
                <p className="text-sm md:text-base font-bold">{props.Item.price.toString() + ' тг.'}</p>
                <div className="flex items-center gap-2 md:gap-3">
                    <button onClick={()=>{count === 0 ? setCount(0) : setCount(count-1)}}>
                        <Image src={'/icons/decrease.svg'} alt={'-'} width={25} height={25} />
                    </button>
                    <p className="text-sm md:text-base">{count}</p>
                    <button onClick={()=>{setCount(count+1)}}>
                        <Image src={'/icons/increase.svg'} alt={'+'} width={25} height={25} />
                    </button>
                </div>
            </div>
            <div className="flex justify-center pt-4">
                {!props.token && (
                    <AlertDialog open={isOpen}>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Введите номер телефона</AlertDialogTitle>
                                <AlertDialogDescription className="grid-cols-2">
                                    <input onChange={e => setInputNumber(e.target.value)} placeholder={'Напишите ваш номер'} className="resize-none text-xl border-2 placeholder rounded-md mb-2" />
                                    <input onChange={e => setName(e.target.value)} placeholder={'Напишите ваше имя'} className="resize-none text-xl border-2 placeholder rounded-md" />
                                    {error !== "" && <p className="text-red-500">{error}</p>}
                                </AlertDialogDescription>
                                <AlertDialogDescription className="text-primary_purple">Если вы уже регистрировались, введите те же данные</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction className="bg-primary_purple hover:opacity-50 hover:bg-primary_purple text-white">
                                    <button onClick={() => {
                                        if (inputNumber !== "" && inputname !== "") {
                                            Register(inputNumber, inputname).then(() => location.reload())
                                        }
                                        else {
                                            setError("Заполните все поля")
                                        }
                                    }}>
                                        Отправить
                                    </button>
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
                <button onClick={() => {
                    {!props.token && setIsOpen(true)}
                    {props.token && count > 0 && (
                        AddCartItem({
                            id: props.Item.id,
                            name: props.Item.name,
                            price: props.Item.price,
                            quantity: count,
                            image: apiUrl + "/images/" + props.Item.id + "/" + props.Item.images[0]
                        }, props.token))}
                }}
                        className="w-[120px] h-[30px] md:w-[170px] md:h-[40px] bg-primary_purple rounded-[6px] text-white font-bold text-[10px] md:text-[12px] ">
                    В корзину
                </button>
            </div>
        </div>
    )
}