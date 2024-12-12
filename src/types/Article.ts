export interface IArticle {
  count: number
  next: string
  previous: null
  results: Result[]
}

export interface IResult {
  id: number
  title: string
  url: string
  image_url: string
  news_site: string
  summary: string
  published_at: Date
  updated_at: Date
  featured: boolean
  launches: Launch[]
  events: any[]
}

export interface ILaunch {
  launch_id: string
  provider: string
}
