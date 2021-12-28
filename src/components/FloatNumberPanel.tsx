import React, { useState } from 'react'
import { to64BitDoublePrecision } from '../lib/doublePrecisionFloat'

const FloatNumberPanel = () => {
  const [num, setNum] = useState(0)

  return <>
    <h1>双精度浮点数演示面板</h1>
    <hr />
    <div className="inputPanel">
      请输入一个浮点数：
      <input type="text" onChange={
        (e) => {
          const value = e.target.value.trim()
          if (value.length === 0) {
            return
          }

          const reg = /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/
          if (!reg.test(value)) {
            return console.log(`${value} 不是一个正确的数字`)
          }
          console.log(value)

          const myFloat = to64BitDoublePrecision(Number(value))
          console.log(myFloat.doublePrecisionString)
          console.log(myFloat.signString, '-', myFloat.exponent, '(', myFloat.exponentString, ') -', myFloat.significandString)
        }
      }></input>
    </div>
  </>
}

export default FloatNumberPanel