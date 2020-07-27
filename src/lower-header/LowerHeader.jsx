import React from "react";
import { Button } from "react-bootstrap";
import "./LowerHeader.scss";

function LowerHeader(){
    
    return(
        <section class="jumbotron text-center">
          <div class="container">
            <h1>Education simplified.</h1>
            <p class="lead text-muted">
              Our mission is to empower young Students to be the inventors and creators.
            </p>
            <p>
             
              <Button  className="my-op">Start Learning Today !</Button>
              
            </p>
          </div>
        </section>
    )
}
export default LowerHeader;