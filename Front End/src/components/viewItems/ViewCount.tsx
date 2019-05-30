import * as React from 'react'

export default (props:any) => {
  return (
    <div className="view-count-container">
      <h6 className="view-count-book">Free Book Space: {props.bc}/100</h6>
      <h6 className="view-count-dvd">Free Dvd Space: {props.dc}/50</h6>

    </div>
  )
}
