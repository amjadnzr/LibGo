import * as React from 'react'

export default (props:any) => {
    console.log(props.book.author)
    let auth=""
    let date=`${props.book.pubDate.year}`
     if(props.book.pubDate.month<10){
         date +=`-0${props.book.pubDate.month}`
     }else{
         date +=`-${props.book.pubDate.month}`
     }
     if(props.book.pubDate.day<10){
        date +="-0"+props.book.pubDate.day
    }else{
        date +="-"+props.book.pubDate.day
    }
    console.log(date)
       // tslint:disable-next-line:no-unused-expression
       props.book.author.map( (a:any,index:number)=>{
           if(props.book.author.length-1==index){
             auth+=`${a.fname} ${a.lname}`
           }else{
             auth+=`${a.fname} ${a.lname},`
       }})


  return (
    <div className="add-form">
    
        <form  className="form-holder" onSubmit={props.onSubmitView}>
        <div className="input-container">
        
            <input className="input-box" type="text" name="isbn" placeholder="Isbn Number" value={props.book.isbn}/>
            <small className="form-input-error-black">{props.err.isbn}</small>
        </div>

        <div className="input-container">
            <input className="input-box" type="text" name="tit" placeholder="Title" value={props.book.title}/>
            <small className="form-input-error-black">{props.err.tit}</small>
        </div>

        <div className="input-container">    
            <input className="input-box" type="text"name="sector" placeholder="Sector" value={props.book.sector} />
            <small className="form-input-error-black">{props.err.sector}</small>

        </div>  
         
        <div className="input-container">  
        <small className="form-input-label">Publication Date</small>
            <input className="input-box" type="date" name="date" value={date} />
            <small className="form-input-error-black">{props.err.date}</small>

            <input className="input-box" id="small-input-box" name="ns" type="text" placeholder="No.of pages" value={props.book.pages}/>
            <small className="form-input-error-black">{props.err.ns}</small>

        </div>

        <div className="input-container">    
            <input className="input-box" type="text" name="p" placeholder="Publisher" value={props.book.publisher.name}/>
            <small className="form-input-error-black">{props.err.p}</small>
        </div>

         <div className="input-container">    
            <input className="input-box" type="text" name="a" placeholder="Author Name(s)" value={auth}/>
            <small className="form-input-error-black">{props.err.a}</small>

        </div>
        
        <div className="input-container">    
            <input className="input-box" type="text"name="lang"placeholder="Language" value={props.book.language}/>
            <small className="form-input-error-black">{props.err.language}</small>

        </div>

         <div className="input-container">    
            <input className="input-box" type="text" name="img" placeholder="Image Url(Optional)" value={props.book.img}/>
            <small className="form-input-error-black">{props.err.img}</small>
        </div>

         <div className="input-container">  
         { props.btn ?(
         <button className="form-submit-button">Ok</button> ):(
            <button className="form-submit-button-delete" onClick={props.deleteButton}>Delete</button>)
         }
          </div>

         </form>
          
      </div>
  )
}
