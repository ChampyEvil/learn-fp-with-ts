// helper from previous lab ----------------

type Compose = <A, B>(
  f: (a: B) => B,
  g: (a: A) => B
) => (a: A) => B
const compose: Compose = (f, g) => (x) => f(g(x))
const increment = (x: number): number => x + 1

// ----------------------------------

const divideTwoIfEven = (x: number): number => {
  if (x === 0) {
    throw 'cannot divide by zero'
  } else if (x % 2 !== 0) {
    throw 'x is not even'
  }
  return 2 / x
}

export {
  divideTwoIfEven, 
  // left, right, 
  // divideTwoIfEvenFn, composed
}