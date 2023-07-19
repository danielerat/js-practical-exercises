function gcd(first, second) {
  const divisorFirst = new Set([first]);
  const secondDivisor = new Set([second]);
  for (let i = first / 2; i > 1; i--) {
    if (first % i == 0) divisorFirst.add(i);
  }
  for (let j = second / 2; j > 1; j--) {
    if (second % j == 0) secondDivisor.add(j);
  }

  const intersection = new Set(
    [...divisorFirst].filter((n) => secondDivisor.has(n))
  );

  return Math.max(...intersection);
}
console.log(gcd(800, 900));
