import fetch from 'node-fetch';
import papa from 'papaparse';

// returns poll data as array of json objects
function get(spreadsheets) {
  return fetch(spreadsheets.data)
    .then(response => response.text())
	  .then(csv => parse(csv))
    .then(parsed => toJson(parsed));
}

// parses csv, converts headers
function parse(csv) {
  const options = {
    header: true,
    transformHeader: transformHeader
  };
  var parsed = papa.parse(csv, options);
  return parsed;
}

// converts google form's headers which contain the title
// and the whole question to just the title, lowercased w/ no spaces
function transformHeader(header) {
  if(header.includes(':')){
    header = header
      .substring(0, header.indexOf(':')) // extract question name
      .toLowerCase() // convert to lowercase
      .replace(/ /g,'-'); // replace spaces with dash
  } else {
    header = header
      .toLowerCase() // convert to lowercase
      .replace(/ /g,'-'); // replace spaces with dash
  }
  return header;
}

// converts parsed CSV to array of json objects
function toJson(parsed) {
  return parsed.data;
}

export default {
  get: get
};
