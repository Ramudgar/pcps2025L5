import React from "react";
import AComponent from "./AComponent";

const BComponent = () => {
    const data= "B";
    const age= 25;  
  return (
    <div className="text-center d-flex justify-content-center align-items-center vh-100 text-light bg-dark">
      <AComponent dataProps={data} Person_age={age} />
    </div>
  );
};

export default BComponent;
