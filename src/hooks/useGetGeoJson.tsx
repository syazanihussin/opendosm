'use client'

import { GetGeoJsonProps, GetGeoJsonResponse } from '@root/types/geojson'
import { get } from '@root/utils/crud'
import { useQuery } from '@tanstack/react-query'

const useGetGeoJson = <P,>(props: GetGeoJsonProps) => {
  const { filename } = props

  return useQuery<GetGeoJsonResponse<P>, Error>({
    queryKey: [filename],
    queryFn: () => get<GetGeoJsonResponse<P>>(filename, '/assets/geojson/'),
    staleTime: Infinity,
  })
}

export default useGetGeoJson
