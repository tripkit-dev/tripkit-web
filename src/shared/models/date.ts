export const dateModels: Date[] = [
  {
    key: 'Mon',
    label: '월'
  },
  {
    key: 'Tue',
    label: '화'
  },
  {
    key: 'Wed',
    label: '수'
  },
  {
    key: 'Thu',
    label: '목'
  },
  {
    key: 'Fri',
    label: '금'
  },
  {
    key: 'Sat',
    label: '토'
  },
  {
    key: 'Sun',
    label: '일'
  }
]

export const hourModels: string[] = Array(12)
  .fill(null)
  .map((_, idx) => {
    const hour = idx + 1

    return hour >= 10 ? String(hour) : `0${hour}`
  })

export const minuteModels: string[] = Array(12)
  .fill(null)
  .map((_, idx) => {
    const hour = idx * 5

    return hour >= 10 ? String(hour) : `0${hour}`
  })

interface Date {
  key: string
  label: string
}
