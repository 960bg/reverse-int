module.exports = function reverse(n) {
  let num = Math.abs(n);
  num = ('' + num).split('').reverse().join('');
  // 
  return num;



}


// console.log(reverse(-526));