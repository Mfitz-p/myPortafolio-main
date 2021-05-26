import React, {Component} from "react"

export default class AboutMe extends Component{
    render(){
        return(
 <div className="row pt-5">
     <div className="col mb-4">
       <div className="card pt-3">
         
         <div className="card-body">
           <h3 className="card-title d-flex justify-content-center">Acerca de mí</h3>
           <h5 className="card-title d-flex justify-content-center">Soy una desarrolladora con un año de experiencia 
           profesional en el desarrollo Frontend de aplicaciones web  
           con el lenguaje JavaScript.</h5>
           <br></br>
           <h5 className="card-title d-flex justify-content-center">¡Me apasiona el desarrollo de Frontend!</h5>
         </div>
    
      </div>
     </div>
 </div>
    
 
        );
    }
}