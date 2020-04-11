// VISUALIZATION
// based on https://bl.ocks.org/Andrew-Reid/0aedd5f3fb8b099e3e10690bd38bd458

import * as d3 from 'd3';
import times from 'lodash/times';

function generate(data, config, options) {
  // quit if target div not found
  if(!$(config.target).length) { console.error(config.target + ' not found!'); return; }

  const surveys = data.final;

  // calculate dimensions
  const panelX = config.dimensions.panel_x;
  const panelY = config.dimensions.panel_y;
  const panelsX = config.dimensions.total_panels_x;
  const panelsY = config.dimensions.total_panels_y;

  const width = panelsX * panelX;
  const height = panelsY * panelY;

  // determine if svg already exists (as when data is reloaded),
  // create all layer grids
  let svg = d3.select(config.target +  ' > svg'),
      chart = d3.select('#chart'),
      panels = d3.select('#panels');

  if (svg.empty()) {
    // set up SVG container
    svg = d3.select(config.target).append('svg')
      .attr('id', 'visualization')
      .attr('style', 'background-color: white')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 ' + width + ' ' + height);
    // group to store the survey chart
    chart = svg.append('g')
      .attr('id', 'chart');

    // group to store the panels
    panels = svg.append('g')
      .attr('id', 'panels');
  }

  // ranges for survey bars
  let survey_y = d3.scaleBand()
      .range([height, 0]);
  // let survey_x;
  // if(options.scale === 'linear') {
  //   survey_x = d3.scaleLinear()
  //       .range([0, width]);
  // } else if (options.scale === 'symlog') {
  //   survey_x = d3.scaleSymlog()
  //       .range([0, width])
  //       .constant(options.constant);
  // }

  // let survey_x = d3.scaleLinear()
  //       .range([0, width]);

  let survey_x = d3.scaleSymlog()
      .range([0, width])
      .constant(0.1);

  // scale the range of the data in the domains
  survey_x.domain([0, d3.max(surveys, (d) => d.your_number)]);
  survey_y.domain(surveys.map((d) => d.index));

  // append the rectangles for the bar chart
  chart.selectAll('.survey')
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
  const panelData = generatePanelData(config.dimensions);

  panels.selectAll('.panel')
    .data(panelData)
    .enter().append('rect')
    .attr('class', 'panel')
    .attr('id', (d) => d.label)
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y)
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('stroke', d3.color('mediumslateblue'))
    .attr('stroke-width', 0.15)
    .attr('fill', 'none')
    .exit().remove();
}

function generatePanelData(dimensions) {
  let data = new Array();
  const cols = dimensions.total_panels_x;
  const rows = dimensions.total_panels_y;
  const paneWidth = dimensions.panel_x;
  const paneHeight = dimensions.panel_y;

  let xpos = 0;
  let ypos = 0;

  // iterate for rows
  for (var row = 1; row <= rows; row++) {
    // iterate for cells/columns inside rows
    for (var column = 1; column <= cols; column++) {
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
