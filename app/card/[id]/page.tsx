'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { cards } from '@/data';

type Phase = 'antes' | 'durante' | 'despues';

interface CardDetailProps {
  params: {
    id: string;
  };
}

export default function CardDetail({ params }: CardDetailProps) {
  const [activePhase, setActivePhase] = useState<Phase>('antes');

  const card = cards.find((c) => c.id === params.id);

  if (!card) {
    notFound();
  }

  // Get the content for the active phase
  const phaseContent = card.phases[activePhase];

  return (
    <div className="container py-8">
      <Link href="/" passHref>
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-[50px]">
        <div className="relative h-[400px] w-full">
          <Image
            src={card.image || '/placeholder.svg'}
            alt={card.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{phaseContent.title}</h1>

          {/* Phase selection buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={activePhase === 'antes' ? 'default' : 'outline'}
              onClick={() => setActivePhase('antes')}
              aria-pressed={activePhase === 'antes'}>
              Antes
            </Button>
            <Button
              variant={activePhase === 'durante' ? 'default' : 'outline'}
              onClick={() => setActivePhase('durante')}
              aria-pressed={activePhase === 'durante'}>
              Durante
            </Button>
            <Button
              variant={activePhase === 'despues' ? 'default' : 'outline'}
              onClick={() => setActivePhase('despues')}
              aria-pressed={activePhase === 'despues'}>
              Después
            </Button>
          </div>

          <p className="text-lg">{phaseContent.description}</p>
        </div>
      </div>
    </div>
  );
}
