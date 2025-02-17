import React from "react";
import CardComponent from "./CardComponent";

const ChefsComponent = () => {
  const chef_data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Chef Sanchita",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Chef Divya",
    },
  ];

  return (
    <>
      <CardComponent data={chef_data} />
    </>
  );
};

export default ChefsComponent;
