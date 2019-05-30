
export default (book:any):any => {
   let isValid=true
   const err:any={}

   // Check whether all are digits
   const isnum = /^\d+$/.test(book.getIsbne());
   if(!isnum){
    err.isbn="Isbn Field should have only Numbers"

   }

   // Check whether isbn is empty
  if(book.getIsbne().length==0){
       isValid=false
       err.isbn="Isbn Field Empty"
  }

  // Check whether tit is empty
  if(book.getTit().length==0){
    isValid=false
    err.tit="Title Field Empty"
}

 // Check whether sector is empty
 if(book.getSector().length==0){
  isValid=false
  err.sector="Sector Field Empty"
}

// Check whether date is empty
if(book.getDate().length==0){
  isValid=false
  err.date="Date Field Empty"
}

// Check whether author is empty    
if(book. getAuthor().length==0){
  isValid=false
  err.a="Author Field Empty"
}

// Check whether publisher is empty
if(book. getPublisher().length==0){
  isValid=false
  err.p="Publisher Field Empty"
}

// Check whether language is empty
if(book. getLanguage().length==0){
  isValid=false
  err.language="Language Field Empty"
}
 
if(book.getPages().length==0){
  isValid=false
  err.ns="Pages Field Empty"
}

 
  return {
    isValid,
    err
  }
}
