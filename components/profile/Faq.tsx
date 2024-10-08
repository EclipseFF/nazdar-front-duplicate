'use client'
import {redirect} from "next/navigation";

export default function Faq(){
    return (
        <div className="p-6 bg-white">
            <h2 className="text-xl font-bold mb-4">Вопросы и ответы</h2>
            <ul className="space-y-4">
                <li>
                    <h3 className="font-semibold">Как сделать заказ?</h3>
                    <p className="text-gray-700">
                        Чтобы сделать заказ, выберите понравившийся вам букет или товар на нашем сайте, добавьте его в корзину и следуйте инструкциям для оформления заказа. Вам нужно будет указать контактную информацию, адрес доставки и выбрать способ оплаты.
                    </p>
                </li>
                <li>
                    <h3 className="font-semibold">Какие способы оплаты вы принимаете?</h3>
                    <p className="text-gray-700">
                        Мы принимаем различные способы оплаты, включая кредитные и дебетовые карты, онлайн-банкинг, и другие популярные платежные системы. Выберите наиболее удобный для вас способ оплаты на странице оформления заказа.
                    </p>
                </li>
                <li>
                    <h3 className="font-semibold">Как связаться с поддержкой?</h3>
                    <p className="text-gray-700">
                        Если у вас возникли вопросы или проблемы с заказом, вы можете связаться с нашей службой поддержки через форму обратной связи на сайте, по телефону или через мессенджеры. Мы всегда готовы помочь вам.
                    </p>
                </li>
                <li>
                    <h3 className="font-semibold">Можно ли изменить или отменить заказ?</h3>
                    <p className="text-gray-700">
                        Если вам нужно изменить или отменить заказ, пожалуйста, свяжитесь с нами как можно скорее. Мы постараемся помочь, однако изменения могут быть невозможны, если заказ уже был обработан или отправлен на доставку.
                    </p>
                </li>
                <li>
                    <h3 className="font-semibold">Предоставляете ли вы доставку в день заказа?</h3>
                    <p className="text-gray-700">
                        Да, мы предлагаем доставку в день заказа в пределах города, при условии, что заказ был оформлен до определенного времени. Пожалуйста, проверьте доступность данной услуги на странице оформления заказа.
                    </p>
                </li>
            </ul>
        </div>
    )
}