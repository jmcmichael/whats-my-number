// VISUALIZATION
// based on https://bl.ocks.org/Andrew-Reid/0aedd5f3fb8b099e3e10690bd38bd458

import * as d3 from 'd3';
import times from 'lodash/times';

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

  let svg = d3.select(config.target +  ' > svg');

  if (svg.empty()) {
    // set up SVG container
    svg = d3.select(config.target).append("svg")
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 ' + width + ' ' + height);
  }

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
    .attr('fill', d3.color('lightsteelblue'))
    .attr('id', (d) => 'survey' + d.index)
    .exit().remove();

  // create grid to show panel boundaries
  const gridData = generateGridData(config.dimensions);
  console.log(gridData);
  // ranges for grid
  let grid_y = d3.scaleLinear()
      .range([height, 0])
      .domain();

  let grid_x = d3.scaleLinear()
      .range([0, width]);

  let grid = svg.append('g')
      .attr('id', 'grid');

  // log rect width/height
  // gridData.map((d) => {
  //   let dt = {
  //     label: d.label,
  //     x: (d) => grid_x(d.x),
  //     y: (d) => grid_y(d.y),
  //     width: (d) => grid_x(d.width),
  //     height: (d) => grid_y(d.height)
  //   };
  //   console.log(dt);
  // });

  grid.selectAll('.panel')
    .data(gridData)
    .enter().append('rect')
    .attr('id', (d) => d.label)
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y)
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('stroke', d3.color('mediumslateblue'))
    .attr('stroke-width', 0.15)
    .attr('fill', 'none');
}

function generateGridData(dimensions) {
  let data = new Array();
  const rows = dimensions.total_panels_x;
  const cols = dimensions.total_panels_y;
  const paneWidth = dimensions.panel_x;
  const paneHeight = dimensions.panel_y;

  let xpos = 0;
  let ypos = 0;

  // iterate for rows
  for (var row = 0; row <= rows; row++) {
    // iterate for cells/columns inside rows
    for (var column = 0; column <= cols; column++) {
      data.push({
        label: 'R' + row + 'C' + column,
        x: xpos,
        y: ypos,
        width: paneWidth,
        height: paneHeight
      });
      // add x position
      xpos += paneWidth;
    }

    // reset the x position after a row is complete
    xpos = 0;

    // add y position
    ypos += paneHeight;
  }
  return data;
}

export default {
  generate: generate
};
