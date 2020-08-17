import React from 'react';
import {
    Link,
  } from "react-router-dom";

  const Inicio = () => {
    return ( 
        <section id="cover">
        <div id="cover-caption">
            <div class="container">
            <h1 className="display-3 text-light">Welcome to my first App with React!</h1>
            <p>Click the Button to see the CRUD App</p>
            <Link to="/crudapp"><button className="btn btn-success">Go to the App</button></Link>
            </div>
        </div>
    </section>
     );
}

export default Inicio;



