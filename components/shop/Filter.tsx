'use client'

import Image from "next/image";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Suspense, useCallback, useEffect, useState} from "react";
import {Category} from "@/lib/models";
import GetAllCategories from "@/actions/categories/get-all-categories";

export default function Filters(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        GetAllCategories().then((categories) => setCategories(categories))
    }, [])

    const createQueryString = useCallback(
        (name: string, value: string) => {
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
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 py-4 pb-10">
            <p className="font-bold text-xl md:text-[32px] pr-0 md:pr-8">Каталог</p>
            <div className="flex md:flex-wrap overflow-x-auto md:overflow-x-visible gap-2 basis-full md:basis-1/2 max-w-[300px] md:max-w-[500px] bg-white">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className="bg-primary_purple h-[28px] px-2 md:px-3 rounded-[6px] text-white font-bold text-[10px] md:text-sm"
                        onClick={() => {
                            router.push(pathname + '?' + createQueryString('category', category.name))
                        }}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <Suspense>
                <div className="border border-primary_purple rounded-[10px] flex justify-center gap-x-2 items-center w-[250px] md:w-[300px] h-[60px] mt-4 md:mt-0">
                    <Image src={'/icons/search.svg'} alt={'Поиск'} width={19} height={19}/>
                    <input
                        placeholder="Поиск..."
                        className="w-full text-primary_purple border-0 focus:outline-0 placeholder:text-primary_purple px-2"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </Suspense>
        </div>
    )
}