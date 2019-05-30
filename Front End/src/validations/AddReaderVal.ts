export default(reader:any):any=>{
    const error:any={}
    let isValid=true

if(reader. getMemId().length==0){
  error.memId="Membership Id Field is Empty"
  isValid=false
}
 const name=`${reader.getFname()}${reader.getLname()}`
if(name.length==0){
    error.rname="Reader Name Field is Empty"
  }

  if(reader.getMobile().length==0){
    error.rmobile="Reader Mobile Field is Empty"
    isValid=false
  }

  if(reader.getEmail().length==0){
    error.rmail="Reader Mail Field is Empty"
    isValid=false
  }
    const err={
        error,
       isValid
    }
return err
  


}