import { convertNumber } from "../converter";

test("Testing telephone number converter", () => {
    const number1 = "8 (927) 123-45-67"
    const number2 = "+7 960 987 65 43"
    const number3 = "+86 123 456 7890"

    expect(convertNumber(number1)).toEqual("+79271234567")
    expect(convertNumber(number2)).toEqual("+79609876543")
    expect(convertNumber(number3)).toEqual("+861234567890")
})