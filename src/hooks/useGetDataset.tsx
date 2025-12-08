'use client'

import { GetDatasetProps, GetDatasetResponse } from '@root/types/dataset.types'
import { getDatasetQueryString } from '@root/utils/commonFunction'
import { get } from '@root/utils/crud'
import { useQuery } from '@tanstack/react-query'

const useGetDataset = <T,>(props: GetDatasetProps) => {
  const queryString = getDatasetQueryString(props)

  return useQuery<GetDatasetResponse<T>, Error>({
    queryKey: ['dataset', props.id, props.date, props.state, props.district],
    queryFn: () => get<GetDatasetResponse<T>>(queryString),
    enabled: !!props.id, // only run if id is provided
    staleTime: Infinity,
  })
}

export default useGetDataset
