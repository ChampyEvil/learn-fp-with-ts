import { left, right } from "fp-ts/lib/Either"
import { loadCSVFile, filterApproved, filterRejected } from "./cardApproval"
import { pipe } from "fp-ts/lib/function"

describe('Card Approval', () => {
  it('should return only approved request records', () => {
    expect(
      pipe(
        ['true', 'true', 'false'],
        loadCSVFile,
        filterApproved
      )
    ).toEqual(right(['true', 'true']))
  })

  it('should return only rejected request records', () => {
    expect(
      pipe(
        ['true', 'true', 'false'],
        loadCSVFile,
        filterRejected
      )
    ).toEqual(right(['false']))
  })

  it('should return left error when file is corrupted', () => {
    expect(
      pipe(
        [],
        loadCSVFile,
        filterRejected
      )
    ).toEqual(left('file corrupted error'))
  })
})