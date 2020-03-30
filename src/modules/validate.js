function execute(data) {
  console.log(data);
  return {
    final: data,
    original: data,
    validation: 'not ready yet'
  };
}

export default {
  execute: execute
};
