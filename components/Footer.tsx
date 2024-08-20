'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="max-w-[410px] md:max-w-full flex flex-col md:flex-row justify-between items-center h-auto md:h-32 bg-white rounded-b-[20px] border-t border-t-[#EAEAEA] p-4 md:p-0">

            {/* Logo Section */}
            <div
                onClick={() => router.push('/')}
                className="cursor-pointer flex items-center gap-2 md:gap-2 mb-4 md:mb-2 md:pl-11"
            >
                <Image
                    src={'/logo.svg'}
                    alt={'Логотип'}
                    width={30}
                    height={30}
                    className="md:w-[40px] md:h-[40px]"
                />
                <Image
                    src={'/text_logo.svg'}
                    alt={'Логотип'}
                    width={100}
                    height={30}
                    className="md:w-[140px] md:h-[40px]"
                />
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-8 md:ml-auto md:mr-11">
                <div
                    onClick={() => window.open('https://www.instagram.com/nazdar_flor_kz/', '_blank')}
                    className="cursor-pointer flex items-center gap-2"
                >
                    <Image
                        src={'/instagram.svg'}
                        alt={'Instagram'}
                        width={18}
                        height={18}
                        className="md:w-[24px] md:h-[24px]"
                    />
                    <span className="hidden md:block text-gray-600">Instagram</span>
                </div>
                <div
                    onClick={() => window.open('https://2gis.kz/astana/branches/70000001019600317', '_blank')}
                    className="cursor-pointer flex items-center gap-2"
                >
                    <Image
                        src={'/2gis.png'}
                        alt={'2GIS'}
                        width={18}
                        height={18}
                        className="md:w-[24px] md:h-[24px]"
                    />
                    <span className="hidden md:block text-gray-600">2GIS</span>
                </div>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 md:ml-auto md:mr-11">
                <div
                    onClick={() => router.push('/about')}
                    className="cursor-pointer flex items-center gap-1 md:gap-2"
                >
                    <span className="text-gray-600">О нас</span>
                </div>
                <div
                    onClick={() => router.push('/privacy')}
                    className="cursor-pointer flex items-center gap-1 md:gap-2"
                >
                    <span className="text-gray-600">Политика конфиденциальности</span>
                </div>
            </div>
        </footer>
    )
}