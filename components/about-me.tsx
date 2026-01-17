import { Phone } from "lucide-react";
import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="pt-5 pb-10 md:px-5 md:py-1 max-w-5xl mx-auto" id="about-me">

            <Title title="Sobre mi" subtitle="Conóceme" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    {/* CAROUSEL */}
                    <Carousel
                        opts={{
                            align: "start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={data.url}
                                            alt="Image"
                                            width={250} height={400}
                                            className="w-full h-auto rounded-lg" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4"
                    >
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 
                        rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8"> Ingeniero en Ciencias de la Computación | Desarrollador Full Stack

Especializado en la creación de soluciones digitales eficientes que alinean la experiencia del usuario con los objetivos de negocio. Cuento con experiencia sólida desarrollando aplicaciones móviles y sistemas web completos, integrando tecnologías de Frontend (React, Flutter) y Backend (Python, PHP, SQL Server).

Mi enfoque se centra en el pensamiento analítico y la resolución de problemas técnicos complejos, desde la gestión de bases de datos hasta el despliegue en entornos de nube como Render y Railway. Me caracterizo por mi capacidad de liderazgo, comunicación efectiva y una búsqueda constante de marcos de trabajo que optimicen el desarrollo y aporten valor real al proyecto.
                        
                    </p>

                   
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
