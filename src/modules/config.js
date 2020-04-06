const viz = {
  target: '#visualization-target',
  dimensions: {
    // panel dimensions in inches
    panel_x: 53,
    panel_y: 43,
    // panel count, horizontal (length, x), vertical (tube circumference, y)
    total_panels_x: 11,
    total_pabels_y: 6
  }
};

const key = {
  target: '#key-target'
};

const spreadsheets = {
  data: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSkNHpDcHxDDSG-cXE8qhIdXa8XRAVnS1sKdJEZhJPrVi02Gi4HePP2RNAE3OrlxoyNb6u44Co_0Y15/pub?gid=0&single=true&output=csv',
  styles: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRos1bxqN2BiT9eP5hYt7WbwykE78fcxNqNh5MtC3uL7RV91pfDFq5XjvhlA0TqRg9DtwOBoi9Fz49l/pub?output=csv'
};

// columns required for the vizuation (others will be omitted during import)
const cols = [
  'survey_number',
  'your_number',
  'usage_average',
  'usage_percentage',
  'most_used',
  'social_networking',
  'entertainment_7',
  'reading_and_reference_7',
  'other_7',
  'productivity_7',
  'creativity_7',
  'health_and_fitness_7',
  'education_7',
  'games_7',
  'additional_categories',
  'pickups',
  'pickup_average',
  'pickup_percentage',
  'notifications',
  'usage_type',
  'emotion',
  'gender',
  'age',
  'zip',
  'initials',
];

const report = {
  validationTarget: '#report-validation-target',
  datatableTarget: '#report-datatable-target'
};

export default {
  viz: viz,
  key: key,
  spreadsheets: spreadsheets,
  cols: cols,
  report: report
};
