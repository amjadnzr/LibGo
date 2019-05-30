import * as React from 'react'

export default (props:any) => {
  return (
    <div className="inner-view-bar-container">
      <button className="viewbar-buttons">All</button>
      <button className="viewbar-buttons">Books</button>
      <button className="viewbar-buttons">Dvds</button>
      <input type="text" className="viewbar-buttons" onChange={props.search} placeholder="Search..." />
    </div>
  )
}
