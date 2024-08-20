import Image from 'next/image';

export default function AboutUs() {
    return (
        <div className="bg-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">О нас</h1>
                <div className="flex flex-col md:flex-row items-center mb-8">
                    <div className="md:w-1/2">
                        <Image
                            src="/nazdar.png"
                            alt="Nazdar Flower Shop"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                        <p className="text-lg text-gray-700">
                            Цветочный магазин Nazdar в Астане — это не просто место, где можно купить цветы.
                            Это уголок природы в сердце города, где каждый букет создается с любовью и вниманием к деталям.
                        </p>
                        <p className="text-lg text-gray-700 mt-4">
                            Мы предлагаем широкий ассортимент свежих цветов для любого повода: от праздничных мероприятий
                            до повседневных радостей. Наша команда опытных флористов готова создать для вас уникальную
                            композицию, которая подчеркнет особенность вашего события.
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-center mb-4">Наша миссия</h2>
                    <p className="text-lg text-gray-700 text-center">
                        Мы верим, что цветы способны передавать самые искренние эмоции и делать каждый момент
                        особенным. Наша миссия — приносить радость и красоту в вашу жизнь через наши цветочные
                        композиции, созданные с заботой и профессионализмом.
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-center mb-4">Контакты</h2>
                    <p className="text-lg text-gray-700 text-center">
                        Адрес: г. Астана, Тәуелсіздік даңғылы, 1Г<br/>
                        Телефон: +7 (705) 821-39-27<br/>
                        Часы работы: с 9:00 до 21:00 ежедневно
                    </p>
                </div>
            </div>
        </div>
    );
}