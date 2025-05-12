import Image from 'next/image';
import CardItem from '@/components/card-item';
import { cards } from '@/data';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Image */}
      <div className="relative w-full h-[calc(100vh-4rem)]">
        <Image
          src="/parque_explora_medellin.JPG"
          alt="Opinion Explora Hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Opinion Explora
            </h1>
            <p className="text-xl md:text-2xl">
              Explora y descubre el mundo natural
            </p>
          </div>
        </div>
      </div>
      {/* Description Section */}
      <p className="container pt-12 self-center px-3 max-w-[60ch] md:px-8 text-2xl">
        El Parque Explora es un museo interactivo de ciencias, un planetario, un
        taller público de experimentación —Exploratorio— y un acuario educativo
        orientado a la conservación y al bienestar animal, que protege numerosas
        especies víctimas tráfico. Es un gran refugio ante la tragedia animal y
        con su labor rompe la cadena de dolor garantizando nuevas posibilidades
        a la vida amenazada. Las autoridades ambientales reportan que más del 90
        % de estas especies traficadas no sobrevive.
      </p>
      <br />
      <p className="container self-center max-w-[60ch] px-3 md:px-8 text-2xl">
        Está ubicado en la zona norte de la ciudad, que albergaba el antiguo
        basurero y que pasó del estigma a ser hoy un vigoroso lugar de encuentro
        social y un símbolo de transformación social desde la educación.
      </p>

      {/* Cards Section */}
      <section className="container py-12 self-center px-3 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Explora Nuestras Exhibiciones
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
}
