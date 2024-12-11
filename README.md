# JavaScript: Unexpected NaN with undefined in addition

This example demonstrates an unexpected behavior when using `undefined` and `null` in JavaScript's addition operator.  The `undefined` value leads to `NaN`, while `null` is treated as 0. 

## Bug

The function `foo` adds two numbers.  However, when `undefined` is passed as an argument, it returns `NaN`.  This is counterintuitive for those expecting the function to handle missing values more gracefully.  The function is missing error handling for these edge cases.

## Solution

The solution includes checks to handle `undefined` and `null` values more appropriately, converting `undefined` to 0 and using the nullish coalescing operator (`??`) to provide sensible default values.