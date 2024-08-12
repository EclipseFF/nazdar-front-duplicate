'use client'
import Sidebar from "@/components/admin/Sidebar";
import {useState} from "react";
import type {Link} from "@/components/profile/Sidebar";
import Users from "@/components/admin/Users";
import Dashboard from "@/components/admin/Dashboard";
import Products from "@/components/admin/Products";
import AdminHeader from "@/components/admin/AdminHeader";

const links: Link[] = [
    {link: 'dashboard', name: 'Статистика', icon: '/icons/profile.svg'},
    {link: 'users', name: 'Пользователи', icon: '/icons/orders.svg'},
    {link: 'products', name: 'Продукты', icon: '/icons/favorite.svg'}
]

export default function AdminPage() {
    const [activeSection, setActiveSection] = useState<Link>();

    const renderSection = () => {
        switch (activeSection?.link) {
            case 'dashboard':
                return <Dashboard/>
            case 'users':
                return <Users/>
            case 'products':
                return <Products/>
            default:
                return <Products/>
        }
    }
    return (
        <div className="flex justify-items-center gap-8 pb-6 pt-6 ">
            <div >
                <Sidebar setActiveSection={setActiveSection} links={links}/>
            </div>
            <div className="flex-1">
                <AdminHeader/>
                <div className="bg-white p-6 rounded-lg shadow-md mt-4 ">
                    {renderSection()}
                </div>
            </div>
            </div>
    )
}