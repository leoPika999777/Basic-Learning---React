import { useState } from 'react'
import Child from '@/components/effect-b/child'

export default function EffectB() {
  const [user, setUser] = useState({ name: '', age: 0 })

  return (
    <>
      <h1>useEffect基本範例2</h1>
      <Child name={user.name} age={user.age} />
      <hr />
      <button
        onClick={() => {
          setUser({ ...user, age: 18 })
        }}
      >
        更改age為18
      </button>
      <button
        onClick={() => {
          setUser({ ...user, name: 'Iris' })
        }}
      >
        更改name為Iris
      </button>
    </>
  )
}
