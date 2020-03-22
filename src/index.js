module.exports = function reverse(n) {
  let result = [];
  let toProceed = n.toString().split('')
  for (let i = toProceed.length - 1; i >= 0; i--) {
    result.push(toProceed[i]);
  }
  return parseInt(result.join(''));
};
