import React from "react"

type Greeting = {
  name: string
}

const Hello = (props: Greeting) => <h1>Hello {props.name}</h1>

export default Hello
