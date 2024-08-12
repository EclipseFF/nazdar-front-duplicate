import Image from "next/image";
import Logout from "@/actions/users/logout";
import {useRouter} from "next/navigation";
import {apiUrl} from "@/lib/api";

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
    const router = useRouter()
    return (
            <nav className="w-64 p-4 bg-white shadow-lg rounded-[12px]">
                <ul className="flex flex-col gap-4">

                    {
                        links.map(link => (
                            <button key={link.link}
                                    className="border-b-2 flex items-center gap-2 pb-4 active:bg-[#D5D6DD] active:border-l-2"
                                    onClick={() => setActiveSection(link)}>
                                <Image src={link.icon} alt={link.name} width={24} height={24}/>
                                {link.name}
                            </button>
                        ))
                    }
                    <li className="text-red-700 border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/close.svg'} alt={'Выход'} width={24} height={24}/>
                        <button onClick={() => {
                            Logout()
                            router.push('/')
                        }}>Выход</button>
                    </li>
                </ul>
            </nav>
    )
}