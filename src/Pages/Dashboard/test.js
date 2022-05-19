function factorial(n) {
  return n === 1 ? 1 : factorial(n - 1) * n;
}

const result = factorial(9);
console.log(result);
