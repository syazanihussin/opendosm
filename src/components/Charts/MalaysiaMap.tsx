/* eslint-disable @typescript-eslint/no-explicit-any */
import { scaleLinear } from 'd3-scale'
import React from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'

// Malaysia TopoJSON URL
const GEO_URL = 'https://raw.githubusercontent.com/samateja/D3topoJson/master/malaysia.json'

interface MalaysiaMapProps {
  data: Record<string, any>[]
  onStateClick: (stateName: string) => void
  selectedState: string | null
}

const MalaysiaMap: React.FC<MalaysiaMapProps> = ({ data, onStateClick, selectedState }) => {
  // Calculate domain for color scale
  const maxVal = Math.max(...data.map((d) => d.value || 0))

  const colorScale = scaleLinear<string>().domain([0, maxVal]).range(['#E2E8F0', '#3B82F6'])

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg w-full h-[500px]">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Population Distribution Map</h3>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 3000,
          center: [109, 4], // Center roughly on Malaysia
        }}
        className="w-full h-full"
      >
        <ZoomableGroup>
          <Geographies geography={GEO_URL}>
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
