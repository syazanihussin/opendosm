import axios from 'axios'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await axios.get(url)
  return res.data
}

const useFetchIncome = () => {
  const { data, isLoading, error } = useSWR(
    `https://api.data.gov.my/data-catalogue?id=hh_income_state`,
    fetcher,
  )

  return { incomes: data, isLoading, error }
}

export default useFetchIncome
