import * as React from "react";
import axios from "axios";
import TopBar from "./TopBar";
import BorrowCard from "./BorrowCard";
import ReturnCard from "./ReturnCard";
import BorrowForm from "./BorrowForm";
import ReturnForm from "./ReturnForm";
import Reader from "../../models/Reader";
import ReaderVal from "../../validations/AddReaderVal";
import "./BorrowRetrun.css";
export default class BorrowReturn extends React.Component {
  public state = {
    borrows: new Array(),
    returns: new Array(),
    br: true, // decides whether to show the borrow list else the return list (default:borrow list)
    bcf: true, // decides to whether show borrow card or borrow form(default:borrow card)
    dcf: true, // decides to whether show return card or return form(default:return card)
    err: {}, // used to show error in reader detail inputs and also to display as name
    type: "", // used to show the type of the borrow item whether a book or dvd
    bisbn: "", // used to store borrow items isbn number
    bindex: 0, // used to store borrow items index when clicked borrow,
    dIndex: 0, // used to store return item index when clicked return
    itm: {}, // stores object info of at return click
    fee: "" // Stores the value of amount to be paid
  };

  public componentWillMount = () => {
    const borrows = Object.assign([], this.state.borrows);
    const returns = Object.assign([], this.state.returns);
    axios.get("http://localhost:9000/displayall").then((res: any) => {
      res.data.forEach((element: any) => {
        if (element.isBorrow) {
          borrows.push(element);
        } else {
          returns.push(element);
        }
      });
      console.log("Added to array");
      this.setState({
        borrows,
        returns
      });
    });

    console.log(this.state);
  };

  // change between borrow and return view
  public changeBorrowReturn = (e: React.MouseEvent, index: number): void => {
    console.log(index);
    console.log("===Change Borrow and Return Function===");
    console.log(e.currentTarget.id);

    if (e.currentTarget.id.toString() == "btn1") {
      console.log("Access borrow");

      this.setState({
        br: true
      });
    } else {
      console.log("Access return");

      this.setState({
        br: false
      });
    }
  };

  // click to show borrow form
  public onClickBorrow = (index: number): void => {
    console.log(index);
    let type = "";
    const brr = this.state.borrows[index];
    if (brr.className == "models.Book") {
      type = "book";
    } else {
      type = "dvd";
    }
    console.log(brr.isbn);

    this.setState({
      br:true,
      bcf: false,
      type,
      bisbn: brr.isbn,
      bindex: index,
      itm: {}
    });
  };

  // click to show return form
  public axios1 = (isbn: string,type:string) => {
    return axios.get(`http://localhost:9000/showinfo/${isbn}/${type}`);
  };

  public axios2 = (sendData: any) => {
    return axios.post("http://localhost:9000/calpenalty", sendData);
  };
  public onClickReturn = (index: number) => {
    const err = {
      memId: "Membership Id",
      rname: "Reader Name",
      rmail: "Reader mail",
      rmobile: "Reader mobile",
      fee: "Due Fee"
    };
    this.setState({
      err
    });
    const rnObj = Object.assign({}, this.state.returns[index]);
    const itm: any = Object.assign({}, this.state.itm);
    console.log(itm);
    
    let type = "";
    if (rnObj.className == "models.Book") {
      type = "book";
    } else {
      type = "dvd";
    }
    const date = new Date();
    const allData = {
      year: rnObj.brDate.year,
      month: rnObj.brDate.month,
      day: rnObj.brDate.day,
      hour: rnObj.brDate.hour,
      min: rnObj.brDate.minute,
      sec: rnObj.brDate.second,
      years: date.getFullYear(),
      months: date.getMonth(),
      days: date.getDate(),
      hours: date.getHours(),
      mins: date.getMinutes(),
      secs: date.getSeconds(),
      isbn: rnObj.isbn,
      type
    };
    console.log(date.getMonth());
    console.log(allData);
    const sendData = {
      headers: {
        "content-type": "application/json"
      },
      body: allData
    };

    axios.all([this.axios1(rnObj.isbn,type), this.axios2(sendData)]).then(
      axios.spread((a1, a2) => {
        console.log(a1.data);
        console.log(a2.data);
        this.setState({
          itm: a1.data,
          fee: a2.data,
          br:false,
          dcf: false,
          err,
          dIndex: index
        });
      })
    );

    //     console.log(rnObj)
  };

