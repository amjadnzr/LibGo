export class Person{
    
    private fname:string
    private lname:string

  constructor (fname:string,lname:string) {
      this.fname=fname;
      this.lname=lname;
  }
  
  public getLname():string{
    return this.lname;
}

public getFname():string{
    return this.fname;
}
}