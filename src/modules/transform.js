import capitalize from 'lodash/capitalize';

function execute(data) {
  return assemble(convert(data));
}

// convert values to simple strings
// convert string lists to arrays
// coerce number fields from String to Number
function convert(data) {
  data.final = data.final.map((d, i) => {
    d.index = i;
    d.additional_categories = Number(d.additional_categories);
    d.creativity_7 = Number(d.creativity_7);
    d.education_7 = Number(d.education_7);
    d.emotion = Number(d.emotion);
    d.entertainment_7 = Number(d.entertainment_7);
    d.games_7 = Number(d.games_7);
    d.gender = d.gender == 'Female' ? 'f' : 'm';
    d.health_and_fitness_7 = Number(d.health_and_fitness_7);
    d.initials = d.initials.toUpperCase();
    d.most_used = d.most_used.split(',').map(app => capitalize(app.trim()));
    d.most_used_category = [d.most_used_1, d.most_used_2, d.most_used_3, d.most_used_4];
    d.notifications = Number(d.notifications);
    d.other_7 = Number(d.other_7);
    d.pickup_average = getVector(d.pickup_average);
    d.pickup_percentage = Number(d.pickup_percentage);
    d.pickups = Number(d.pickups);
    d.productivity_7 = Number(d.productivity_7);
    d.reading_and_reference_7 = Number(d.reading_and_reference_7);
    d.social_networking = Number(d.social_networking);
    d.survey_number = Number(d.survey_number);
    d.usage_average = getVector(d.usage_average);
    d.usage_percentage = Number(d.usage_percentage);
    d.usage_type = d.usage_type.toLowerCase();
    d.your_number = Number(d.your_number);
    return d;
  });
  return data;
}

function getVector(v) {
  let vector;
  if(v.includes('up')) { vector = 'up'; }
  else if(v.includes('down')) { vector = 'down'; }
  else if(v.includes('No Change')) { vector = 'no change'; }
  return vector;
}

// put data for sub-stacks into their own arrays on original object
function assemble(data) {
  return data;
}

export default {
  execute: execute
};
/*
{
  "additional_categories":"0",
  "age":"45-54",
  "creativity_7":"0.05285714286",
  "education_7":"1.32",
  "emotion":"5",
  "entertainment_7":"0.02142857143",
  "games_7":"0",
  "gender":"Female",
  "health_and_fitness_7":"0.4285714286",
  "initials":"mm"
  "most_used":"Roblox, Safari, Pokemon Go, Mail",
  "notifications":"21",
  "other_7":"0.2257142857",
  "pickup_average":"Percentage is up (arrow pointing up)",
  "pickup_percentage":"9",
  "pickups":"73",
  "productivity_7":"0.3314285714",
  "reading_and_reference_7":"0.3342857143",
  "social_networking":"4.29",
  "survey_number":"2",
  "usage_average":"Percentage is up (arrow pointing up)",
  "usage_percentage":"10",
  "usage_type":"Both",
  "your_number":"3.42",
  "zip":"63108",
}"
*/
