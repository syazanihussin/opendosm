'use client'

import { InteractiveMap } from '@root/components'
import useGetDataset from '@root/hooks/useGetDataset'
import { DatasetId } from '@root/types/dataset.types'
import React, { useEffect, useState } from 'react'

const Households = () => {
  const [datasetId, setDatasetId] = useState<DatasetId>('hh_income')
  const [date, setDate] = useState<string>()
  const [state, setState] = useState<string>()
  const [district, setDistrict] = useState<string>()

  const { data, isLoading, error } = useGetDataset({ id: datasetId, date, state, district })

  useEffect(() => {
    // refetch with filter after 10 seconds
    setTimeout(() => {
      setDatasetId('hh_income_district')
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

  return (
    <>
      <div>Households1111</div>
      <InteractiveMap />
    </>
  )
}

export default Households
