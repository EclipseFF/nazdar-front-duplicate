import Image from "next/image";
import PromoSlider from "@/components/PromoSlider";
import ItemCard from "@/components/shop/ItemCard";
import ItemList from "@/components/shop/ItemList";
import Filters from "@/components/shop/Filter";
import {Suspense} from "react";

export default function Home() {
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
