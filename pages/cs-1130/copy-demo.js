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
  //只會靠北到一層
  const ae = [ac[0], ac[1], [...ac[2]]]
  // 深拷貝陣列(很早期也常見的深拷貝語法，有可能不精確)，可以拷貝各層
  const af = JSON.parse(JSON.stringify(ac))

  console.log(ac)
  console.log(ad)
  console.log(ae)
  console.log(af)

  ac[0] = 999

  console.log(ac)
  console.log(ad)
  console.log(ae)
  console.log(af)

  ac[2][0] = 888

  console.log(ac)
  console.log(ad)
  console.log(ae)
  console.log(af)

  return (
    <>
      <h1>物件陣列範例說明</h1>
    </>
  )
}
