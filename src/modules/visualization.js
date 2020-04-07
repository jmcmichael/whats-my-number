// VISUALIZATION
// based on https://bl.ocks.org/Andrew-Reid/0aedd5f3fb8b099e3e10690bd38bd458

import * as d3 from 'd3';

function generate(data, config) {
  if(!$(config.target).length) { return; } // quit if target div not found
  const pollData = data.final;

  // calculate dimensions
  const panelX = config.dimensions.panel_x;
  const panelY = config.dimensions.panel_y;
  const panelsX = config.dimensions.total_panels_x;
  const panelsY = config.dimensions.total_panels_y;

  const width = panelsX * panelX;
  const height = panelsY * panelY;

  // set up SVG container
  let svg = d3.select(config.target)
      .append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 ' + width + ' ' + height);

  // draw rectangle for testing
  // svg.append('rect')
  //   .attr('width', '100%')
  //   .attr('height', '100%')
  //   .attr('style', 'fill:aliceblue');

  // range for container bars
  let container_y = d3.scaleBand()
      .range([height, 0]);

  let container_x = d3.scaleLinear()
      .range([0, width]);
}

export default {
  generate: generate
};
