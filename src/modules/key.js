// KEY
function generate(data, targets) {
  console.log(targets);
  if($(targets.key).length) {
    console.log('--- found key target');
  } else {
    console.error('--- could not find key target');
  }
}

export default {
  generate: generate
};
