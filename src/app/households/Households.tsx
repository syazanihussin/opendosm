'use client'

import React, { useEffect, useState } from 'react'

import useGetIncome from './hooks/useGetIncome'

const Households = () => {
  const [date, setDate] = useState<string>()
  const [state, setState] = useState<string>()
  const [district, setDistrict] = useState<string>()

  const { data, isLoading, error } = useGetIncome({ date, state, district })

  useEffect(() => {
    // refetch with filter after 10 seconds
    setTimeout(() => {
      setDate('2022-01-01')
      setState('Kedah')
      setDistrict('Baling')
    }, 10000)
  }, [])

  useEffect(() => {
    if (data) {
      console.log('Incomes:', data)
    } else if (error) {
      console.error('Error getting incomes:', error)
    } else if (isLoading) {
      console.log('Loading incomes...')
    }
  }, [data, isLoading, error])

  return <div>Households</div>
}

export default Households
