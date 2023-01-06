import { useState } from 'react'

import { Count } from 'Elements/Count'
import { add, stepNumber } from 'Services/math'

export const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0)
  const handleIncrement = (): void => {
    const newCount = add(count, stepNumber)
    setCount(newCount)
  }

  return (
    <div>
      <Count count={ count } />

      <button type="button" onClick={ handleIncrement }>Increment</button>
    </div>
  )
}