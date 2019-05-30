
export default (dvd:any):any => {
    let isValid=true
    const err:any={}
 
    // Check whether all are digits
    const isnum = /^\d+$/.test(dvd.getIsbne());
    if(!isnum){
     err.isbn="Isbn Field should have only Numbers"
 
    }
 
    // Check whether isbn is empty
   if(dvd.getIsbne().length==0){
        isValid=false
        err.isbn="Isbn Field Empty"
   }
 
   // Check whether tit is empty
   if(dvd.getTit().length==0){
     isValid=false
     err.tit="Title Field Empty"
 }
 
  // Check whether sector is empty
  if(dvd.getSector().length==0){
   isValid=false
   err.sector="Sector Field Empty"
 }
 
 // Check whether date is empty
 if(dvd.getDate().length==0){
   isValid=false
   err.date="Date Field Empty"
 }
 
 // Check whether author is empty    
 if(dvd.getActor().length==0){
   isValid=false
   err.a="Author Field Empty"
 }
 
 // Check whether publisher is empty
 if(dvd.getProdcuer().length==0){
   isValid=false
   err.p="Publisher Field Empty"
 }
 
 // Check whether language is empty
 if(dvd. getLanguage().length==0){
   isValid=false
   err.language="Language Field Empty"
 }
  
 if(dvd.getSubtitle().length==0){
   isValid=false
   err.ns="Subtitles Field Empty"
 }
 
  
   return {
     isValid,
     err
   }
 }
 