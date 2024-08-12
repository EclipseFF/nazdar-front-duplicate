import Image from "next/image";

interface SidebarProps{
    setActiveSection: (section: Link) => void
    links: Link[]
}

export interface Link {
    link: string
    name: string
    icon: string
}

export default function Sidebar({setActiveSection, links}: SidebarProps) {
    return (
        <nav className="w-64 h-screen bg-white p-4 shadow-lg flex flex-col overflow-y-auto rounded-[12px]">
            <div className="flex gap-4 pb-6 pt-4">
                <Image src={'/logo.svg'} alt={'Логотип'} width={40} height={40}/>
                <Image src={'/text_logo.svg'} alt={'Логотип'} width={140} height={40}/>
            </div>
            <ul className="flex flex-col gap-4">
                {
                    links.map(link => (
                        <button key={link.link}
                                className="border-b-2 flex items-center gap-2 pb-4 focus:bg-gray-100 focus:border-l-2 focus:border-l-[#E82992]"
                                onClick={() => setActiveSection(link)}>
                            <Image src={link.icon} alt={link.name} width={24} height={24}/>
                            {link.name}
                        </button>
                    ))
                }
                <li className="text-red-700 border-b-2 flex items-center gap-2 pb-4">
                    <Image src={'/icons/close.svg'} alt={'Выход'} width={24} height={24}/>
                    <button>Выход</button>
                </li>
            </ul>
        </nav>
    )
}