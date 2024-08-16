'use client'
import UserInfo from "@/components/profile/UserInfo";
import Sidebar from "@/components/profile/Sidebar";
import Orders from "@/components/profile/Orders";
import Favourite from "@/components/profile/Favourite";
import Support from "@/components/profile/Support";
import Faq from "@/components/profile/Faq";
import {useState} from "react";
import type {Link} from "@/components/profile/Sidebar";

const links: Link[] = [
    {link: 'userinfo', name: 'Профиль', icon: '/icons/profile.svg'},
    {link: 'orders', name: 'Мои заказы', icon: '/icons/orders.svg'},
    {link: 'favs', name: 'Избранное', icon: '/icons/favorite.svg'},
    {link: 'support', name: 'Поддержка', icon: '/icons/support.svg'},
    {link: 'faq', name: 'FAQ', icon: '/icons/faq.svg'}
]

export default function Page() {
    const [activeSection, setActiveSection] = useState<Link>();

    const renderSection = () => {
        switch (activeSection?.link) {
            case 'userinfo':
                return <UserInfo />
            case 'orders':
                return <Orders />
            case 'favs':
                return <Favourite />
            case 'support':
                return <Support />
            case 'faq':
                return <Faq />
            default:
                return <UserInfo />
        }
    }

    return (
        <div className="max-w-[410px] md:max-w-full flex flex-col md:flex-row justify-center items-center gap-8 p-6 bg-white">
            <Sidebar setActiveSection={setActiveSection} links={links}/>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md max-w-[300px] md:max-w-full w-full">
                {renderSection()}
            </div>
        </div>
    )
}