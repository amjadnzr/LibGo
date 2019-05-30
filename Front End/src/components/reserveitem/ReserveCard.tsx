import * as React from 'react'
export default class ReserveCard extends React.Component<{items:any,onReserve:any,onShow:any}> {
    
   
    
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
            //    let have=true
            //    if(itm.isBorrow){
            //        have=true
            //    }else{
            //        have=false
            //    }
               return(
      <div key={index} className="view-card-container">
        <img src={itm.img}  className="view-card-background"/>
        {/* { have ?(
        <div className="view-card-available-tag">Available</div>):(
        <div className="view-card-unavailable-tag">Unavailable</div>
        // )} */}
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
              <button id="view-card-view-button"onClick={this.props.onShow.bind(this.props,index)}>Show</button>
              <button id="view-card-delete-button" onClick={this.props.onReserve}>Reserve</button>
          </div>
          </div>
      </div>
        ) })}
    </div>
  )
}
}
