let cancellable = function(fn, args, t) {

  //... are used before args to expand args to individual values and give to fn
  fn(...args);
  const x = setInterval(() => {
      fn(...args)
  }, t);
  x;

  //clearInterval() is used to stop setInterval()
  const cancelFn = () => {
      clearInterval(x);
  };
  return cancelFn;
};