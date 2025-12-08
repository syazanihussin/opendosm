/* eslint-disable @typescript-eslint/no-unused-vars */
import useGetGeoJson from '@root/hooks/useGetGeoJson'
import { DistrictProperties, StateProperties } from '@root/types/geojson'
import React, { useEffect, useRef } from 'react'

const InteractiveMap = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)

  const {
    data: stateData,
    error: stateError,
    isLoading: stateLoading,
  } = useGetGeoJson<StateProperties>({ filename: 'malaysia-state.json' })

  const {
    data: districtData,
    error: districtError,
    isLoading: districtLoading,
  } = useGetGeoJson<DistrictProperties>({ filename: 'malaysia-district.json' })

  useEffect(() => {
    if (!stateLoading && !districtLoading) {
      console.log(stateData, districtData)
    }
  }, [stateLoading, districtLoading, stateData, districtData])

  return (
    <div>
      <p>Interactive map component</p>
      <svg ref={svgRef} width={1200} height={800}></svg>
    </div>
  )
}

export default InteractiveMap
