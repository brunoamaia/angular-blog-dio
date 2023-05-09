export type ApiBody = {
  title: string
  description: string
  links: string
  datetime: string
  date: string
  time: string
}

type StructuredImages = {
  main: string;
  thumbnail: string
}

export type NewsBody = {
  id: number
  tipo: string
  titulo: string
  introducao: string
  data_publicacao: string
  produto_id: number
  produtos: string
  editorias: string
  imagens: string
  structuredImages: StructuredImages
  produtos_relacionados: string
  destaque: boolean
  link: string
}

export type ImageContent = {
  image_fulltext: string
  image_intro: string
}

export type ResponseIBGE = {
  count: number,
  page: number,
  totalPages: number,
  nextPage: number,
  previousPage: number,
  showingFrom: number,
  showingTo: number,
  items: NewsBody[]
}



