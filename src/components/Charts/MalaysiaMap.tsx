/* eslint-disable @typescript-eslint/no-explicit-any */
import { scaleLinear } from 'd3-scale'
import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'

// Malaysia TopoJSON URL
const STATE_GEO_URL = 'https://raw.githubusercontent.com/samateja/D3topoJson/master/malaysia.json'
const DISTRICT_GEO_URL =
  'https://raw.githubusercontent.com/nullifye/malaysia.geojson/master/malaysia.district.geojson'

interface MalaysiaMapProps {
  data: Record<string, any>[]
  onStateClick: (stateName: string) => void
  selectedState: string | null
}

const MalaysiaMap: React.FC<MalaysiaMapProps> = ({ data, onStateClick, selectedState }) => {
  // Calculate domain for color scale
  const maxVal = Math.max(...data.map((d) => d.value || 0))
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null)
  const colorScale = scaleLinear<string>().domain([0, maxVal]).range(['#E2E8F0', '#3B82F6'])

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg w-full h-[500px]">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        {selectedState ? `Districts of ${selectedState}` : 'Population Distribution Map'}
      </h3>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: selectedState ? 6000 : 3000,
          center: selectedState ? [109, 4] : [109, 4], // TODO: Dynamic centering for states
        }}
        className="w-full h-full"
      >
        <ZoomableGroup>
          {selectedState ? (
            <Geographies geography={DISTRICT_GEO_URL}>
              {({ geographies }: { geographies: any[] }) => {
                return geographies.map((geo: any) => {
                  const districtName = geo.properties.name
                  const districtData = data.find((d) => d.district === districtName) || {
                    value: 0,
                    district: geo.properties.name,
                    state: geo.properties.state,
                  }
                  const isSelected = districtName === selectedDistrict
                  console.log({ geo, districtData })

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => setSelectedDistrict(districtName)}
                      fill={
                        isSelected
                          ? '#F59E0B'
                          : districtData
                          ? colorScale(districtData.value)
                          : '#E2E8F0'
                      }
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#F59E0B', outline: 'none' },
                        pressed: { fill: '#D97706', outline: 'none' },
                      }}
                    />
                  )
                })
              }}
            </Geographies>
          ) : (
            <Geographies geography={STATE_GEO_URL}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => {
                  const stateName = geo.properties.name
                  const stateData = data.find((d) => d.state === stateName)
                  const isSelected = selectedState === stateName

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => onStateClick(stateName)}
                      fill={
                        isSelected ? '#F59E0B' : stateData ? colorScale(stateData.value) : '#E2E8F0'
                      }
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#F59E0B', outline: 'none', cursor: 'pointer' },
                        pressed: { fill: '#D97706', outline: 'none' },
                      }}
                    />
                  )
                })
              }
            </Geographies>
          )}
        </ZoomableGroup>
      </ComposableMap>
      <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
        <span className="mr-2">Low Population</span>
        <div className="w-24 h-2 bg-gradient-to-r from-gray-200 to-blue-500 rounded"></div>
        <span className="ml-2">High Population</span>
      </div>
    </div>
  )
}

export default MalaysiaMap
