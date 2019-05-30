import LibraryItem from './LibraryItem';


export default class Dvd extends LibraryItem{

    private a: string;
    private p:string;
    private ns:string;
    private language:string;


    constructor (isbn:string,tit:string,sector:string,isBorrow:boolean,img:string,date:string,a:string,p:string,ns:string,language:string) {
        super(isbn,tit,sector,isBorrow,img,date)
        this.a=a;
        this.p=p;
        this.ns=ns;
        this.language=language;
    }

    public getActor():string{
        return this.a;
    }

    public getProdcuer():string{
        return this.p;
    }
   
    public getSubtitle():string{
        return this.ns;
    }
    public getLanguage():string{
        return this.language;
    }         
}