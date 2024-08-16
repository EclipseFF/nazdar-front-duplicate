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
        <div className="max-w-[410px] md:max-w-full flex flex-col md:flex-row justify-between items-center h-auto md:h-32 bg-white rounded-t-[20px] border-b border-b-[#EAEAEA] p-4 md:p-0">

            <div onClick={() => router.push('/')} className="cursor-pointer flex items-center gap-2 md:gap-2 mb-4 md:mb-2 md:pl-11">
                <Image src={'/logo.svg'} alt={'Логотип'} width={30} height={30} className="md:w-[40px] md:h-[40px]" />
                <Image src={'/text_logo.svg'} alt={'Логотип'} width={100} height={30} className="md:w-[140px] md:h-[40px]" />
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-8 md:ml-auto md:mr-11">
                <div onClick={toggleCart} className="flex items-center gap-1 md:gap-2 cursor-pointer">
                    <Image src={'/icons/cart.svg'} alt={'Корзина'} width={14} height={14} className="md:w-[18px] md:h-[17px]" />
                    <p className="text-sm md:text-base">10 512 тг.</p>
                </div>
                <div className="flex items-center gap-1 md:gap-2 cursor-pointer">
                    <Image src={'/icons/favs.svg'} alt={'Избранное'} width={14} height={14} className="md:w-[18px] md:h-[17px]" />
                    <Link href={'/favourites'} className="text-sm md:text-base">Избранное</Link>
                </div>
                <div className="flex items-center gap-1 md:gap-2 cursor-pointer">
                    <Image src={'/icons/profile.svg'} alt={'Профиль'} width={14} height={14} className="md:w-[18px] md:h-[17px]" />
                    {
                        props.token ? <Link href={'/profile'} className="text-sm md:text-base">Профиль</Link> :
                            <button onClick={() => setIsOpen(true)} className="text-sm md:text-base">
                                Профиль
                            </button>
                    }
                    <AlertDialog open={isOpen}>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Введите номер телефона</AlertDialogTitle>
                                <AlertDialogDescription className="grid grid-cols-2 gap-2">
                                    <input
                                        onChange={e => setInputNumber(e.target.value)}
                                        placeholder={'Напишите ваш номер'}
                                        className="resize-none text-xl border-2 placeholder rounded-md mb-2 w-full p-2"
                                    />
                                    <input
                                        onChange={e => setName(e.target.value)}
                                        placeholder={'Напишите ваше имя'}
                                        className="resize-none text-xl border-2 placeholder rounded-md w-full p-2"
                                    />
                                    {error !== "" && <p className="text-red-700">{error}</p>}
                                </AlertDialogDescription>
                                <AlertDialogDescription className="text-primary_purple">
                                    Если вы уже регистрировались, введите те же данные
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction className="w-full">
                                    <button
                                        className="bg-primary_purple hover:opacity-50 hover:bg-primary_purple text-white w-full p-2 rounded-md"
                                        onClick={() => {
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