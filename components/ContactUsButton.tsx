'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ContactUsButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => window.open('https://wa.me/message/BYITRFLNKNSHM1', '_blank')}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-bg_pink text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary_purple focus:outline-none"
        >
            Связаться с нами
        </button>
    );
}