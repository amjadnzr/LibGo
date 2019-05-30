import * as React from 'react'
import axios from 'axios'
import '../reportgenerate/generatereport.css'
import ReserveCard from './ReserveCard'
import ReserveForm from './ReserveForm'
import ReserveTable from './ReserveTable'
export default class ReserveItem extends React.Component {
  
    public state={
        items:new Array(),
        show1:true, // change between card and form 
        show2:true,
        err:{
            memId:"",
            rname:"",
            rmail:"",
            rmobile:""
        },
        reservers:new Array()

    }

    public componentWillMount=()=>{
         const objArr=Object.assign([],this.state.items)
        axios.get('http://localhost:9000/displayall')
          .then(
              (res:any)=>{
                console.log(res.data)

                  res.data.forEach((itm:any)=>{
                    if(!itm.isBorrow){
                        objArr.push(itm)
                    }  
                  })
                 this.setState({items:objArr})
              }
          )
    }

    // change fromcard to form
    public onClickReserve=()=>{
    
        this.setState({show1:false,show2:true})
    }

    // change to reserve table
    public onClickShow=(e:MouseEvent,index:number)=>{
        console.log(index)
        this.setState({show1:false,show2:false})
   }

   // change from reserve table to card
   public onClickOk=()=>{
       this.setState({show1:true})
   }
 public  render() {
    return (
      <div className="reserve-item-container">
      {this.state.show1 ? (
        <ReserveCard items={this.state.items} onReserve={this.onClickReserve} onShow={this.onClickShow} />):(
         this.state.show2 ?(  
        <ReserveForm err={this.state.err}/>):(
         <ReserveTable item={this.state.reservers} onOk={this.onClickOk}/>
        )
         
        )
      }
      </div>
    )
  }
}
