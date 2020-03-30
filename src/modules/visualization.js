// VISUALIZATION
function generate(data, config) {
  console.log(targets);
  if($(config.target).length) {
    console.log('--- found visualization target');
  } else {
    console.error('--- could not find visualization target');
  }
}

export default {
  generate: generate
};
