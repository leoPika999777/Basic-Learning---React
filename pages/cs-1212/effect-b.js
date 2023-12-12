import React, { useState } from 'react'
import Child from '@/components/effect-b/child'

export default function EffectB() {
  const [name, setName] = useState('')
  return (
    <>
      <h1>useEffect基本範例2</h1>
      <Child name={name} />
      <hr />
      <button
        onClick={() => {
          setName('Iris')
        }}
      >
        更改name為Iris
      </button>
      <button
        onClick={() => {
          setName('Nike')
        }}
      >更改name為Nike</button>
    </>
  )
}
