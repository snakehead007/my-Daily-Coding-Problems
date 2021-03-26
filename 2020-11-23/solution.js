const fn = (l) => {
  return l.map((v, i, a) => {
    let _a = a.slice();
    _a.splice(i, 1);
    return _a.reduce((acc, curr) => Math.abs(acc * curr));
  });
};

/**tests */
console.log(fn([1, 2, 3, 4, 5]), fn([3, 2, 1]));
