import React from "react";

const CardComponent = (props) => {
  const datas = props.data;
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {datas.map((data) => {
            return (
              <>
                <div className="col-md-6">
                  <img className="img-fluid" src={data.image} alt="" />
                  <div className="card p-4 shadow mb-4">
                    <h3 className="text-center">{data.title}</h3>
                    {data?.cookingTime && (
                      <h5>Cooking Time: {data.cookingTime} minutes</h5>
                    )}
                    {data?.ingredients && (
                      <div>
                        <h5>Ingredients:</h5>
                        <ul>
                          {data.ingredients.map((ingredient) => {
                            return <li>{ingredient}</li>;
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardComponent;
