'use client'
import UserInfo from "@/components/profile/UserInfo";
import Sidebar from "@/components/profile/Sidebar";
import Orders from "@/components/profile/Orders";
import Support from "@/components/profile/Support";
import Faq from "@/components/profile/Faq";
import {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import type {Link} from "@/components/profile/Sidebar";
import Logout from "@/actions/users/logout";
import GetUserToken from "@/actions/users/get-token";

const links: Link[] = [
    {link: 'userinfo', name: 'Профиль', icon: '/icons/profile.svg'},
    {link: 'orders', name: 'Мои заказы', icon: '/icons/orders.svg'},
    {link: 'support', name: 'Поддержка', icon: '/icons/support.svg'},
    {link: 'faq', name: 'FAQ', icon: '/icons/faq.svg'}
]

export default function Page() {
    const [activeSection, setActiveSection] = useState<Link>();
    const [token, setToken] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        GetUserToken().then((token) => {
            if (!token) {
                Logout().then(r => router.push('/')) ;
            }else {
                setToken(token);
            }
        })

        const hash = window.location.hash.substring(1);
        const section = links.find(link => link.link === hash);
        if (section) {
            setActiveSection(section);
        } else {
            setActiveSection(links[0]);
        }

    }, [token]);


    const renderSection = () => {
        switch (activeSection?.link) {
            case 'userinfo':
                return <UserInfo token = {token}/>
            case 'orders':
                return <Orders token={token} />
            case 'support':
                return <Support />
            case 'faq':
                return <Faq />
            default:
                return <UserInfo token = {token}/>
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