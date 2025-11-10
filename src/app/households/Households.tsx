import React, { useEffect } from 'react'

import useFetchIncomes from './hooks/useFetchIncome'

const Households = () => {
  const { incomes, isLoading, error } = useFetchIncomes()

  useEffect(() => {
    if (incomes) {
      console.log('Fetched incomes:', incomes)
    } else if (error) {
      console.error('Error fetching incomes:', error)
    } else if (isLoading) {
      console.log('Loading incomes...')
    }
  }, [incomes, isLoading, error])

  return <div>Households</div>
}

export default Households
