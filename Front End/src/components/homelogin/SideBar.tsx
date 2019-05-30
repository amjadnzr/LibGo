import * as React from 'react'
import './homelogin.css'
import {Link} from 'react-router-dom'


export default class  SideBar extends React.Component<{show:any}> {
  
  
    public state={
        ulclass:"ulclass",
        btnclass:"btnclass",
        
    }

    public mouseOver=(e:React.MouseEvent<Element>):void=>{
            e.currentTarget.id="hover"
    }

    public mouseOut=(e:React.MouseEvent<Element>)=>{
        if(e.currentTarget.id.toString()=="hover"){
          e.currentTarget.id=""
        }
        
    }

    // public onClick=()=>{
    //     console.log('====================================');
    //     console.log();
    //     console.log('====================================');
    // }
   
  
  public render() {
    return (
      <div>
        <nav>
            <ul className={this.state.ulclass}>
                <li><h1 className="heading-1">Libgo</h1></li>
                <li><Link to='/viewitems'><button className={this.state.btnclass} 
                            id="" 
                            // onMouseOver={this.mouseOver} 
                            // onMouseOut={this.mouseOut}
                          >          
                View Item</button></Link></li>

                <li><Link to='/additems'><button className={this.state.btnclass} 
                             id=""
                            //  onMouseOver={this.mouseOver} 
                            //  onMouseOut={this.mouseOut}
                           >
                Add Item</button></Link></li>

                <li><Link to="/borrowreturn"><button className={this.state.btnclass} 
                             id=""
                            //  onMouseOver={this.mouseOver} 
                            //  onMouseOut={this.mouseOut}
                           > 
                
                Borrow|Return Item</button></Link></li>

                <li><Link to="/reserveitem"><button className={this.state.btnclass} 
                            id=""
                            // onMouseOver={this.mouseOver} 
                            // onMouseOut={this.mouseOut}
                          >
    
                Reserve Item</button></Link></li>

                <li><Link to="/report"><button className={this.state.btnclass} 
                            id="" 
                            // onMouseOver={this.mouseOver} 
                            // onMouseOut={this.mouseOut}
                          >
                
                Generate Report</button></Link></li>


                <li><Link to="/"><button className={this.state.btnclass} 
                id=""
                // onMouseOver={this.mouseOver} 
                // onMouseOut={this.mouseOut}
                onClick={this.props.show.bind(this,false)}
              > 
                
                Log Out</button></Link></li>


            </ul>
        </nav>
      </div>
    )
  }
}
