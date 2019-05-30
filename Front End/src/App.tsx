import * as React from 'react';
import './App.css'
import 'typeface-roboto';
import SideBar from './components/homelogin/SideBar'
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'
import AddItem from './components/additems/AddItems'
import Login from './components/homelogin/Login'
import ViewItems from './components/viewItems/ViewItems'
import BorrowReturn from './components/borrowreturn/BorrowReturn'
import Report from './components/reportgenerate/Report'
import ReserveItem from './components/reserveitem/ReserveItem'
class App extends React.Component {

  public state={
    show:false  // default must always be false
    
  }

 public showNow=(b:boolean)=>{
   let show=this.state.show
   if(b){
     show=true
   }else{
     show=false;
   }
   this.setState({show})
 }

 public backLogin=()=>{
  location.replace("http://localhost:3000/")
 }
 
 public authErr=()=>{
   return (<div>
     <h1>Authentication error-No Access</h1>
     <button onClick={this.backLogin}>Login Again</button>
     </div>
     )
 }
  public render() {
    

    return (
      
       <Router>
       
       
        {!this.state.show?( <div className="not-app"> 
        <Route exact path="/" render={() => <Login show={this.showNow} />}/>
         <Route exact path="/viewitems" component={this.authErr}/>
        <Route exact path="/additems" component={this.authErr}/>
        <Route exact path="/borrowreturn" component={this.authErr}/>
        <Route exact path="/report" component={this.authErr}/>
        <Route exact path="/reserveitem" component={this.authErr}/>

        </div>
        
        ):
        
        ( <div className="app">
          <div className="app1">
          <SideBar show={this.showNow}/>
       </div>
       <div className="app2">
       <Redirect to="/viewitems" />
       <Route exact path="/viewitems" component={ViewItems}/>
       <Route exact path="/additems" component={AddItem}/>
       <Route exact path="/borrowreturn" component={BorrowReturn}/>
       <Route exact path="/report" component={Report}/>
       <Route exact path="/reserveitem" component={ReserveItem}/>

       </div>
       </div>
     
        )}
         </Router>
    
    
    );
  }
}

export default App;
