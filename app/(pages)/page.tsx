import Image from "next/image";
import PromoSlider from "@/components/PromoSlider";
import ItemCard from "@/components/shop/ItemCard";
import ItemList from "@/components/shop/ItemList";
import Filters from "@/components/shop/Filter";
import {Suspense} from "react";
import {cookies} from "next/headers";

export default function Home() {
  //const userToken = cookies().get("token")

  return (
      <div className="bg-white grid grid-cols-1 justify-items-center">
        <PromoSlider />
          <Suspense>
            <Filters />
          </Suspense>
          <ItemList />
      </div>
  )
}
