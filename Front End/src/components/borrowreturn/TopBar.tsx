import * as React from 'react'

export default function TopBar(props:any) {
  return (
    <div className="innerbar">
    <button className="inner-bar-button" id="btn1" onClick={props.onClickChange}> Borrow Item</button>
    <button className="inner-bar-button" id="btn2" onClick={props.onClickChange}> Return Item</button>
  </div>
  )
}
