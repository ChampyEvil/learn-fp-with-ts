type Increment = (x: number) => number
const increment: Increment = x => x + 1

type ToString = (x: number) => string
const toString: ToString = x => `${x}`

type IncrementThenToString = (x: number) => string
const incrementThenToString: IncrementThenToString = x => toString(increment(x))

type Compose = (g: (x: number) => string, f: (x:number) => number) => (x: number) => string
const compose: Compose = (g, f) => (x: number) => g(f(x))

export { increment, toString, incrementThenToString, compose }