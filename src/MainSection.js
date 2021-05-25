import React, {Component} from "react";


export default class MainSection extends Component{
    render(){
        //const url ="https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        return(
        <div className="card-body">   
          <div className="row">
            <div className="col-sm-12">
            <div className ="container">
            <div style ={{width: "50%", float: "center"}}>
                <h1>Hi i'am Martha Fitz Pineda</h1>
                <h3>Software Developer</h3>
                <button type="button" class="btn btn-outline-success">Contáctame</button>
            </div>
            </div>
            </div>
          
        </div>  
        </div>
        );
    }
}