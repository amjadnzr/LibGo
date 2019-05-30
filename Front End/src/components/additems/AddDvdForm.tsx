import * as React from 'react'

export default class AddDvdForm extends React.Component<{addDvd:any,err:any}> {
  public render() {
    return (
      <div className="add-form">
    
        <form  className="form-holder" onSubmit={this.props.addDvd}>
        <div className="input-container">
        
            <input className="input-box" type="text" name="isbn" placeholder="Isbn Number"/>
            <small className="form-input-error">{this.props.err.isbn}</small>
        </div>

        <div className="input-container">
            <input className="input-box" type="text" name="tit" placeholder="Title"/>
            <small className="form-input-error">{this.props.err.tit}</small>
        </div>

        <div className="input-container">    
            <input className="input-box" type="text"name="sector" placeholder="Sector"/>
            <small className="form-input-error">{this.props.err.sector}</small>

        </div>  
         
        <div className="input-container">  
        <small className="form-input-label">Publication Date</small>
            <input className="input-box" type="date" name="date"/>
            <small className="form-input-error">{this.props.err.date}</small>
        </div>

        <div className="input-container">    
            <input className="input-box" type="text" name="p" placeholder="Producer"/>
            <small className="form-input-error">{this.props.err.p}</small>
        </div>

         <div className="input-container">    
            <input className="input-box" type="text" name="a" placeholder="Actor Name(s)"/>
            <small className="form-input-error">{this.props.err.a}</small>

        </div>
        
        <div className="input-container">    
            <input className="input-box" type="text"name="language"placeholder="Language(s)"/>
            <small className="form-input-error">{this.props.err.language}</small>
            <input className="input-box" id="small-input-box" name="ns" type="text" placeholder="Subtitle(s)"/>
          <small className="form-input-error">{this.props.err.ns}</small>
        </div>

        {/* <div className="input-container">
         
         </div> */}


         <div className="input-container">    
            <input className="input-box" type="text" name="img" placeholder="Image Url(Optional)"/>
        </div>

         <div className="input-container">    
            <button className="form-submit-button">Add Dvd</button>   
          </div>

         </form>
          
      </div>
    )
  }
}
