/**
 * 双精度浮点数描述类型
 */
type DoublePrecisionNumber = {
  /**
   * 双精度字符串 64 位
   */
  doublePrecisionString: string
  /**
   * 符号位字符串 1 位（0 表示正数 / 1表示负数）
   */
  signString: string
  /**
   * 指数字符串 11 位（2~12）
   */
  exponentString: string
  /**
   * 尾数字符串 52 位（13~64）
   */
  significandString: string

  /**
   * 是否正数
   */
  isPositive: boolean
  /**
   * 偏移前的指数值
   */
  exponentBeforeOffset: number
  /**
   * 指数值 = exponentBeforeOffset - 1023
   */
  exponent: number
}

/**
 * 将 num 转换为 64 为双精度浮点数描述类型
 * @param num 
 * @returns 双精度浮点数描述类型
 */
export const to64BitDoublePrecision: (num: number) => DoublePrecisionNumber = (num: number) => {

  const dv = new DataView(new ArrayBuffer(8))
  dv.setFloat64(0, num, false)

  let result = ''
  for (let i = 0; i < 8; i++) {
    result += dv.getUint8(i).toString(2).padStart(8, '0')
  }

  const doublePrecisionString = result
  const signString = result.substring(0, 1)
  const exponentString = result.substring(1, 12)
  const significandString = result.substring(12)
  const isPositive = signString === '0'
  const exponentBeforeOffset = parseInt(exponentString, 2)
  const exponent = exponentBeforeOffset - 1023

  return {
    doublePrecisionString,
    signString,
    exponentString,
    significandString,
    isPositive,
    exponentBeforeOffset,
    exponent
  }
}
