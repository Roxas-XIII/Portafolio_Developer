import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "./ui/button";

import Container from "./shared/container";

const Introduction = () => {
    return (
        <Container>
                <div className="text-center" id="home">
                    <h3 className="text-xl mb-3">Hello I´m</h3>
                    <h1 className="text-4xl font-bold mb-3">Joseph Mora Quimis 🧑🏽‍💻</h1>
                    <h2 className="text-2xl text-gray-400">Desarrollador Full Stack con visión comercial. Especializado en crear soluciones digitales eficientes que conectan las necesidades del usuario con los objetivos del negocio</h2>
                </div>

            <div className="flex items-center">
                <div className="flex flex-col md:flex-row gap-4 justify-between mt-6 mx-auto">
                    <Link className={buttonVariants()} href="#contact">
                    <Mail className="mr-2" /> Contacta conmigo
                    </Link>

                    <Link
                    className={buttonVariants({ variant: 'secondary' })}
                    href="/CV_Joseph_Mora Quimis.pdf"
                    target="_blank"
                    >
                    <Paperclip className="mr-2" /> Descargar CV
                    </Link>
                </div>
                </div>

                    <div className="flex justify-center mt-6 mb-0">
                    <Image src="/yo.png" alt="Profile pic" width={200} height={200} className="rounded-lg shadow-lg" />
                    </div>
        </Container>
        
    );
}

export default Introduction;
