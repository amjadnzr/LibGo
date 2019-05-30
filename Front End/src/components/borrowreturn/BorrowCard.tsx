import * as React from 'react'

export default class BorrowCard extends React.Component<{items:any,onClickBorrow:any}> {
    
    
    public render(){
  return (
    <div className="view-card-display">
       { this.props.items.map(
           (itm:any,index:number)=>{
               let type=""
               if(itm.className=="models.Book"){
                   type="Book"
               }
               else{
                   type="Dvd"
               }
               return(
      <div key={index} className="view-card-container">
        <img src={itm.img}  className="view-card-background"/>
           <div className="view-card-button-info-container">
           <div className="view-card-info-container">
           <div className="view-card-each-info">
               <small>Isbn:{itm.isbn}</small>  
               </div>   
               <div className="view-card-each-info">
               <small>Title:{itm.title}</small>  
               </div>   
               <div className="view-card-each-info">
               <small>Type:{type}</small>  
               </div>   
         
           </div>
          <div className="view-card-button-container">
              <button id="view-card-borrow-button" onClick={this.props.onClickBorrow.bind(this,index)} >Borrow</button>
          </div>
          </div>
      </div>
        ) })}
    </div>
  )
}
}
