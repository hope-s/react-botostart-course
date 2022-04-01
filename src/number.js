export function numberCreator(value) {
    const number = []
    if (!value) {
        for (let index = 100; index > 0; index--) {
            number.push(index)
        }
    } else {
        for (let index = value; index > 0; index--) {
            number.push(index)
        }
    }
    return number
}