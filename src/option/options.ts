type Compose = <A, B>(
  f: (a: B) => B,
  g: (a: A) => B
) => (a: A) => B

const compose: Compose = (f, g) => (x) => f(g(x))

const divideTwo = (x: number) => 2 / x
const increment = (x: number) => x + 1

const composed = compose(increment, divideTwo)

export {
  divideTwo, composed, 
  // some, none, isNone, divideTwo2, composed2
} 