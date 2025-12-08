'use client'

import { GeoJsonProps, GeoJsonResponse } from '@root/types/geojson/geojson.types'
import { get } from '@root/utils/crud'
import { useQuery } from '@tanstack/react-query'

const useGetGeoJson = <P,>(props: GeoJsonProps) => {
  const { filename } = props

  return useQuery<GeoJsonResponse<P>, Error>({
    queryKey: [filename],
    queryFn: () => get<GeoJsonResponse<P>>(filename, '/assets/geojson/'),
    staleTime: Infinity,
  })
}

export default useGetGeoJson
