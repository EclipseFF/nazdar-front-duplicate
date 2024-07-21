import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";

export default function PromoSlider(){
    return (
        <div className="w-[900px]">
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