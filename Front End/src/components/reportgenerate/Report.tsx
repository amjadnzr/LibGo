import * as React from 'react'
import axios from 'axios'
import './generatereport.css'

export default class Report extends React.Component {

  public state={
    items:new Array()
  }
  
   public componentWillMount=()=>{
     axios.get('http://localhost:9000/displayall')
     .then((res:any)=>{
          console.log(res.data)

       res.data.forEach((item:any)=>{
          console.log(item)
          if(!item.isBorrow){
            // book has been borrowed
            let type=""
           console.log(item)
           if(item.className=="models.Book"){
              type="book"
           }else{
              type="dvd"
           }
           const date=new Date()
           const allData={
            year:item.brDate.year,
            month:item.brDate.month,
            day:item.brDate.day,
            hour:item.brDate.hour,
            min:item.brDate.minute,
            sec:item.brDate.second,
            years:date.getFullYear(),
            months:date.getMonth(),
            days:date.getDate(),
            hours:date.getHours(),
            mins:date.getMinutes(),
            secs:date.getSeconds(),
            isbn:item.isbn,
            type
        }
        console.log(allData)
        const sendData={
         headers:{
          "content-type":"application/json",
          
         },
         body:allData
       }
      axios.post('http://localhost:9000/calpenalty',sendData)
           .then((r:any)=>{console.log(r.data)})


          }
          this.setState({
            items:res.data
          })
       })   
     })
   }

  //  public componentDidMount=()=>{
  //    console.log("Just mounted")
  //    const objAr:any=Object.assign([],this.state.items)
  //    axios.get('http://localhost:9000/displayall')
  //      .then((res:any)=>{
  //         res.data.forEach(
  //           (item:any)=>{

  //             if(!item.isBorrow){
  //                  objAr.push(item)
  //             }
  //           }
  //         )

  //         this.setState({
  //           items:objAr
  //         })
  //         console.log(this.state.items)
  //      })

  //  }





   public   render() {
    return (
      
      <div className="report-container">
        <div className="report-table-container">
          <table className="report-table">
            <tbody>
              
              <tr className="report-table-header-row">
                <th className="report-table-header">Isbn</th>
                <th className="report-table-header">Title</th>
                <th className="report-table-header">Reader Id</th>
                <th className="report-table-header">Reader Name</th>
                <th className="report-table-header"> Borrow Date</th>
                <th className="report-table-header">Fee</th>
            </tr>
            { console.log(this.state.items)}
             { this.state.items.map(
              (itm:any,index:number)=>{
                if(itm.fee !=0){
                
                const date=`${itm.brDate.day}-${itm.brDate.month}-${itm.brDate.year}`
                const name=`${itm.reader.fname} ${itm.reader.lname}`
                return(
                // tslint:disable-next-line:no-unused-expression
                <tr key={itm.isbn}>
                <td className="report-table-data">{itm.isbn}</td>
                <td className="report-table-data">{itm.title}</td>
                <td className="report-table-data">{itm.reader.memId}</td>
                <td className="report-table-data">{name}</td>
                <td className="report-table-data">{date}</td>
                <td className="report-table-data">$ {itm.fee}</td>
            </tr>

             )
                }else{
                  return ""
                }
             })}
              
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
