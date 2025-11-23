/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import { Card } from '@root/components'
import MalaysiaMap from '@root/components/Charts/MalaysiaMap'
import PopulationChart from '@root/components/Charts/PopulationChart'
import useGetDataset from '@root/hooks/useGetDataset'
import { PopulationState } from '@root/types/demography/population.types'
import { useEffect, useState } from 'react'

const DemographyPage = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [latestYear, setLatestYear] = useState<number>(0)
  const [currentYearData, setCurrentYearData] = useState<PopulationState[]>([])
  const [sortedData, setSortedData] = useState<PopulationState[]>([])
  const [totalPopulation, setTotalPopulation] = useState<number>(0)
  const [mapData, setMapData] = useState<{ state: string; value: number }[]>([])
  const [chartData, setChartData] = useState<PopulationState[]>([])

  const { data: populationData, isLoading } = useGetDataset<PopulationState>({
    id: 'population_state',
  })

  useEffect(() => {
    if (populationData) {
      console.log({ populationData })
      const year = Math.max(...populationData.map((d: PopulationState) => parseInt(d.date)))
      console.log('Setting latest year:', year)
      setLatestYear(year)

      const currentData = populationData.filter(
        (d: PopulationState) =>
          d.date.includes(year.toString()) &&
          d.sex === 'overall_sex' &&
          d.ethnicity === 'overall_ethnicity' &&
          d.age === 'overall_age',
      )
      console.log('Setting current year data:', currentData)
      setCurrentYearData(currentData)
    }
  }, [populationData])

  useEffect(() => {
    if (currentYearData.length > 0) {
      const sorted = [...currentYearData].sort(
        (a: PopulationState, b: PopulationState) => b.population - a.population,
      )
      console.log('Setting sorted data:', sorted)
      setSortedData(sorted)

      const total = currentYearData.reduce(
        (acc: number, curr: PopulationState) => acc + curr.population,
        0,
      )
      console.log('Setting total population:', total)
      setTotalPopulation(total)

      const map = currentYearData.map((d) => ({
        state: d.state,
        value: d.population,
      }))
      console.log('Setting map data:', map)
      setMapData(map)
    }
  }, [currentYearData])

  useEffect(() => {
    if (selectedState) {
      console.log(
        'Setting chart data (filtered):',
        sortedData.filter((d) => d.state === selectedState),
      )
      setChartData(sortedData.filter((d) => d.state === selectedState))
    } else {
      console.log('Setting chart data (all):', sortedData)
      setChartData(sortedData)
    }
  }, [selectedState, sortedData])

  const handleStateClick = (stateName: string) => {
    setSelectedState((prev) => (prev === stateName ? null : stateName))
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Demography Overview</h1>
          <p className="text-gray-500 mt-1">
            Population statistics and distribution across Malaysia
          </p>
        </div>
        <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
          <span className="text-blue-600 font-medium">Latest Data: {latestYear}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="p-4">
            <h3 className="text-gray-500 font-medium mb-1">Total Population</h3>
            <p className="text-3xl font-bold text-gray-900">
              {totalPopulation ? (totalPopulation / 1000).toFixed(1) + 'M' : 'Loading...'}
            </p>
            <p className="text-sm text-green-600 mt-2 flex items-center">
              <span className="bg-green-100 px-2 py-0.5 rounded-full">Live Estimate</span>
            </p>
          </div>
        </Card>

        {selectedState && (
          <Card>
            <div className="p-4">
              <h3 className="text-gray-500 font-medium mb-1">Selected State</h3>
              <p className="text-3xl font-bold text-gray-900">{selectedState}</p>
              <p className="text-sm text-blue-600 mt-2 flex items-center">
                <span className="bg-blue-100 px-2 py-0.5 rounded-full">
                  {(
                    (currentYearData?.find((d) => d.state === selectedState)?.population || 0) /
                    1000
                  ).toFixed(1)}
                  M
                </span>
              </p>
            </div>
          </Card>
        )}
      </div>

      {isLoading ? (
        <div className="h-96 flex items-center justify-center bg-white rounded-xl shadow-sm">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <MalaysiaMap
              data={mapData}
              onStateClick={handleStateClick}
              selectedState={selectedState}
            />
          </div>
          <div className="lg:col-span-1">
            <PopulationChart
              title={selectedState ? `Population: ${selectedState}` : 'Population by State'}
              data={chartData || []}
              dataKey="population"
              xAxisKey="state"
              color="#3b82f6"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default DemographyPage
