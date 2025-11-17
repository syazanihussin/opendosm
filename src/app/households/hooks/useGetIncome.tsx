import { useQuery } from '@tanstack/react-query'

import { get } from '@/utils/crud'

import { GetIncomeProps, Incomes } from '../types/income.types'

const useGetIncome = (props: GetIncomeProps) => {
  const { date, state, district } = props

  let queryKey = '?id=hh_income_district'
  if (date) {
    queryKey += `&ifilter=${date}@date`
  }
  if (state) {
    queryKey += `&ifilter=${state}@state`
  }
  if (district) {
    queryKey += `&ifilter=${district}@district`
  }

  return useQuery<Incomes, Error>({
    queryKey: [queryKey],
    queryFn: () => get<Incomes>(queryKey),
  })
}

export default useGetIncome
