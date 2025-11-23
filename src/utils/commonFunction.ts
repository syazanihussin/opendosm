import { GetDatasetProps } from '@root/types/dataset.types'

export const getDatasetQueryString = ({ id, date, state, district }: GetDatasetProps) => {
  const filters: string[] = []

  if (date) {
    filters.push(`&ifilter=${date}@date`)
  }
  if (state) {
    filters.push(`&ifilter=${state}@state`)
  }
  if (district) {
    filters.push(`&ifilter=${district}@district`)
  }

  const filterString = filters.length ? filters.join() : ''
  const queryString = `?id=${id}${filterString}`

  return queryString
}
