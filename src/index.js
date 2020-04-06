require('./styles/index.scss');

// vendor modules
import PopperJs from 'popper.js';
import jquery from 'jquery';
import 'bootstrap';

// app modules
import config from './modules/config';
import gdoc from './modules/gdoc';
import validate from './modules/validate';
import transform from './modules/transform';
import visualization from './modules/visualization';
import key from './modules/key';
import report from './modules/report';

$(document).ready(() => {
  $('#reload').click(() => fetchAndGenerate());
  $('#download').click(() => download());
  fetchAndGenerate();
});

function fetchAndGenerate() {
  gdoc.get(config.spreadsheets, config.cols) // fetch data from google spreadsheet
    .then(validate.execute) // validate records, drop any w/ errors & create report
    .then(transform.execute)
    .then((data) => { // generate visualization, key, and validation report
      visualization.generate(data, config.viz);
      // key.generate(data, config.key);
      // report.generate(data, config.report);
    });
}

function download() {
  console.log('download called.');
}
