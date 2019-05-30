import * as React from 'react'
import axios from 'axios'
import './viewitems.css'
import ViewBar from './ViewBar'
import ViewCard from './ViewCard'
import ViewUpdateBookForm from './ViewUpdateBookForm'
import ViewUpdateDvdForm from './ViewUpdateDvdForm'
import ViewCount from './ViewCount'
// import { number } from 'prop-types';
// import Dvd from 'src/models/Dvd';
// import Book from 'src/models/Book';
export default class ViewItems extends React.Component {
     
  public state={
    items:new Array(),
    viewForm:false,
    book:{},     // shows an individual book
    dvd:{},      // shows an individual dvd
    bd:true,      // decides the form is book update form/ dvd update form default:book
    btnB:true,     // decides whether to show the delete button or edit button by default its edit for book
    btnD:true,     // decides whether to show the delete button or edit button by default its edit for dvd
    err:{},       // coz of place holder not visible to show info and also display error 
    index:0,    // stores the index of the item which is to be shown or deleted
    isbn:0 ,      // Stores the isbn of the object to be deleted
    bc:0 ,       // count for books spaces
    dc:0,       // count for dvd spaces
    hidden:new Array(),
    hd:true     // to see weather searching for the first time or not
  }

  public componentWillMount():void{
       const newItems= Object.assign([],this.state.items);
    axios.get('http://localhost:9000/displayall')
        .then((res:any)=>{
           console.log(res.data)
           res.data.forEach((itm:any)=>{
              newItems.push(itm)
              this.setState({
                items:newItems
              })
           })
           console.log("Pritning the new Items")
         //  console.log(newItems)
        })

        console.log(this.state.items)    
  }


// public componentDidMount
public componentDidMount=()=>{
  axios.get('http://localhost:9000/getcount')
       .then(
         (res:any)=>{
           console.log(res.data)
           this.setState({
             bc:res.data.bc,
             dc:res.data.dc
           })
         }
       )
}

  // Displays View Update forms Form
  public showViewFormOnClick=(index:number):void=>{
       console.log("Opened View Form")
       console.log(index)
       const item=this.state.items[index]
       console.log(item)

       

      if(item.className.toString()=="models.Book"){
        const err={
          isbn:"Isbn number",
          tit:"Title",
          sector:"Sector",
          pubDate:"",
          a:"Author Name(s)",
          p:"Publisher Name",
          img:"Image url(optional)",
          ns:"No.of Pages",
          language:"Language"
        }
        this.setState({
          book:item,
          viewForm:true,
          bd:true,
          err,
          btnB:true
         })
      }else{
        const err={
          isbn:"Isbn number",
          tit:"Title",
          sector:"Sector",
          pubDate:"",
          a:"Actor Name(s)",
          p:"Producer Name",
          img:"Image url(optional)",
          ns:"Subtitle(s)",
          language:"Language(s)"
        }
        this.setState({
          dvd:item,
          viewForm:true,
          bd:false,
          err,
          btnD:true
         })
      }
           
      
  }

  // search implementation
  public searchThis=(e:React.ChangeEvent<HTMLInputElement>)=>{
    
    console.log(e.currentTarget.value)
    let itemArr=new Array()

     const showArr=new Array()   // used as items after search
    if(e.currentTarget.value==""){
       const hidden=Object.assign([],this.state.hidden)
      this.setState({
        hd:true,
        items:hidden
      })
      console.log("No Search")
    }else{

       if(this.state.hd){
         itemArr=Object.assign([],this.state.items)
         console.log("HD is true!!")
         this.setState({
           hidden:itemArr
         })
       }else{
        itemArr=Object.assign([],this.state.hidden)
       }

      this.setState({
        hd:false
      })
      const val=e.currentTarget.value
    
      itemArr.forEach(
        (item:any)=>{
           // tslint:disable-next-line:no-unused-expression
          const subVal= item.title.substring(0,val.length)
           console.log(subVal)
           if(subVal==val){
             console.log("Found")
             // tslint:disable-next-line:no-unused-expression
             showArr.push(item)
           }else{
             console.log("Not Found")
           }
        }
      )

      this.setState({
        items:showArr
      })

    }
  
  }


  
  // Submit (view form) click edit buttom(book)
  public onSubmitViewForm=(e:React.FormEvent<HTMLFormElement>):void=>{
          e.preventDefault();
        this.setState({
          viewForm:false
        })
      
  }



  // show delete form
  public deleteFormOnClick=(index:number)=>{
        const item=this.state.items[index]
      if(item.className.toString()=="models.Book"){
        const err={
          isbn:"Isbn number",
          tit:"Title",
          sector:"Sector",
          pubDate:"",
          a:"Author Name(s)",
          p:"Publisher Name",
          img:"Image url(optional)",
          ns:"No.of Pages",
          language:"Language"
        }

        this.setState({
          viewForm:true,
          btnB:false,
          book:item,
          dvd:{},
          bd:true,
          err,
          index,
          isbn:item.isbn
         })
      
      }else{
        const err={
          isbn:"Isbn number",
          tit:"Title",
          sector:"Sector",
          pubDate:"",
          a:"Actor Name(s)",
          p:"Producer Name",
          img:"Image url(optional)",
          ns:"Subtitle(s)",
          language:"Language(s)"
        }

        this.setState({
          viewForm:true,
          btnD:false,
          dvd:item,
          book:{},
          bd:false,
          err,
          index,
          isbn:item.isbn
         })
      
      }
    
  }

  // Final delete click
  public deleteOnclick=(e:React.MouseEvent)=>{
    console.log("Deleting.....")
    let bc=this.state.bc
    let dc=this.state.dc
    // deleting from react rendor
      const items=Object.assign([],this.state.items)
      
    // Deleting from database
        const obj=Object.assign({},this.state.items[this.state.index])
    if(obj.className=="models.Book"){
          
          console.log("Woah its a book")
          bc+=1;
         axios.delete(`http://localhost:9000/deleteitem/${this.state.isbn}/book`)
        this.setState({
          viewForm:false
        })
      }else{
        console.log("Woah its a dvd")
        dc+=1
        axios.delete(`http://localhost:9000/deleteitem/${this.state.isbn}/dvd`)
        this.setState({
          viewForm:false
        })

      }
       items.splice(this.state.index,1)
      this.setState({
        items,
        bc,
        dc
      })

      alert("Success! Item Deleted")
  }

  
  public  render() {
    return (
      <div>
        <ViewBar search={this.searchThis}/>
        <ViewCount bc={this.state.bc} dc={this.state.dc}/>
        <div className="view-item-container">
        {!(this.state.viewForm) ?(
           <ViewCard items={this.state.items} 
               viewClick={this.showViewFormOnClick}
               deleteClick={this.deleteFormOnClick}
              
               />
        ):(
          <div>
            {this.state.bd ?(
          <ViewUpdateBookForm btn={this.state.btnB} book={this.state.book} err={this.state.err} 
                           onSubmitView={this.onSubmitViewForm}
                           deleteButton={this.deleteOnclick}
                           index={this.state.index}
                           />
            ):(
          <ViewUpdateDvdForm btn={this.state.btnD} dvd={this.state.dvd} err={this.state.err}
                           onSubmitView={this.onSubmitViewForm}
                           deleteButton={this.deleteOnclick}
                           index={this.state.index}
                           />
            )}
          </div>
        )
        }
       </div>
      </div>
    )
  }
}
