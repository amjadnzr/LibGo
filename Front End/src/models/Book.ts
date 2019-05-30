import LibraryItem from './LibraryItem';

export default class Book extends LibraryItem{

    private a:string    // refers to authour
    private p:string    // refers to publisher
    private ns:string   // refer to pages
    private language:string 
    
    constructor (isbn:string,tit:string,sector:string,isBorrow:boolean,img:string,date:string,a:string,p:string,ns:string,language:string) {
        super(isbn,tit,sector,isBorrow,img,date)
        this.a=a;
        this.p=p;
        this.ns=ns;
        this.language=language;
    }

    public getAuthor():string{
        return this.a;
    }

    public getPublisher():string{
        return this.p;
    }
   
    public getPages():string{
        return this.ns;
    }
    public getLanguage():string{
        return this.language;
    }
   
   
    

}