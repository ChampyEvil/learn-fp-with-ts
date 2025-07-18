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

type Either<E, A> = Left<E> | Right<A>
interface Left<E> {
  _tag: 'left',
  value: E
}
interface Right<A> {
  _tag: 'right',
  value: A
}

const left = <E, A=never>(e: E): Either<E, A> => ({
  _tag: 'left',
  value: e
})

const right = <A, E=never>(a: A): Either<E, A> => ({
  _tag: 'right',
  value: a
})

const divideTwoIfEvenFn = (x: number): Either<string, number> => {
  if (x === 0) {
    return left('cannot divide by zero')
  } else if (x % 2 !== 0) {
    return left('x is not even')
  }
  return right(2 / x)
}

const isLeft = <E, A>(e: Either<E, A>): e is Left<E> => e._tag === 'left'
const composed = compose(
  (x) => isLeft(x) ? x : right(increment(x.value)),
  divideTwoIfEvenFn
)

export {
  divideTwoIfEven, left, right, divideTwoIfEvenFn, composed
}