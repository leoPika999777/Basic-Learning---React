export default function IdForm() {
  return (
    <>
      <h2>IdForm</h2>
      <input type="text" id="myInput" />
      

      <button
        onClick={() => {
          //在事件處理的時候 可以確保input呈現在網頁上
          document.getElementById('myInput').focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          document.getElementById('myInput').blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          alert(document.getElementById('myInput').value)
          console.log(document.getElementById('myInput').value)
        }}
      >
        得到值(log)
      </button>
    </>
  )
}
