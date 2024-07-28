'use client'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import {clsx} from "clsx";

export default function PromoSlider(){
    /*const searchParams = useSearchParams()
    const cart = searchParams.get('cart')*/
    //, cart === 'opened' ? 'opacity-50' : 'block'
    return (
        <div className={clsx("w-[900px]")} id="promo-slider">
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <div className="flex items-center justify-center p-6">
                            <Image src={'/temp/slider.png'} alt={"Акция"} width={825} height={270} />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex items-center justify-center p-6">
                            <Image src={'/temp/slider.png'} alt={"Акция"} width={825} height={270}/>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex items-center justify-center p-6">
                            <Image src={'/temp/slider.png'} alt={"Акция"} width={825} height={270}/>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}