import * as React from 'react'

export default function ReturnForm(props:any) {
    const name=`${props.itm.reader.fname} ${props.itm.reader.lname}`
  return (
    <div className="add-form">
    
    <form  className="form-holder" onSubmit={props.onSubmitReturn}>
    <div className="input-container">
    
        <input className="input-box" type="text" name="memId" placeholder="Mebership Id" value={props.itm.reader.memId}/>
        <small className="form-input-error-black">{props.err.memId}</small>
    </div>

    <div className="input-container">
        <input className="input-box" type="text" name="rname" placeholder="Reader Name" value={name} />
        <small className="form-input-error-black">{props.err.rname}</small>
    </div>

    <div className="input-container">    
        <input className="input-box" type="email"name="rmail" placeholder="Reader Email" value={props.itm.reader.email} />
        <small className="form-input-error-black">{props.err.rmail}</small>

    </div>  
     
   

    <div className="input-container">    
        <input className="input-box" type="text" name="rmobile" placeholder="Reader Mobile" value={props.itm.reader.mobile} />
        <small className="form-input-error-black">{props.err.rmobile}</small>
    </div>
    
    <div className="input-container">    
        <input className="input-box" type="text" name="fee" placeholder="Fee" value={props.fee}/>
        <small className="form-input-error-black">{props.err.fee}</small>
    </div>


     <div className="input-container">  
     {/* <button className="form-submit-button-cancel">Cancel</button> 
   */}
     <button className="form-submit-button-delete">Confirm</button> 
    
      </div>

     </form>
      
  </div>  
  )
}
