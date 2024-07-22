'use client'
import Profile from "@/components/profile/Profile";
import Sidebar from "@/components/profile/Sidebar";
import History from "@/components/profile/History";
import Orders from "@/components/profile/Orders";
import Favourite from "@/components/profile/Favourite";
import Support from "@/components/profile/Support";
import Faq from "@/components/profile/Faq";
import {useState} from "react";

export default function Page() {
    const [activeSection, setActiveSection] = useState('profile')

    const renderSection = () => {
        switch (activeSection) {
            case 'profile':
                return <Profile />
            case 'orders':
                return <Orders />
            case 'favs':
                return <Favourite />
            case 'history':
                return <History />
            case 'support':
                return <Support />
            case 'faq':
                return <Faq />
        }
    }

    return (
        <div className="flex justify-items-center gap-8 pl-[100px] pb-6 pt-6 bg-white">
            <Sidebar setActiveSection={setActiveSection} />
            <div className="bg-white p-6 rounded-lg shadow-md">
                {renderSection()}
            </div>
        </div>
    )
}