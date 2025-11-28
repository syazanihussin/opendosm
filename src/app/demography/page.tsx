/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import { Card } from '@root/components'
import MalaysiaMap from '@root/components/Charts/MalaysiaMap'
import PopulationChart from '@root/components/Charts/PopulationChart'
import useGetDataset from '@root/hooks/useGetDataset'
import { PopulationDistrict, PopulationState } from '@root/types/demography/population.types'
import { useEffect, useState } from 'react'

const DemographyPage = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [latestYear, setLatestYear] = useState<number>(0)
  const [currentYearData, setCurrentYearData] = useState<PopulationState[]>([])
  const [currentDistrictData, setCurrentDistrictData] = useState<PopulationDistrict[]>([])
  const [sortedData, setSortedData] = useState<PopulationState[] | PopulationDistrict[]>([])
  const [totalPopulation, setTotalPopulation] = useState<number>(0)
  const [mapData, setMapData] = useState<{ state: string; value: number; district?: string }[]>([])
  const [chartData, setChartData] = useState<PopulationState[] | PopulationDistrict[]>([])

  const { data: populationData, isLoading: isLoadingState } = useGetDataset<PopulationState>({
    id: 'population_state',
  })

  const { data: districtData, isLoading: isLoadingDistrict } = useGetDataset<PopulationDistrict>({
    id: 'population_district',
  })

  const isLoading = isLoadingState || isLoadingDistrict

  useEffect(() => {
    if (populationData) {
      console.log({ populationData, districtData })
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

    if (districtData && latestYear) {
      const currentDistricts = districtData.filter(
        (d: PopulationDistrict) =>
          d.date.includes('2020') &&
          d.sex === 'both' &&
          d.ethnicity === 'overall' &&
          d.age === 'overall',
      )
      console.log('Setting current district data:', currentDistricts)
      setCurrentDistrictData(currentDistricts)
    }
  }, [populationData, districtData, latestYear])

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
      const stateDistricts = currentDistrictData.filter((d) => d.state === selectedState)
      const sortedDistricts = [...stateDistricts].sort((a, b) => b.population - a.population)

      console.log('Setting chart data (districts):', sortedDistricts)
      setChartData(sortedDistricts)

      const map = stateDistricts.map((d) => ({
        state: d.state,
        district: d.district,
        value: d.population,
      }))
      setMapData(map)
    } else {
      console.log('Setting chart data (all):', sortedData)
      setChartData(sortedData)

      const map = currentYearData.map((d) => ({
        state: d.state,
        value: d.population,
      }))
      setMapData(map)
    }
  }, [selectedState, sortedData, currentDistrictData, currentYearData])

  const handleStateClick = (stateName: string) => {
    setSelectedState((prev) => (prev === stateName ? null : stateName))
  }

  return (
    <div className="min-h-screen space-y-8 bg-gray-50 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Demography Overview</h1>
          <p className="mt-1 text-gray-500">
            Population statistics and distribution across Malaysia
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <span className="font-bold text-blue-600">Latest Data: {latestYear}</span>
        </div>
      </div>

      <div>
        <div>sdsds</div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <div className="p-4">
            <h3 className="mb-1 font-medium text-gray-500">Total Population</h3>
            <p className="text-3xl font-bold text-gray-900">
              {totalPopulation ? (totalPopulation / 1000).toFixed(1) + 'M' : 'Loading...'}
            </p>
            <p className="mt-2 flex items-center text-sm text-green-600">
              <span className="rounded-full bg-green-100 px-2 py-0.5">Live Estimate</span>
            </p>
          </div>
        </Card>

        {selectedState && (
          <Card>
            <div className="p-4">
              <h3 className="mb-1 font-medium text-gray-500">Selected State</h3>
              <p className="text-3xl font-bold text-gray-900">{selectedState}</p>
              <p className="mt-2 flex items-center text-sm text-blue-600">
                <span className="rounded-full bg-blue-100 px-2 py-0.5">
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
        <div className="flex h-96 items-center justify-center rounded-xl bg-white shadow-sm">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="lg:col-span-1">
            <MalaysiaMap data={mapData} onStateClick={handleStateClick} selectedState={''} />
          </div>
          <div className="lg:col-span-1">
            <MalaysiaMap data={mapData} onStateClick={() => {}} selectedState={'Johor'} />
          </div>
          <div className="lg:col-span-1">
            <PopulationChart
              title={selectedState ? `Population: ${selectedState}` : 'Population by State'}
              data={chartData || []}
              dataKey="population"
              xAxisKey={selectedState ? 'district' : 'state'}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default DemographyPage
