'use client'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import {clsx} from "clsx";

export default function PromoSlider(){
    return (
        <div className={clsx("w-full max-w-[300px] mx-auto md:max-w-[900px]")} id="promo-slider">
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <div className="flex items-center justify-center p-4 md:p-6">
                            <Image
                                src={'/temp/slider.png'}
                                alt={"Акция"}
                                width={825}
                                height={270}
                                className="w-full h-auto"
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex items-center justify-center p-4 md:p-6">
                            <Image
                                src={'/temp/slider.png'}
                                alt={"Акция"}
                                width={825}
                                height={270}
                                className="w-full h-auto"
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex items-center justify-center p-4 md:p-6">
                            <Image
                                src={'/temp/slider.png'}
                                alt={"Акция"}
                                width={825}
                                height={270}
                                className="w-full h-auto"
                            />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}