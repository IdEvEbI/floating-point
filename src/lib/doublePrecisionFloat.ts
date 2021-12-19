/**
 * 双精度浮点数
 */
export class DoublePrecisionFloat {
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

  constructor(num: number) {
    const bitString = this.to64BitString(num)

    this.doublePrecisionString = bitString

    this.signString = bitString.substring(0, 1)
    this.exponentString = bitString.substring(1, 12)
    this.significandString = bitString.substring(12)

    this.isPositive = this.signString === '0'
    this.exponentBeforeOffset = parseInt(this.exponentString, 2)
    this.exponent = this.exponentBeforeOffset - 1023
  }

  /**
   * 将 num 转换为 64 位双精度浮点数字符串（IEEE 754）
   * @param num 
   * @returns 双精度浮点数字符串
   */
  to64BitString(num: number) {
    const dv = new DataView(new ArrayBuffer(8))
    dv.setFloat64(0, num, false)
  
    let result = ''
    for (let i = 0; i < 8; i++) {
      result += dv.getUint8(i).toString(2).padStart(8, '0')
    }
  
    return result
  }
}
// export type NumberInfo = {
//   
//   exponentAfterOffset: number       // 编译后的指数值
// }

