import { to64BitDoublePrecision } from '../src/lib/doublePrecisionFloat'

const myFloat = to64BitDoublePrecision(1)

test('to64BitDoublePrecision: 双精度字符串长度 === 64', () => {
  expect(myFloat.doublePrecisionString).toHaveLength(64)
})
test('to64BitDoublePrecision: 符号位字符串长度 === 1', () => {
  expect(myFloat.signString).toHaveLength(1)
})
test('to64BitDoublePrecision: 指数字符串长度 === 11', () => {
  expect(myFloat.exponentString).toHaveLength(11)
})
test('to64BitDoublePrecision: 尾数字符串长度 === 52', () => {
  expect(myFloat.significandString).toHaveLength(52)
})
test('to64BitDoublePrecision: 双精度字符串长度 === 符号位 + 指数 + 尾数', () => {
  expect(myFloat.doublePrecisionString).toEqual(
    myFloat.signString + myFloat.exponentString + myFloat.significandString
  )
})
test('to64BitDoublePrecision: 1 应该是正数', () => {
  expect(myFloat.isPositive).toBeTruthy()
})
test('to64BitDoublePrecision: 1 的指数位为 0', () => {
  expect(myFloat.exponent).toBe(0)
})
