import React from "react";

const CardComponent = ({ data }) => {
  const datas = data;
  return (
    <div className="container mt-4">
      <div className="row">
        {datas.map((data, index) => {
          return (
            <>
              <div key={index} className="col-md-6">
                <img className="img-fluid" src={data.image} alt="" />
                <div className="card p-4 shadow mb-4">
                  <h3 className="text-center">{data.title}</h3>
                  {data.cookingTime && (
                    <h5>Cooking Time: {data.cookingTime} minutes</h5>
                  )}
                  {data.ingredients && <h5>Ingredients:</h5>}

                  <ul className="list-group">
                    {data?.ingredients?.map((ingredient, index) => {
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

export default CardComponent;
