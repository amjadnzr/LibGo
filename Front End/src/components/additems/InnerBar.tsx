import * as React from 'react'
import './AddItem.css'
export default (props:any) => {
  return (
  <div className="innerbar">
      <button className="inner-bar-button" id="btn1" onClick={props.onChangeForm}>Add Book</button>
      <button className="inner-bar-button" id="btn2" onClick={props.onChangeForm}>Add Dvd</button>
    </div>
  )
}
