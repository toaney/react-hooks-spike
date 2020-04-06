import React, { useEffect, useRef } from "react";
import "./StackedBarChart.scss";
import {
  select,
  scaleBand,
  axisBottom,
  axisTop,
  stack,
  max,
  scaleLinear,
  axisLeft,
  axisRight,
  stackOrderAscending
} from "d3";
import useResizeObserver from "./useResizeObserver";

/**
 * Component that renders a StackedBarChart
 */

function StackedBarChart({ data, keys, colors }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // stacks / layers
    const stackGenerator = stack()
      .keys(keys)
      .order(stackOrderAscending);
    const layers = stackGenerator(data);
    const extent = [
      0,
      max(layers, layer => max(layer, sequence => sequence[1]))
    ];

    // scales
    const xScale = scaleLinear()
      .domain(extent)
      .range([0, width]);
    
    const yScale = scaleBand()
      .domain(data.map(d => d.standard))
      .range([0, height])
      .padding(0.25);
    

    // const xScale = scaleBand()
    //   .domain(data.map(d => d.standard))
    //   .range([0, width])
    //   .padding(0.25);

    // const yScale = scaleLinear()
    //   .domain(extent)
    //   .range([height, 0]);

    // rendering
    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", layer => colors[layer.key])
      .selectAll("rect")
      .data(layer => layer)
      .join("rect")
      .attr("y", sequence => yScale(sequence.data.standard))
      .attr("height", yScale.bandwidth())
      .attr("x", sequence => xScale(sequence[0]))
      .attr("width", sequence => xScale(sequence[1]) - xScale(sequence[0]));

      // .attr("x", sequence => xScale(sequence.data.standard))
      // .attr("width", xScale.bandwidth())
      // .attr("y", sequence => yScale(sequence[1]))
      // .attr("height", sequence => yScale(sequence[0]) - yScale(sequence[1]));

    // axes
    const xAxis = axisTop(xScale);
    svg
      .select(".x-axis")
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg.select(".y-axis").call(yAxis);
  }, [colors, data, dimensions, keys]);

  return (
    <React.Fragment>
      <div ref={wrapperRef} style={{ marginBottom: "2rem" }} className="stacked-bar-chart-component">
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </React.Fragment>
  );
}

export default StackedBarChart;