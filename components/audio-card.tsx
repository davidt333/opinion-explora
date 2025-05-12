"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"
import type { AudioCard as AudioCardType } from "@/types"

interface AudioCardProps {
  audioCard: AudioCardType
}

export default function AudioCard({ audioCard }: AudioCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={audioCard.image || "/placeholder.svg"}
            alt={audioCard.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{audioCard.title}</h3>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <audio ref={audioRef} src={audioCard.audioSrc} onEnded={() => setIsPlaying(false)} className="hidden" />
        <Button
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pausar audio" : "Reproducir audio"}
          className="w-full"
        >
          {isPlaying ? (
            <>
              <Pause className="mr-2 h-4 w-4" />
              Pausar
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Reproducir
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
