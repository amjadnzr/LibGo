import * as React from 'react'

export default class ReturnCard extends React.Component<{items:any,onClickReturn:any}> {
    
    
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
               const date=`${7+itm.brDate.day}/${itm.brDate.month}/${itm.brDate.year}`
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
              <button id="view-card-return-button" onClick={this.props.onClickReturn.bind(this,index)} >Return</button>
              <button id="view-card-time">{date}</button>

          </div>
          </div>
      </div>
        ) })}
    </div>
  )
}
}
