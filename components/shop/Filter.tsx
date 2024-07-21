import Image from "next/image";

export default function Filters(){
    return(
        <div className="flex items-center gap-16 py-4 pb-10">
            <p className="font-bold text-[32px] pr-16">Каталог</p>
            <div className="grid grid-rows-2 gap-3">
                <div className="flex gap-2">
                    <button className="bg-primary_purple h-[30px] px-4 rounded-[6px] text-white font-bold">Букеты
                    </button>
                    <button className="bg-primary_purple h-[30px] px-4 rounded-[6px] text-white font-bold">Парфюм
                    </button>
                    <button className="bg-primary_purple h-[30px] px-4 rounded-[6px] text-white font-bold">Комнатные
                        растения
                    </button>
                </div>
                <div className="flex gap-2">
                    <button className="bg-primary_purple h-[30px] px-4 rounded-[6px] text-white font-bold">Мягкие
                        игрушки
                    </button>
                    <button className="bg-primary_purple h-[30px] px-4 rounded-[6px] text-white font-bold">Сладости
                    </button>
                    <button className="bg-primary_purple h-[30px] px-4 rounded-[6px] text-white font-bold">Воздушные
                        шары
                    </button>
                </div>
            </div>
            <div className="border border-primary_purple rounded-[10px] flex justify-center gap-x-1 items-center w-[250px] h-[45px]">
                <Image src={'/icons/search.svg'} alt={'Поиск'} width={19} height={19}/>
                <input placeholder="Поиск..." className="text-primary_purple border-0 focus:outline-0 placeholder:text-primary_purple" />
            </div>
        </div>
    )
}