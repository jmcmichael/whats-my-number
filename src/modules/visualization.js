// VISUALIZATION
// based on https://bl.ocks.org/Andrew-Reid/0aedd5f3fb8b099e3e10690bd38bd458

import * as d3 from 'd3';

function generate(data, config) {
  if(!$(config.target).length) { return; } // quit if target div not found
  const surveys = data.final;

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

  // ranges for survey bars
  let survey_y = d3.scaleBand()
      .range([height, 0]);

  let survey_x = d3.scaleLinear()
      .range([0, width]);

  // scale the range of the data in the domains
  survey_x.domain([0, d3.max(surveys, (d) => d.your_number)]);
  survey_y.domain(surveys.map((d) => d.index));

  // append the rectangles for the bar chart
  svg.selectAll('.survey')
    .data(surveys)
    .enter().append('rect')
    .attr('class', 'survey')
    .attr('width', (d) => survey_x(d.your_number))
    .attr('y', (d) => survey_y(d.index))
    .attr('height', survey_y.bandwidth())
    .attr('id', (d) => 'survey' + d.index);
}

export default {
  generate: generate
};
