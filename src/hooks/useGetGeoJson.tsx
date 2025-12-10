'use client'

import {
  DistrictProperties,
  GetGeoJsonProps,
  GetGeoJsonResponse,
  StateProperties,
} from '@root/types/geojson'
import { get } from '@root/utils/crud'
import { useQuery } from '@tanstack/react-query'

const useGetGeoJson = <P extends StateProperties | DistrictProperties>(props: GetGeoJsonProps) => {
  const { filename } = props

  return useQuery<GetGeoJsonResponse<P>, Error>({
    queryKey: [filename],
    queryFn: () => get<GetGeoJsonResponse<P>>(filename, '/assets/geojson/'),
    staleTime: Infinity,
  })
}

export default useGetGeoJson
