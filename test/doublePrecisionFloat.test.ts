import { DoublePrecisionFloat } from '../src/lib/doublePrecisionFloat'

const myFloat = new DoublePrecisionFloat(1)

test('DoublePrecisionFloat: 双精度字符串长度 === 64', () => {
  expect(myFloat.doublePrecisionString).toHaveLength(64)
})
test('DoublePrecisionFloat: 符号位字符串长度 === 1', () => {
  expect(myFloat.signString).toHaveLength(1)
})
test('DoublePrecisionFloat: 指数字符串长度 === 11', () => {
  expect(myFloat.exponentString).toHaveLength(11)
})
test('DoublePrecisionFloat: 尾数字符串长度 === 52', () => {
  expect(myFloat.significandString).toHaveLength(52)
})
test('DoublePrecisionFloat: 双精度字符串长度 === 符号位 + 指数 + 尾数', () => {
  expect(myFloat.doublePrecisionString).toEqual(
    myFloat.signString + myFloat.exponentString + myFloat.significandString
  )
})
test('DoublePrecisionFloat: 1 应该是正数', () => {
  expect(myFloat.isPositive).toBeTruthy()
})
test('DoublePrecisionFloat: 1 的指数位为 0', () => {
  expect(myFloat.exponent).toBe(0)
})
