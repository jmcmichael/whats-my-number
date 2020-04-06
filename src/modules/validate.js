function execute(data) {
  console.log(data);
  return {
    final: data,
    original: data,
    validation: 'this is just a stub until validation is set up'
  };
}

export default {
  execute: execute
};
