import React, { useState } from 'react'

export default function LoginForm() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  // 記錄錯誤訊息用
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  //布林值  勾起來 就顯示  我們用show  一開始沒有勾所以false
  // 顯示密碼的勾選狀態
  const [show, setShow] = useState(false)

  // 各欄位共用事件處理函式
  //多欄位的事件更動
  //傳入事件e
  const handleFieldChange = (e) => {
    //觸發事件  有三個最重要
    console.log(e.target.type, e.target.name, e.target.value)

    // [e.target.name]: e.target.value 指的是  計算得來的屬性名稱(computed property names)
    const newUser = { ...user, [e.target.name]: e.target.value }

    setUser(newUser)
  }

  //阻擋預設行為 也就是阻擋把帳號密碼放在網址上
  const handleSubmit = (e) => {
    // 第一行通常先把預設行為擋掉 阻擋表單預設送出
    e.preventDefault()
    //到這一步  會變成是  這表單按登入會停住無法下一步

    const newErrors = { username: '', password: '' }
    let hasErrors = false

    //做表單檢查: 先檢查必填
    if (user.username === '') {
      newErrors.username = '帳號為必填'
      hasErrors = true
      //alert('帳號為必填')
      //return // 有錯誤跳出函式執行
    }

    if (user.password === '') {
      newErrors.password = '密碼為必填'
      hasErrors = true

      //alert('密碼為必填')
      //return // 有錯誤跳出函式執行
    }

    if (user.password.length < 6) {
      newErrors.password = newErrors.password || '密碼最少要6個字元'
      hasErrors = true
    }

    //有錯誤 不送到伺服器 跳出函式執行
    if (hasErrors) {
      setErrors(newErrors)
      return
    }

    // 最後沒問題再送到伺服器(ajax, fetch...)
    alert('送到伺服器')
  }

  return (
    <>
      <h1>登入表單</h1>
      <form onSubmit={handleSubmit}>
        <label>
          帳號:{' '}
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        {errors.username}
        <br />
        <label>
          密碼:{' '}
          <input
            // 這裡的type屬性值會決定輸入框的輸入方式，show狀態值為true時，顯示text否則顯示password
            type={show ? 'text' : 'password'}
            name="password"
            value={user.password}
            onChange={handleFieldChange}
          />
        </label>

        <button
          type="button"
          onClick={() => {
            setShow(!show)
          }}
        >
          {show ? '隱藏' : '顯示'}
        </button>

        <br />
        {errors.password}
        <br />

        <label>
          <input
            type="checkbox"
            name="showPassword"
            checked={show}
            onChange={(e) => {
              // 能不能依賴現在的狀態  可以
              // 檢查=> Components => LoginForm => state => true or false
              setShow(!show)

              //錯誤寫法
              //console.log(e.target.checked)
              //setShow(!e.target.checked)
            }}
          />{' '}
          顯示密碼
        </label>
        <br />
        <button type="submit">登入</button>
      </form>
    </>
  )
}
