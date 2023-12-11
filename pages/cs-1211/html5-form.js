import { includes } from 'lodash'
import React, { useState } from 'react'

export default function Html5Form() {
  //文字輸入框
  const [inputText, setInputText] = useState('')
  //文字輸入區
  const [text, setText] = useState('')

  //radio button group
  //選項把它變成變數或常數 然後map出來
  const foodOptions = ['排骨飯', '雞腿飯', '牛肉麵']
  const [food, setFood] = useState('')

  //checkbox group
  const petOptions = ['台北', '新竹', '台中', '高雄']
  //多選的 所以狀態不會是空字串 而是陣列
  // checkbox group
  const [pets, setPets] = useState('')

  //下拉選單select
  const cityOptions = ['台北市', '台中市', '高雄市']
  const [city, setCity] = useState('')

  return (
    <>
      <h1>可控表單元件</h1>

      <section id="input-text">
        <h2>文字輸入框</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>

      <section id="textarea">
        <h2>文字輸入區域(textarea)</h2>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
      </section>

      <section id="radio-group">
        <h2>選項按鈕群組(radio group)</h2>
        {foodOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                checked={v === food}
                value={v}
                onChange={(e) => {
                  setText(e.target.value)
                }}
              />
              {v}
            </label>
          )
        })}

        {/* <label>
          <input type="radio" />
          排骨飯
        </label>
        <label>
          <input type="radio" />
          雞腿飯
        </label>
        <label>
          <input type="radio" />
          牛肉麵
        </label> */}
      </section>

      <section id="checkbox-group">
        <h2>勾選盒群組(checkbox group)</h2>
        {petOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                checked={pets.includes(v)}
                value={v}
                onChange={(e) => {
                  // targetValue為勾選的值，相當於v
                  const targetValue = e.target.value

                  // 判斷陣列中是否已經有該勾選的值
                  if (pets.includes(targetValue)) {
                    // 如果目前在狀態陣列中 -> 移出陣列
                    // 先從陣列中拷貝一個新陣列，移除勾選的值
                    const newPets = pets.filter((v2, i2) => v2 !== targetValue)
                    // 設定回狀態陣列
                    setPets(newPets)
                  } else {
                    // 否則 -> 加入狀態陣列
                    setPets([...pets, targetValue])
                  }
                }}
              />
              {v}
            </label>
          )
        })}
      </section>
      <section id="radio-group">
        <h2>下拉選單(select)</h2>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
        >
          <option value="">請選擇城市</option>
          {cityOptions.map((v, i) => {
            return (
              <option value={v} key={i}>
                {v}
              </option>
            )
          })}
        </select>
      </section>
    </>
  )
}
