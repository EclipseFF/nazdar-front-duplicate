'use client'
import {redirect} from "next/navigation";
import Card from "@/components/admin/Card";
import Charts from "@/components/admin/Charts";

export default function Dashboard(){
    return (
        <div className="p-6 grid grid-cols-4 gap-6">
            <Card title="Sale" value="750K"/>
            <Card title="Cancels" value="7,500"/>
            <Card title="Total Earned" value="7,500"/>
            <Card title="Distributions" value="7,500"/>

            <div className="col-span-2">
                <Charts/>
            </div>
            <Charts/>
            <Charts/>
        </div>
    )
}