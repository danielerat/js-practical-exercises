function oddSquares(array) {
  const odd = array.filter((n) => n % 2 !== 0);
  return odd.map((n) => n * n);
}
console.log(oddSquares([1, 2, 3, 4, 5, 6]));
