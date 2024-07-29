'use client'

import Image from "next/image";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Suspense, useCallback} from "react";

export default function Filters(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const createQueryString = useCallback(
        (name:string, value:string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    )

    function handleSearch(term: string){
        console.log(term)
        router.push(pathname + '?' + createQueryString('search', term))
    }

    return(
        <div className="flex items-center gap-16 py-4 pb-10">
            <p className="font-bold text-[32px] pr-16">Каталог</p>
            <div className="grid grid-rows-2 gap-3">
                <div className="flex gap-2">
                    <Suspense>
                        <button
                            className="bg-primary_purple h-[30px] px-4 rounded-[6px] text-white font-bold" onClick={() => {
                                router.push(pathname + '?' + createQueryString('category', 'bouquets'))
                            }}
                        >
                            Букеты
                        </button>
                        <button
                            className="bg-primary_purple h-[30px] px-4 rounded-[6px] text-white font-bold"onClick={() => {
                            router.push(pathname + '?' + createQueryString('category', 'parfumes'))
                        }}
                        >
                            Парфюм
                        </button>
                        <button
                            className="bg-primary_purple h-[30px] px-4 rounded-[6px] text-white font-bold"onClick={() => {
                            router.push(pathname + '?' + createQueryString('category', 'roomplants'))
                        }}
                        >
                            Комнатные
                            растения
                        </button>
                    </Suspense>
                </div>
                <div className="flex gap-2">
                    <Suspense>
                        <button className="bg-primary_purple h-[30px] px-4 rounded-[6px] text-white font-bold"onClick={() => {
                            router.push(pathname + '?' + createQueryString('category', 'softtoys'))
                        }}
                        >
                            Мягкие
                            игрушки
                        </button>
                        <button className="bg-primary_purple h-[30px] px-4 rounded-[6px] text-white font-bold"onClick={() => {
                            router.push(pathname + '?' + createQueryString('category', 'sweets'))
                        }}
                        >
                            Сладости
                        </button>
                        <button className="bg-primary_purple h-[30px] px-4 rounded-[6px] text-white font-bold"onClick={() => {
                            router.push(pathname + '?' + createQueryString('category', 'baloons'))
                        }}
                        >
                            Воздушные
                            шары
                        </button>
                    </Suspense>
                </div>
            </div>
            <Suspense>
                <div className="border border-primary_purple rounded-[10px] flex justify-center gap-x-1 items-center w-[250px] h-[45px]">
                    <Image src={'/icons/search.svg'} alt={'Поиск'} width={19} height={19}/>
                    <input placeholder="Поиск..."
                           className="text-primary_purple border-0 focus:outline-0 placeholder:text-primary_purple"
                           onChange={(e) => handleSearch(e.target.value)}
                           />
                </div>
            </Suspense>
        </div>
    )
}