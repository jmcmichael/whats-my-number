// VISUALIZATION
function generate(data, targets) {
  console.log(targets);
  if($(targets.visualization).length) {
    console.log('--- found visualization target');
  } else {
    console.error('--- could not find visualization target');
  }
}

export default {
  generate: generate
};
