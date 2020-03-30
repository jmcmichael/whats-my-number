require('./styles/index.scss');

// vendor modules
import PopperJs from 'popper.js';
import jquery from 'jquery';
import 'bootstrap';

// app modules
import config from './modules/config';
import gdoc from './modules/gdoc';
import transform from './modules/transform';
import validate from './modules/validate';
import visualization from './modules/visualization';
import key from './modules/key';
import report from './modules/report';

$(document).ready(() => {
  const targets = {
    visualization: '#visualization-target',
    key: '#key-target',
    report: {
      validation: '#report-validation-target',
      datatable: '#report-datatable-target'
    }
  };

  gdoc.get(config.data.url) // fetch data from google spreadsheet
    .then(transform.execute) // transform column values for use in visualization
    .then(validate.execute) // validate records, drop any w/ errors & create report
    .then((data) => { // generate visualization, key, and validation report
      visualization.generate(data, targets);
      key.generate(data, targets);
      report.generate(data, targets);
    });
});
