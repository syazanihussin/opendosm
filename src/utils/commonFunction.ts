import { GetDatasetProps } from '@/types/dataset.types'

export const getDatasetQueryString = ({ id, date, state, district }: GetDatasetProps) => {
  const filters: string[] = []

  if (date) {
    filters.push(`${date}@date`)
  }
  if (state) {
    filters.push(`${state}@state`)
  }
  if (district) {
    filters.push(`${district}@district`)
  }

  let filterString = ''
  filters.forEach((filter: string) => {
    filterString += `&ifilter=${filter}`
  })

  return `?id=${id}${filterString}`
}
