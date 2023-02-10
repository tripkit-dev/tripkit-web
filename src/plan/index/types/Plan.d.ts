export interface Plan {
  details: PlanDetail[]
}

export interface PlanDetail {
  id: number
  name: string
  category: string
  img: string
  startTime?: number
  endTime?: number
  transportation?: 'bus' | 'taxi' | 'train'
}