  // submit borrow form
  public onSubmitBorrow = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const arr = e.currentTarget.rname.value.split(" ");
    console.log(arr);
    let fname = "";
    let lname = "";
    if (arr.length == 1) {
      fname = arr[0];
    } else {
      (fname = arr[0]), (lname = arr[1]);
    }
    const reader = new Reader(
      fname,
      lname,
      e.currentTarget.rmobile.value,
      e.currentTarget.memId.value,
      e.currentTarget.rmail.value
    );
    const err = ReaderVal(reader);
    this.setState({
      err: err.error
    });

    if (err.isValid) {
      // no error
      const date = new Date();
      console.log(date);
      // database add part
      console.log("woah");
      const allData = {
        isbn: this.state.bisbn,
        type: this.state.type,
        status: false,
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        min: date.getMinutes(),
        hour: date.getHours(),
        sec: date.getSeconds(),
        id: e.currentTarget.memId.value,
        name: e.currentTarget.rname.value,
        mobile: e.currentTarget.rmobile.value,
        email: e.currentTarget.rmail.value
      };
      const sendData = {
        headers: {
          "content-type": "application/json"
        },
        body: allData
      };

      // borrow in react array

      const brArray: any = Object.assign([], this.state.borrows);
      const rnArray = Object.assign([], this.state.returns);

      axios
        .post("http://localhost:9000/addborrow", sendData)
        .then((rs: any) => {
          console.log("Book Successfully borrowed");
          console.log(rs.data);
          
          this.axios1(this.state.bisbn,this.state.type).then((res: any) => {
            console.log(res.data);
            brArray[this.state.bindex] = res.data;
            console.log(brArray[this.state.bindex]);
    
            this.setState({
              itm: brArray[this.state.bindex]
            });
            rnArray.push(brArray[this.state.bindex]);
            brArray.splice(this.state.bindex, 1);
    
            this.setState({
              br:true,
              bcf: true,
              borrows: brArray,
              returns: rnArray,
             
            });
          });
    
        });
     console.log(this.state.bisbn)
      
      console.log(brArray);
      console.log(rnArray);

      console.log("Important");
      console.log(this.state.borrows);
      console.log(this.state.returns);

      alert("Item borrowed Succesfully");
    }
  };
  public onSubmitReturn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log();
    const rtnObj = Object.assign({}, this.state.returns[this.state.dIndex]);
    let type = "";
    if (rtnObj.className == "models.Book") {
      type = "book";
    } else {
      type = "dvd";
    }
    const allData = {
      isbn: rtnObj.isbn,
      type,
      status: true,
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      id: "",
      email: "",
      mobile: "",
      name: ""
    };
    const sendData = {
      headers: {
        "content-type": "application/json"
      },
      body: allData
    };
    const brArray: any = Object.assign([], this.state.borrows);
    const rnArray = Object.assign([], this.state.returns);

    axios.post("http://localhost:9000/addreturn", sendData).then((res: any) => {
      brArray.push(rnArray[this.state.dIndex]);
      rnArray.splice(this.state.dIndex, 1);
      this.setState({
        borrows: brArray,
        returns: rnArray
      });
    });

    alert("Returned Succesfully");
    this.setState({
      br: false,
      dcf: true,
      err:{}
    });
  };

  public render() {
    return (
      <div>
        <TopBar onClickChange={this.changeBorrowReturn} />
        <div className="borrow-return-container">
          {this.state.br ? (
            this.state.bcf ? (
              <BorrowCard
                items={this.state.borrows}
                onClickBorrow={this.onClickBorrow}
              />
            ) : (
              <BorrowForm
                err={this.state.err}
                onSubmitBorrow={this.onSubmitBorrow}
              />
            )
          ) : this.state.dcf ? (
            <ReturnCard
              items={this.state.returns}
              onClickReturn={this.onClickReturn}
            />
          ) : (
            <ReturnForm
              err={this.state.err}
              onSubmitReturn={this.onSubmitReturn}
              itm={this.state.itm}
              fee={this.state.fee}
            />
          )}
        </div>
      </div>
    );
  }
}
