'use client'

import { useQuery } from '@tanstack/react-query'

import { GetDatasetProps, GetDatasetResponse } from '@/types/dataset.types'
import { getDatasetQueryString } from '@/utils/commonFunction'
import { get } from '@/utils/crud'

const useGetDataset = <T,>(props: GetDatasetProps) => {
  const queryString = getDatasetQueryString(props)

  return useQuery<GetDatasetResponse<T>, Error>({
    queryKey: ['dataset', props.id, props.date, props.state, props.district],
    queryFn: () => get<GetDatasetResponse<T>>(queryString),
    enabled: !!props.id, // only run if id is provided
  })
}

export default useGetDataset
