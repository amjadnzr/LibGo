import * as React from 'react'

export default function BorrowForm(props:any) {

  return (
    <div className="add-form">
    
    <form  className="form-holder" onSubmit={props.onSubmitBorrow}>
    <div className="input-container">
    
        <input className="input-box" type="text" name="memId" placeholder="Mebership Id"/>
        <small className="form-input-error">{props.err.memId}</small>
    </div>

    <div className="input-container">
        <input className="input-box" type="text" name="rname" placeholder="Reserver Name" />
        <small className="form-input-error">{props.err.rname}</small>
    </div>

    <div className="input-container">    
        <input className="input-box" type="email"name="rmail" placeholder="Reserver Email"  />
        <small className="form-input-error">{props.err.rmail}</small>

    </div>  
     
   

    <div className="input-container">    
        <input className="input-box" type="text" name="rmobile" placeholder="Reserver Mobile" />
        <small className="form-input-error">{props.err.rmobile}</small>
    </div>


     <div className="input-container">  
  
     <button className="form-submit-button">Confirm</button> 
      
    
      </div>

     </form>
      
  </div>  
  )
}
