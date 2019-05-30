import * as React from 'react'

export default class AddBookForm extends React.Component<{addBook:any,err:any}> {
  
  public render() {
     const {err}=this.props
    return (
      <div className="add-form">
    
        <form  className="form-holder" onSubmit={this.props.addBook}>
        <div className="input-container">
        
            <input className="input-box" type="text" name="isbn" placeholder="Isbn Number"/>
            <small className="form-input-error">{err.isbn}</small>
        </div>

        <div className="input-container">
            <input className="input-box" type="text" name="tit" placeholder="Title"/>
            <small className="form-input-error">{err.tit}</small>
        </div>

        <div className="input-container">    
            <input className="input-box" type="text"name="sector" placeholder="Sector"/>
            <small className="form-input-error">{err.sector}</small>

        </div>  
         
        <div className="input-container">  
        <small className="form-input-label">Publication Date</small>
            <input className="input-box" type="date" name="date"/>
            <small className="form-input-error">{err.date}</small>

            <input className="input-box" id="small-input-box" name="ns" type="text" placeholder="No.of pages"/>
            <small className="form-input-error">{err.ns}</small>

        </div>

        <div className="input-container">    
            <input className="input-box" type="text" name="p" placeholder="Publisher"/>
            <small className="form-input-error">{err.p}</small>
        </div>

         <div className="input-container">    
            <input className="input-box" type="text" name="a" placeholder="Author Name(s)"/>
            <small className="form-input-error">{err.a}</small>

        </div>
        
        <div className="input-container">    
            <input className="input-box" type="text"name="language"placeholder="Language"/>
            <small className="form-input-error">{err.language}</small>

        </div>

         <div className="input-container">    
            <input className="input-box" type="text" name="img" placeholder="Image Url(Optional)"/>
        </div>

         <div className="input-container">    
            <button className="form-submit-button">Add Book</button>   
          </div>

         </form>
          
      </div>
    )
  }
}
