function foo(a, b) {
  a = a === undefined ? 0 : a;
  b = b ?? 0; // Use nullish coalescing operator
  return a + b;
}

console.log(foo(undefined, 5)); // Output: 5
console.log(foo(null, 5)); // Output: 5
console.log(foo(10, undefined)); // Output: 10
console.log(foo(10, null)); // Output: 10