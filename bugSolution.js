function foo(x) {
  return x && x.length || 0; // Handle null or undefined case
}
//Alternative Solution
function foo(x) {
  if (x === null || x === undefined) {
    return 0;
  }
  return x.length;
}