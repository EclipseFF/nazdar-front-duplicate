import Image from "next/image";
import PromoSlider from "@/components/PromoSlider";
import ItemCard from "@/components/shop/ItemCard";
import ItemList from "@/components/shop/ItemList";
import Filters from "@/components/shop/Filter";
import {Suspense} from "react";
import {cookies} from "next/headers";
import ContactUsButton from "@/components/ContactUsButton";

export default function Home() {
  const userToken = cookies().get("token")?.value

  return (
      <div className="max-w-[410px] md:max-w-full bg-white grid grid-cols-1 justify-items-center">
        <PromoSlider />
          <Suspense>
            <Filters />
          </Suspense>
          <ItemList token={userToken} />
          <ContactUsButton />
      </div>
  )
}
