import Image from "next/image";

export default function AdminHeader(){
    return(
        <header className="flex justify-between items-center p-5 bg-white shadow-md rounded-[12px]">
            <div className="flex items-center gap-4">
                <h2>Привет, админ</h2>
                <Image src={'/hello.svg'} alt={'Привет'} width={32} height={32}/>
            </div>
            <div className="rounded-full bg-gray-200 h-10 w-10 overflow-hidden">
                <Image src={'/temp/profile.svg'} alt={'Profile'} width={50} height={50}/>
            </div>
        </header>
    )
}