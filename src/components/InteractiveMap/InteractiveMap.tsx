/* eslint-disable @typescript-eslint/no-unused-vars */
import useGetGeoJson from '@root/hooks/useGetGeoJson'
import { DistrictProperties, Feature, StateProperties } from '@root/types/geojson'
import * as d3 from 'd3'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const InteractiveMap = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const gRef = useRef<SVGGElement>(null)

  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null)

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

  // setup resize observer
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight || 600, // fallback height
        })
      }
    }

    window.addEventListener('resize', updateDimensions)
    updateDimensions()

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const resetView = () => {
    if (!svgRef.current || !gRef.current) return

    const svg = d3.select(svgRef.current)
    const g = d3.select(gRef.current)

    setSelectedState(null)
    setSelectedDistrict(null)

    g.selectAll('.state').transition().duration(200).attr('fill', '#e2e8f0')
    g.selectAll('.district').remove()

    svg
      .transition()
      .duration(750)
      .call(
        zoom.transform,
        d3.zoomIdentity,
        d3.zoomTransform(svgRef.current).invert([dimensions.width / 2, dimensions.height / 2]),
      )
  }

  const pathGenerator = useMemo(() => {
    const projection = d3
      .geoMercator()
      .center([109, 4]) // Center on Malaysia
      .scale(2000 * (dimensions.width / 800)) // Adjust scale based on width relative to base 800
      .translate([dimensions.width / 2, dimensions.height / 2])

    const path = d3.geoPath().projection(projection)
    return path
  }, [dimensions])

  const zoom = useMemo(() => {
    return d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on('zoom', (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        if (!gRef.current) return
        const { transform } = event
        d3.select(gRef.current).attr('transform', transform.toString())
        d3.select(gRef.current).attr('stroke-width', 1 / transform.k)
      })
  }, [])

  const getTranslationAndScale = useCallback(
    (d: Feature<StateProperties | DistrictProperties>) => {
      const bounds = pathGenerator.bounds(d)
      const dx = bounds[1][0] - bounds[0][0]
      const dy = bounds[1][1] - bounds[0][1]
      const x = (bounds[0][0] + bounds[1][0]) / 2
      const y = (bounds[0][1] + bounds[1][1]) / 2
      const scale = Math.min(8, 0.9 / Math.max(dx / dimensions.width, dy / dimensions.height))
      const translate = [dimensions.width / 2 - scale * x, dimensions.height / 2 - scale * y]
      return { translate, scale }
    },
    [dimensions, pathGenerator],
  )

  const onClickState = useCallback(
    (event: React.MouseEvent<SVGPathElement, MouseEvent>, d: Feature<StateProperties>) => {
      event.stopPropagation()
      if (!svgRef.current || !gRef.current) return

      const svg = d3.select(svgRef.current)
      const g = d3.select(gRef.current)
      const stateName = d.properties.NAME_1

      setSelectedState(stateName)
      setSelectedDistrict(null)

      g.selectAll('.state').transition().duration(200).attr('fill', '#e2e8f0')
      d3.select(event.currentTarget).transition().duration(200).attr('fill', '#4a9eff')

      const { translate, scale } = getTranslationAndScale(d)

      svg
        .transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale))
    },
    [zoom, getTranslationAndScale],
  )

  const onDistrictClick = useCallback(
    (event: React.MouseEvent<SVGPathElement, MouseEvent>, d: Feature<DistrictProperties>) => {
      event.stopPropagation()
      if (!svgRef.current || !gRef.current) return

      const svg = d3.select(svgRef.current)
      const g = d3.select(gRef.current)
      const districtName = d.properties.NAME_2

      setSelectedDistrict(districtName)

      g.selectAll('.district').transition().duration(200).attr('fill', '#e2e8f0')
      d3.select(event.currentTarget).transition().duration(200).attr('fill', '#4a9eff')

      const { translate, scale } = getTranslationAndScale(d)

      svg
        .transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale))
    },
    [zoom, getTranslationAndScale],
  )

  useEffect(() => {
    if (!svgRef.current || !gRef.current) return

    const svg = d3.select(svgRef.current)
    const g = d3.select(gRef.current)

    svg.call(zoom)

    if (stateData?.features) {
      g.selectAll<SVGPathElement, Feature<StateProperties>>('.state')
        .data(stateData.features, (d) => d.properties.GID_1 || d.properties.NAME_1)
        .join(
          (enter) =>
            enter
              .append('path')
              .attr('class', 'state')
              .attr('d', pathGenerator)
              .attr('fill', '#e2e8f0')
              .attr('stroke', '#64748b')
              .attr('cursor', 'pointer'),
          (update) => update.attr('d', pathGenerator), // Update path on resize
        )
        .on('click', (event, d) => {
          onClickState(event, d)
        })
        .on('mouseover', function () {
          if (d3.select(this).attr('class').includes('active')) return
          d3.select(this).transition().duration(200).attr('fill', '#93c5fd')
        })
        .on('mouseout', function (event, d) {
          const isSelected = d.properties.NAME_1 === selectedState
          d3.select(this)
            .transition()
            .duration(200)
            .attr('fill', isSelected ? '#4a9eff' : '#e2e8f0')
        })
    }
  }, [selectedState, stateData, pathGenerator, zoom, onClickState])

  // Re-center map when dimensions change
  useEffect(() => {
    if (!svgRef.current || !stateData || !districtData) return

    const svg = d3.select(svgRef.current)

    // Case 1: District Selected - Re-center on district
    if (selectedDistrict) {
      const feature = districtData.features.find((f) => f.properties.NAME_2 === selectedDistrict)
      console.log({ feature, selectedDistrict })
      if (feature) {
        const { translate, scale } = getTranslationAndScale(feature)
        console.log({ translate, scale, selectedDistrict })
        svg.call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale))
      }
      return
    }

    // Case 2: State Selected - Re-center on state
    if (selectedState) {
      const feature = stateData.features.find((f) => f.properties.NAME_1 === selectedState)
      console.log({ feature, selectedState })
      if (feature) {
        const { translate, scale } = getTranslationAndScale(feature)
        console.log({ translate, scale, selectedState })
        svg.call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale))
      }
      return
    }
  }, [getTranslationAndScale])

  // Handling "Selected State" -> Show Districts
  useEffect(() => {
    if (!selectedState || !districtData || !gRef.current) {
      // if no state selected, remove districts
      d3.select(gRef.current).selectAll('.district').remove()
      return
    }

    const g = d3.select(gRef.current)
    const districts = districtData.features.filter((d) => d.properties.NAME_1 === selectedState)

    g.selectAll<SVGPathElement, Feature<DistrictProperties>>('.district')
      .data(districts, (d) => d.properties.GID_2 || d.properties.NAME_2)
      .join(
        (enter) =>
          enter
            .append('path')
            .attr('class', 'district')
            .attr('d', pathGenerator)
            .attr('fill', '#e2e8f0')
            .attr('stroke', '#64748b')
            .attr('cursor', 'pointer')
            .attr('vector-effect', 'non-scaling-stroke')
            .attr('stroke-width', 0.5)
            .style('opacity', 0)
            .call((enter) => enter.transition().duration(500).style('opacity', 1)),
        (update) => update.attr('d', pathGenerator),
        (exit) => exit.remove(),
      )
      .on('click', (event, d) => {
        onDistrictClick(event, d)
      })
      .on('mouseover', function () {
        d3.select(this).attr('fill', '#93c5fd')
      })
      .on('mouseout', function (event, d) {
        d3.select(this).attr('fill', '#e2e8f0')
      })
  }, [selectedState, selectedDistrict, districtData, pathGenerator, onDistrictClick])

  return (
    <div ref={containerRef} className="relative h-svh w-full overflow-hidden bg-slate-50">
      {stateLoading || districtLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-slate-400">Loading Map...</span>
        </div>
      ) : null}

      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="h-full w-full"
        onClick={resetView}
      >
        <g ref={gRef}></g>
      </svg>

      <div className="absolute top-4 right-4 rounded bg-white/90 p-2 text-xs text-black shadow backdrop-blur">
        <p>State: {selectedState || 'None'}</p>
        <p>District: {selectedDistrict || 'None'}</p>
      </div>
    </div>
  )
}

export default InteractiveMap
