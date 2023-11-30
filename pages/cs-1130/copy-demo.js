import React from 'react'

export default function CopyDemo() {
  const aa = [1, 2, 3]
  const ab = [...aa]

  console.log(aa)
  console.log(ab)

  aa[0] = 999

  console.log(aa)
  console.log(ab)

  const ac = [1, 2, [3, 4]]
  const ad = [...ac]
  const ae = [ac[0], ac[1], [...ac[2]]]
  const af = JSON.parse(JSON.stringify(ac))

  console.log(ac)
  console.log(ad)

  ac[0] = 999
  // 只會拷貝到一層

  console.log(ac)
  console.log(ad)

  ac[2][0] = 888

  console.log(ac)
  console.log(ad)

  return (
    <>
      <h1>物件陣列範例說明</h1>
    </>
  )
}
