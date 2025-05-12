import AudioCard from '@/components/audio-card';
import { audioCards } from '@/data';

export default function Audios() {
  return (
    <div className="container py-12 mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Biblioteca de Audios
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {audioCards.map((audioCard) => (
          <AudioCard key={audioCard.id} audioCard={audioCard} />
        ))}
      </div>
    </div>
  );
}
