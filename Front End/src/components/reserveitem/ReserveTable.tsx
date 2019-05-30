import * as React from 'react'
import '../reportgenerate/generatereport.css'
import './reserveitem.css'
export default class ReserveTable extends React.Component<{item:any,onOk:any}> {

  
   
   public   render() {
    return (
      
      <div className="report-container">
        <div className="report-table-container">
          <table className="report-table">
            <tbody>
              
              <tr className="report-table-header-row">
                <th className="report-table-header">Isbn</th>
                <th className="report-table-header">Title</th>
                <th className="report-table-header">Reserver Id</th>
                <th className="report-table-header">Reserver Name</th>
                <th className="report-table-header"> Expeced Date</th>
                
            </tr>
              
            </tbody>
          </table>

        </div>
        <div >
        <button className="reserve-item-show-ok-button" onClick={this.props.onOk}>OK</button>
        </div>
      </div>
    )
  }
}
