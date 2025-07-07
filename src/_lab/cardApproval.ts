import * as E from 'fp-ts/lib/Either'

const loadCSVFile = (file: string[]): E.Either<string, string[]> => {
    if (file.length === 0) {
        return E.left('file corrupted error')
    }
    return E.right(file)
}

const filterApproved = (requests: E.Either<string, string[]>) => {
    if (E.isRight(requests)) {
        const data = requests.right.filter(request => request === 'true')
        return E.right(data)
    }
    return E.left(requests.left)
}

const filterRejected = (requests: E.Either<string, string[]>) => {
    if (E.isRight(requests)) {
        const data = requests.right.filter(request => request === 'false')
        return E.right(data)
    }
    return E.left(requests.left)
}

export { loadCSVFile, filterApproved, filterRejected }