import React from "react";
import CardComponent from "./CardComponent";

const RecipeCard = () => {
  // Array of recipe objects
  const recipes = [
    {
      image:
        "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg",
      title: "Pasta Alfredo",
      cookingTime: 30,
      ingredients: ["Pasta", "Cream", "Garlic", "Cheese", "Butter"],
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Z0PCp52-V9vqXAROsdrrgsc4WUwJ1RDL7w&s",
      title: "Paneer Tikka",
      cookingTime: 45,
      ingredients: ["Paneer", "Onion", "Tomato", "Garlic", "Spices"],
    },
  ];

  return (
    <>
      <CardComponent data={recipes} />
    </>
  );
};

export default RecipeCard;
