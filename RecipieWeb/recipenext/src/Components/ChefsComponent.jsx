import React from "react";
import CardComponent from "./CardComponent";

const ChefsComponent = () => {
  const chefsdata = [
    {
      title: "Gordon Ramsay",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Gordon_Ramsay.jpg",
    },
    {
      title: "Jamie Oliver",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Jamie_Oliver_May_2015_%28cropped%29.jpg",
    },
    {
      title: "Sanjeev Kapoor",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Sanjeev_Kapoor.jpg",
    },
  ];
  return (
    <>
      <CardComponent data={chefsdata} />
    </>
  );
};

export default ChefsComponent;
