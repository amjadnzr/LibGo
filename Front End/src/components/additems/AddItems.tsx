import * as React from 'react'
import axios from 'axios'
import InnerBar from './InnerBar'
import AddBookForm from './AddBookForm'
import AddDvdForm from './AddDvdForm'
import './AddItem.css'
import Book from '../../models/Book'
import Dvd from '../../models/Dvd'
import AddBookFormValidator from '../../validations/AddBookFormVal'
import AddDvdFormValidator from '../../validations/AddDvdFormVal'

export default class AddItem extends React.Component {
 
    public state={
       isType:true ,     // decides whether add book form/ add dvd form  by default its book form
       err:{}            // stores the error to be sent

    }

  
    // Used for changing between AddDvdForm and AddBookForm
    public changeFormOnClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
      console.log("=====changeFormOnClick====")
      console.log(e.currentTarget.id)
      if(e.currentTarget.id.toString()=="btn1"){this.setState({isType:true})}
      else{this.setState({isType:false})}
    }
    
    // Used to add books to the database
    public addBook=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log("=====addBook====")
          const book= new Book(
            e.currentTarget.isbn.value,
            e.currentTarget.tit.value,
            e.currentTarget.sector.value,
            false,
            e.currentTarget.img.value,
            e.currentTarget.date.value,
            e.currentTarget.a.value,
            e.currentTarget.p.value,
            e.currentTarget.ns.value,
            e.currentTarget.language.value
          )
          console.log(book)

          const error= AddBookFormValidator(book)
          console.log(error)
          this.setState({err:error.err})
         if(error.isValid){
              console.log("No error")
              // clearing the inputs
              const sendData={
                headers:{
                 "content-type":"application/json",
                 
                },
                body:book
              }
          
              axios.post('http://localhost:9000/addbook',sendData)
                  .then((res:any)=>{
                     console.log("Post Request made")
                  })
                  e.currentTarget.isbn.value=""
                  e.currentTarget.tit.value=""
                  e.currentTarget.sector.value=""
                  e.currentTarget.img.value=""
                  e.currentTarget.date.value=""
                  e.currentTarget.a.value=""
                  e.currentTarget.p.value=""
                  e.currentTarget.ns.value=""
                  e.currentTarget.language.value=""

                alert("Book Succeesfully Added")
         }else{
             console.log("Have error")
         }
        
    }

      // Used to add dvds to the database
      public addDvd=(e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
 
         console.log("=====addDvd====")
         
             const dvd= new Dvd(
               e.currentTarget.isbn.value,
               e.currentTarget.tit.value,
               e.currentTarget.sector.value,
               false,
               e.currentTarget.img.value,
               e.currentTarget.date.value,
               e.currentTarget.a.value,
               e.currentTarget.p.value,
               e.currentTarget.ns.value,
               e.currentTarget.language.value
             )
             console.log(dvd)
   
             const error=AddDvdFormValidator(dvd)
             console.log(error)
             this.setState({err:error.err})
            if(error.isValid){
                 console.log("No error")
                 // clearing the inputs
                 const sendData={
                   headers:{
                    "content-type":"application/json",
                    
                   },
                   body:dvd
                 }
             
                 axios.post('http://localhost:9000/adddvd',sendData)
                     .then((res:any)=>{
                        console.log("Post Request made")
                     })
                     e.currentTarget.isbn.value=""
                     e.currentTarget.tit.value=""
                     e.currentTarget.sector.value=""
                     e.currentTarget.img.value=""
                     e.currentTarget.date.value=""
                     e.currentTarget.a.value=""
                     e.currentTarget.p.value=""
                     e.currentTarget.ns.value=""
                     e.currentTarget.language.value=""

                     alert("Dvd is Successfully Added")
            }else{
                console.log("Have error")
            }
      }
    public render() {
    return (
      <div>
        <div>
       <InnerBar onChangeForm={this.changeFormOnClick}/>
       </div>
       <div className="add-form-container">
       {this.state.isType ?
       (
         <AddBookForm addBook={this.addBook} err={this.state.err}/>
       ):(
         <AddDvdForm addDvd={this.addDvd} err={this.state.err}/>
       )
       }
       </div> 
      </div>
      
    )
  }
}
