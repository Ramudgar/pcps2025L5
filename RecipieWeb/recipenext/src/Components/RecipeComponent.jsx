import React from "react";

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
    <div className="container mt-4">
      <h2 className="text-center mb-4">Recipe Cards</h2>

      <div className="row">
        {recipes.map((recipe, index) => {
          return (
            <>
              <div key={index} className="col-md-6">
                <img className="img-fluid" src={recipe.image} alt="" />
                <div className="card p-4 shadow mb-4">
                  <h3 className="text-center">{recipe.title}</h3>
                  <p>
                    <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
                  </p>
                  <h5>Ingredients:</h5>
                  <ul className="list-group">
                    {recipe.ingredients.map((ingredient, index) => {
                      return (
                        <li key={index} className="list-group-item">
                          {ingredient}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeCard;
