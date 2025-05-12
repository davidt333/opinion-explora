import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Card as CardType } from '@/types';

interface CardItemProps {
  card: CardType;
}

export default function CardItem({ card }: CardItemProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-80 w-full">
          <Image
            src={card.image || '/placeholder.svg'}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{card.title}</h3>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/card/${card.id}`} passHref>
          <Button>Ver más</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
