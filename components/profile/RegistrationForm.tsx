import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import Register from "@/actions/users/register";
import {useState} from "react";

export default function RegistrationForm(){
    const [inputNumber, setInputNumber] = useState<string>("")
    const [inputname, setName] = useState<string>("")
    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger>Профиль</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Введите номер телефона</AlertDialogTitle>
                        <AlertDialogDescription className="grid-cols-2">
                            <input onChange={e => setInputNumber(e.target.value)} placeholder={'Напишите ваш номер'} className="resize-none text-xl border-2 placeholder rounded-md mb-2"></input>
                            <input onChange={e => setName(e.target.value)} placeholder={'Напишите ваше имя'} className="resize-none text-xl border-2 placeholder rounded-md"></input>
                        </AlertDialogDescription>
                        <AlertDialogDescription className="text-primary_purple">Если вы уже регистрировались, введите те же данные</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction className="bg-primary_purple hover:opacity-50 hover:bg-primary_purple text-white">
                            <button onClick={() => Register(inputNumber, inputname)}>
                                Отправить
                            </button>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}