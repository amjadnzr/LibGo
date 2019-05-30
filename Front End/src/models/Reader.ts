import { Person } from './Person';

export default class Reader extends Person{
   
    private mobile:string
    private memId:string
    private email:string

    constructor (fname:string,lname:string,mobile:string, memId:string,email:string) {
        super(fname,lname)
        this.mobile=mobile;
        this.memId=memId;
        this.email=email;
        
    }

    public getMobile():string{
        return this.mobile;
    }

    public getMemId():string{
        return this.memId;
    }
   
    public getEmail():string{
        return this.email;
    }
   
    
}