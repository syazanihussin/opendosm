/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import useGetGeoJson from '@root/hooks/useGetGeoJson'
import { DistrictProperties, Feature, StateProperties } from '@root/types/geojson'
import * as d3 from 'd3'
import React, { useEffect, useRef, useState } from 'react'

import { SVGSelection } from './InteractiveMap.types'

const InteractiveMap = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)

  const width = 800
  const height = 600

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

  const onZoom = (event: d3.D3ZoomEvent<SVGSVGElement, unknown>, g: SVGSelection<SVGGElement>) => {
    const { transform } = event

    console.log('Zoom changed:', transform)

    g.attr('transform', transform.toString())
    g.attr('stroke-width', 1 / transform.k)
  }

  const onReset = (
    svg: SVGSelection<SVGSVGElement>,
    zoom: d3.ZoomBehavior<SVGSVGElement, unknown>,
    g: SVGSelection<SVGGElement>,
    path: d3.GeoPath<any, any>,
  ) => {
    const svgNode = svg.node()
    if (!svgNode) {
      return
    }
    svg
      .transition()
      .duration(750)
      .call(
        zoom.transform,
        d3.zoomIdentity,
        d3.zoomTransform(svgNode).invert([width / 2, height / 2]),
      )

    // Draw states
    g.selectAll<SVGPathElement, Feature<StateProperties>>('.state')
      .data(stateData?.features || [])
      .join('path')
      .attr('d', path)
      .attr('class', 'state')
      .attr('fill', '#e2e8f0')
      .attr('stroke', '#64748b')
      .attr('cursor', 'pointer')
      .on('mouseover', onMouseOver)
      .on('mouseout', onMouseOut)
      .on('click', (event, d) => {
        console.log('State clicked')
        onClickState(event, d, g, path, svg, zoom)
      })

    // Hide districts
    g.selectAll('.district').remove()
  }

  const onMouseOver = (event: MouseEvent) => {
    const path = event.currentTarget as SVGPathElement
    d3.select(path).transition().duration(200).attr('fill', '#4a9eff')
  }

  const onMouseOut = (event: MouseEvent) => {
    const path = event.currentTarget as SVGPathElement
    d3.select(path).transition().duration(200).attr('fill', '#e2e8f0')
  }

  const onClickState = (
    event: MouseEvent,
    d: Feature<StateProperties>,
    g: SVGSelection<SVGGElement>,
    path: d3.GeoPath<any, any>,
    svg: SVGSelection<SVGSVGElement>,
    zoom: d3.ZoomBehavior<SVGSVGElement, unknown>,
  ) => {
    event.stopPropagation()

    setSelectedState(d.properties.NAME_1)

    // Reset all states
    g.selectAll('.state').transition().duration(200).attr('fill', '#e2e8f0')

    // Highlight selected state
    const statePath = event.currentTarget as SVGPathElement
    d3.select(statePath).transition().duration(200).attr('fill', '#4a9eff')

    // Zoom to state
    const bounds = path.bounds(d)
    const dx = bounds[1][0] - bounds[0][0]
    const dy = bounds[1][1] - bounds[0][1]
    const x = (bounds[0][0] + bounds[1][0]) / 2
    const y = (bounds[0][1] + bounds[1][1]) / 2
    const scale = Math.min(8, 0.9 / Math.max(dx / width, dy / height))
    const translate = [width / 2 - scale * x, height / 2 - scale * y]

    svg
      .transition()
      .duration(750)
      .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale))

    // Show districts
    const filteredDistrictData = districtData?.features.filter(
      (data) => data.properties.NAME_1 === d.properties.NAME_1,
    )
    const districtPaths = g
      .selectAll<SVGPathElement, Feature<DistrictProperties>>('.district')
      .data(filteredDistrictData || [])

    districtPaths
      .join('path')
      .attr('class', 'district')
      .attr('d', (d) => path(d) || '')
      .attr('fill', '#e2e8f0')
      .attr('stroke', '#64748b')
      .attr('cursor', 'pointer')
      .on('mouseover', onMouseOver)
      .on('mouseout', onMouseOut)
      .on('click', function (event: MouseEvent, d: Feature<DistrictProperties>) {
        event.stopPropagation()
        setSelectedDistrict(d.properties.NAME_1)
        // Zoom into clicked district
        const bounds = path.bounds(d)
        const dx = bounds[1][0] - bounds[0][0]
        const dy = bounds[1][1] - bounds[0][1]
        const x = (bounds[0][0] + bounds[1][0]) / 2
        const y = (bounds[0][1] + bounds[1][1]) / 2
        const scale = Math.min(8, 0.9 / Math.max(dx / width, dy / height))
        const translate = [width / 2 - scale * x, height / 2 - scale * y]

        svg
          .transition()
          .duration(750)
          .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale))
      })
      .merge(districtPaths)

    g.selectAll('.state').remove()
  }

  useEffect(() => {
    if (!stateLoading && !districtLoading && svgRef.current) {
      console.log(stateData, districtData)

      const svg = d3.select(svgRef.current)

      // Styling
      svg.style('background-color', '#ffffff')

      // Clear previous contents
      svg.selectAll('*').remove()

      const g = svg.append('g')

      // Setup zoom behavior
      const zoom = d3
        .zoom<SVGSVGElement, unknown>()
        .scaleExtent([1, 8])
        .on('zoom', (event) => {
          onZoom(event, g)
        })
      svg.call(zoom)

      // Reset zoom level upon clicking on the SVG background
      svg.on('click', () => {
        console.log('SVG clicked')
        onReset(svg, zoom, g, path)
      })

      const projection = d3
        .geoMercator()
        .center([109, 4])
        .scale(2000)
        .translate([width / 2, height / 2])

      const path = d3.geoPath().projection(projection)

      // Draw states
      g.selectAll<SVGPathElement, Feature<StateProperties>>('.state')
        .data(stateData?.features || [])
        .join('path')
        .attr('d', path)
        .attr('class', 'state')
        .attr('fill', '#e2e8f0')
        .attr('stroke', '#64748b')
        .attr('cursor', 'pointer')
        .on('mouseover', onMouseOver)
        .on('mouseout', onMouseOut)
        .on('click', (event, d) => {
          console.log('State clicked')
          onClickState(event, d, g, path, svg, zoom)
        })
    }
  }, [stateLoading, districtLoading, stateData, districtData])

  return (
    <div>
      <p>Interactive map component</p>
      <svg ref={svgRef} width={width} height={height}></svg>
    </div>
  )
}

export default InteractiveMap
