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
                        <p className="text-lg text-gray-700 text-justify">
                            Добро пожаловать в сеть цветочных салонов Nazdar – ваш идеальный источник красоты и свежести в Астане!
                        </p>
                        <p className="text-lg text-gray-700 mt-4 text-justify">
                            Мы рады предложить вам широкий ассортимент цветочных композиций и растений, которые сделают каждый момент вашей жизни особенным.
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-center mb-4">Наши салоны</h2>
                    <p className="text-lg text-gray-700 text-justify">
                        Наши салоны в Астане отличаются высоким качеством обслуживания и вниманием к деталям. Мы тщательно отбираем цветы и растения от лучших поставщиков, чтобы каждый букет и композиция были по-настоящему свежими и красивыми. Мы уверены, что каждый клиент найдет у нас именно то, что ищет – от элегантных свадебных букетов до ярких и стильных корпоративных решений.
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-center mb-4">Наша миссия</h2>
                    <p className="text-lg text-gray-700 text-justify">
                        Мы гордимся тем, что можем предложить вам не только красивое оформление, но и персонализированный подход. Наши флористы готовы выслушать ваши пожелания, предложить идеи и создать композиции, которые будут соответствовать вашим ожиданиям и больше.
                        В Nazdar мы верим в силу цветов, которые могут передавать эмоции, радость и заботу. Посетите нас, и мы поможем вам выразить ваши чувства самым прекрасным образом.
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-center mb-4">С любовью и заботой ❤️, Команда Nazdar</h2>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-center mb-4">Контакты</h2>
                    <p className="text-lg text-gray-700 text-center">
                        Телефон: +7 (702) 505-99-00<br/>
                    </p>
                </div>
            </div>
        </div>
    );
}