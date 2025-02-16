import React from "react";

const AComponent = (
  // props
  { dataProps, Person_age }
) => {
  //   console.log(props);
  //   const child = props.dataProps;
  //   const age = props.Person_age;

  return (
    <div>
      <p>
        This is A Component and the data is
        {/* {props.dataProps} */}
        {dataProps}
        and age is
        {/* {age} */} {Person_age}
      </p>
    </div>
  );
};

export default AComponent;
