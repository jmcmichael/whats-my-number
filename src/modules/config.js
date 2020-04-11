const viz = {
  target: '#visualization-target',
  dimensions: {
    // panel dimensions in inches
    panel_x: 53,
    panel_y: 43,
    // panel count, horizontal (length, x), vertical (tube circumference, y)
    total_panels_x: 11,
    total_panels_y: 10
  }
};

const key = {
  target: '#key-target'
};

const spreadsheets = {
  data: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSkNHpDcHxDDSG-cXE8qhIdXa8XRAVnS1sKdJEZhJPrVi02Gi4HePP2RNAE3OrlxoyNb6u44Co_0Y15/pub?gid=0&single=true&output=csv',
  parameters: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRYMTxAgZWbYo2YVuxOMbzSdDTSbkwxfAnLbrCbp276ya5ngPTir_Ove05_BViA_bU2U8PA9m7lMQvY/pub?output=csv'
};

// columns required for the vizuation (others will be omitted during transform)
const cols = [
  'additional_categories',
  'age',
  'creativity_7',
  'education_7',
  'emotion',
  'entertainment_7',
  'games_7',
  'gender',
  'health_and_fitness_7',
  'initials',
  'most_used',
  'most_used_1',
  'most_used_2',
  'most_used_3',
  'most_used_4',
  'notifications',
  'other_7',
  'pickup_average',
  'pickup_percentage',
  'pickups',
  'productivity_7',
  'reading_and_reference_7',
  'social_networking',
  'survey_number',
  'usage_average',
  'usage_percentage',
  'usage_type',
  'your_number',
  'zip',
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
