import Image from "next/image";
import Logout from "@/actions/users/logout";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SidebarProps {
    setActiveSection: (section: Link) => void;
    links: Link[];
}

export interface Link {
    link: string;
    name: string;
    icon: string;
}

export default function Sidebar({ setActiveSection, links }: SidebarProps) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:w-64">
            {/* Hamburger Menu */}
            <button
                className="md:hidden p-2 text-gray-700 absolute top-4 left-4 z-50" // Adjusted position to top-left with absolute positioning
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image src="/icons/menu.svg" alt="Menu" width={24} height={24} />
            </button>

            {/* Sidebar Navigation */}
            <nav
                className={`${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transform md:transform-none fixed md:relative top-0 left-0 h-full w-64 p-4 bg-white shadow-lg rounded-r-[12px] transition-transform duration-300 ease-in-out z-40`}
            >
                <ul className="flex flex-col gap-4">
                    {links.map((link) => (
                        <button
                            key={link.link}
                            className="flex items-center gap-2 pb-4 border-b-2 active:bg-[#D5D6DD] active:border-l-2 focus:outline-none"
                            onClick={() => {
                                setActiveSection(link);
                                setIsOpen(false); // Close sidebar on mobile after selecting
                            }}
                        >
                            <Image
                                src={link.icon}
                                alt={link.name}
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <span className="text-sm md:text-base">{link.name}</span>
                        </button>
                    ))}
                    <li className="text-red-700 flex items-center gap-2 pb-4 border-b-2">
                        <Image
                            src={"/icons/close.svg"}
                            alt={"Выход"}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <button
                            onClick={() => {
                                Logout().then((r) => router.push("/"));
                            }}
                            className="text-sm md:text-base focus:outline-none"
                        >
                            Выход
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}