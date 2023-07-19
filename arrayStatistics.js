function arrayStats(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const sum = array.reduce((acc, val) => acc + val, 0);
  const average = (sum / array.length).toFixed(2);
  return { sum, average, min, max };
}

console.log(arrayStats([1, 2, 3, 4, 5]));
