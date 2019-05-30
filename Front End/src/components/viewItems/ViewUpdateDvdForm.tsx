import * as React from 'react'

export default function ViewUpdateDvdForm(props:any) {

    let date=`${props.dvd.pubDate.year}`
    if(props.dvd.pubDate.month<10){
        date +=`-0${props.dvd.pubDate.month}`
    }else{
        date +=`-${props.dvd.pubDate.month}`
    }
    if(props.dvd.pubDate.day<10){
       date +="-0"+props.dvd.pubDate.day
   }else{
       date +="-"+props.dvd.pubDate.day
   }
   console.log(date)

   let language=""
   props.dvd.language.map( (l:any,index:number)=>{
    if(props.dvd.language.length-1==index){
      language+=`${l}`
    }else{
      language+=`${l},`
}})

   let sub=''

   props.dvd.subtitles.map( (s:any,index:number)=>{
    if(props.dvd.subtitles.length-1==index){
      sub+=`${s}`
    }else{
      sub+=`${s},`
}})

let act=''

props.dvd.actors.map( (a:any,index:number)=>{
 if(props.dvd.actors.length-1==index){
   act+=`${a.fname} ${a.lname}`
 }else{
   act+=`${a.fname} ${a.lname},`
}})

 const prod=`${props.dvd.producer.fname} ${props.dvd.producer.lname}`

  return (
    <div className="add-form">
    
        <form  className="form-holder" onSubmit={props.onSubmitView}>
        <div className="input-container">
        
            <input className="input-box" type="text" name="isbn" placeholder="Isbn Number" value={props.dvd.isbn}/>
            <small className="form-input-error-black">{props.err.isbn}</small>
        </div>

        <div className="input-container">
            <input className="input-box" type="text" name="tit" onChange={props.onChangeInput} value={props.dvd.title} placeholder="Title"/>
            <small className="form-input-error-black">{props.err.tit}</small>
        </div>

        <div className="input-container">    
            <input className="input-box" type="text"name="sector" placeholder="Sector" value={props.dvd.sector}/>
            <small className="form-input-error-black">{props.err.sector}</small>

        </div>  
         
        <div className="input-container">  
        <small className="form-input-label">Publication Date</small>
            <input className="input-box" type="date" name="date" value={date}/>
        </div>

        <div className="input-container">    
            <input className="input-box" type="text" name="p" placeholder="Producer" value={prod}/>
            <small className="form-input-error-black">{props.err.p}</small>
        </div>

         <div className="input-container">    
            <input className="input-box" type="text" name="a" placeholder="Actor Name(s)" value={act}/>
            <small className="form-input-error-black">{props.err.a}</small>

        </div>
        
        <div className="input-container">    
            <input className="input-box" type="text"name="language"placeholder="Language(s)" value={language}/>
            <small className="form-input-error-black">{props.err.language}</small>
            <input className="input-box" id="small-input-box" name="ns" type="text" placeholder="Subtitle(s)" value={sub}/>
          <small className="form-input-error-black">{props.err.ns}</small>
        </div>

        {/* <div className="input-container">
         
         </div> */}


         <div className="input-container">    
            <input className="input-box" type="text" name="img" placeholder="Image Url(Optional)" value={props.dvd.img}/>
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
