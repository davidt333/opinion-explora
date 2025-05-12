export interface Card {
  id: string
  title: string
  image: string
  description: string
  phases: {
    antes: {
      title: string
      description: string
    }
    durante: {
      title: string
      description: string
    }
    despues: {
      title: string
      description: string
    }
  }
}

export interface AudioCard {
  id: string
  title: string
  image: string
  audioSrc: string
}
