import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
  return (
    <div className="p-4 max-w-5xl md:py-10 mx-auto" id="portfolio">
      <Title title="Portfolio" subtitle="Trabajos recientes 💼" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
        {dataPortfolio.map((data) => (
          <div key={data.id} className="text-center">
            <h3 className="text-lg font-semibold mb-3 text-white">{data.title}</h3>

            {/* 🖼 Imagen con efecto hover */}
            {data.title === "App Flutter" ? (
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-neutral-900 shadow-lg">
                {/* Imagen principal */}
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-contain transition-opacity duration-500 hover:opacity-0"
                />
                {/* Imagen secundaria (la nueva que subiste) */}
                <Image
                  src="/pantalla_2.jpg"
                  alt="App Flutter - Pantalla secundaria"
                  fill
                  className="object-contain opacity-0 transition-opacity duration-500 hover:opacity-100"
                />
              </div>
            ) : (
              // Proyectos normales
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-neutral-900 shadow-lg">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-contain p-2 transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}

            {/* 🔗 Botones */}
            <div className="mt-5 flex justify-center gap-4">
              <Link
                className={buttonVariants({ variant: "outline" })}
                href={data.urlGithub}
                target="_blank"
              >
                Github
              </Link>

              <Link
                className={buttonVariants({ variant: "default" })}
                href={data.urlDemo}
                target="_blank"
              >
                Live demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
