export interface Plan {
  detail: detail[]
}

interface detail {
  name: string
  category: string
  img: string
  time: string
  transportation?: 'bus' | 'taxi' | 'train'
}
