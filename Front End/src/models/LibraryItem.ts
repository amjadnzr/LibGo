import Reader from './Reader';


export default class LibraryItem{
    
   private isbn:string
   private tit:string
   private sector:string
   private isBorrow:boolean
   private img:string
   private fee:number
   private reader:Reader
   private date:string
   private brDate:string

   constructor (isbn:string,tit:string,sector:string,isBorrow:boolean, img:string, 
                date:string) {
      this.isbn=isbn;
      this.tit=tit;
      this.sector=sector;
      this.isBorrow=isBorrow;
      this.img=img;
     
      this.date=date;
   }
   
   public getIsbne():string{
      return this.isbn;
  }

  public getTit():string{
   return this.tit;
}
public getSector():string{
   return this.sector;
}

public getIsBorrow():boolean{
   return this.isBorrow;
}

public getImg():string{
   return this.img;
}

public getBrDate():string{
   return this.brDate;
}
public getDate():string{
   return this.date;
}

public getFee():number{
   return this.fee;
}

public getReader():Reader{
   return this.reader;
}
}