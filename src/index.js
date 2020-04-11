require('./styles/index.scss');
let saveSVG =require('d3-save-svg');

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
  $('#xscale').on('change', function() {
    let constant = $('#log-constant');
    let options = {
      scale: this.value,
      constant: Number(constant.val())
    };
    fetchAndGenerate(options);
  });
  fetchAndGenerate({scale: 'linear'});
});

function fetchAndGenerate(options) {
  gdoc.get(config.spreadsheets, config.cols) // fetch data from google spreadsheet
    .then(validate.execute) // validate records, drop any w/ errors & create report
    .then(transform.execute)
    .then((data) => { // generate visualization, key, and validation report
      visualization.generate(data, config.viz, options);
      // key.generate(data, config.key);
      // report.generate(data, config.report);
    });
}

function download() {
  var date = new Date();
  var timeStamp = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
      .toISOString()
      .split('.')[0]+"Z";
  timeStamp.replace(/:/g, '_');
  saveSVG.save($('#visualization')[0], {
    filename: 'whats-my-number_' + timeStamp
  });
}
