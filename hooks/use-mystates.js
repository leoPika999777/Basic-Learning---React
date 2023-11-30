import React from "react"

export function useMyState(x){
    let state = x

    //宣告一個函式 改變狀態or取代狀態
    const changeState = (y)=>{
        state =y
    }

    return [state, changeState]
    //return {state, changeState}
    
}