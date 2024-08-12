'use client'
import Image from "next/image";
import { useState } from "react";
import Cart from "@/components/cart/Cart";
import Link from 'next/link'
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import Register from "@/actions/users/register";
import {redirect, useRouter} from "next/navigation";

interface Props {
    token?: string
}

export default function Header(props: Props) {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [inputNumber, setInputNumber] = useState<string>("")
    const [inputname, setName] = useState<string>("")
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };
    const router = useRouter()

    return (
        <div className="flex justify-between h-32 bg-white rounded-t-[20px] border-b border-b-[#EAEAEA]">

            <div onClick={() => router.push('/')} className="cursor-pointer flex gap-4 pl-11">
                    <Image src={'/logo.svg'} alt={'Логотип'} width={40} height={40} />
                    <Image src={'/text_logo.svg'} alt={'Логотип'} width={140} height={40} />
            </div>
            <div className="flex items-center gap-8 pr-11">
                <div onClick={toggleCart} className="flex gap-2 cursor-pointer">
                    <Image src={'/icons/cart.svg'} alt={'Корзина'} width={18} height={17} />
                    <p>10 512 тг.</p>
                </div>
                <div className="flex gap-2 cursor-pointer">
                    <Image src={'/icons/favs.svg'} alt={'Избранное'} width={18} height={17} />
                    <Link href={'/favourites'}>Избранное</Link>
                </div>
                <div className="flex gap-2 cursor-pointer">
                    <Image src={'/icons/profile.svg'} alt={'Профиль'} width={18} height={17} />
                    {
                        props.token ? <Link href={'/profile'}>Профиль</Link> :
                            <button onClick={() => setIsOpen(true)}>
                                Профиль
                            </button>
                    }
                    <AlertDialog open={isOpen}>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Введите номер телефона</AlertDialogTitle>
                                <AlertDialogDescription className="grid-cols-2">
                                    <input onChange={e => setInputNumber(e.target.value)} placeholder={'Напишите ваш номер'} className="resize-none text-xl border-2 placeholder rounded-md mb-2"></input>
                                    <input onChange={e => setName(e.target.value)} placeholder={'Напишите ваше имя'} className="resize-none text-xl border-2 placeholder rounded-md"></input>
                                    {error !== "" && <p className="text-red-700">{error}</p>}
                                </AlertDialogDescription>
                                <AlertDialogDescription className="text-primary_purple">Если вы уже регистрировались, введите те же данные</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction className="bg-primary_purple hover:opacity-50 hover:bg-primary_purple text-white">
                                    <button onClick={() => {
                                        if (inputNumber !== "" && inputname !== "") {
                                            Register(inputNumber, inputname).then(() => location.reload())
                                        } else {
                                            setError("Заполните все поля")
                                        }
                                    }}>
                                        Отправить
                                    </button>
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
            <Cart isCartVisible={isCartVisible} toggleCart={toggleCart}/>
        </div>
    );
}