import React from "react";
import { useEffect, useState } from "react";
import "./Meal.css";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("indian");
  const [inputData, setInputData] = useState("");
  const [searched, setSearched] = useState(false); // page load it not show the -> h3 X - when wrong search only show

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();

      console.log(data.meals);

      setMealData(data.meals);
    };
    fetchDataFromAPI();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );
    const data = await api.json();

    console.log("search data = ", data.meals);
    setMealData(data.meals || []); // if null, set empty array - Search wrong --> h3 X Show

    setInputData("");
    setSearched(true); // ✅ mark that user searched
  };

  return (
    <>
    {/* Header  */}
    <div className="header-gradient shadow-lg">
      <div className="container py-4 py-md-3">
        <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
          <h1 className="display-4 fw-bold text-white m-0">
            Recipe Finder
          </h1>
        </div>
        <p className="text-center text-white fs-5 mb-1">
          Discover delicious recipes from around the world
        </p>
      </div>
    </div>

{/* Navbar  */}
      <div id="button" className="mt-3 text-center ">
        <button
          onClick={() => setArea("Indian")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Indian
        </button>
        <button
          onClick={() => setArea("Canadian")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          Canadian
        </button>
        <button
          onClick={() => setArea("American")}
          type="button"
          className="btn btn-outline-light mx-3"
        >
          American
        </button>
        <button
          onClick={() => setArea("Thai")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          Thai
        </button>
        <button
          onClick={() => setArea("British")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          British
        </button>
        <button
          onClick={() => setArea("Russian")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          Russian
        </button>
      </div>

      <form className="mx-auto text-center my-4">
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <button
          id="search"
          className="btn btn-success text-light"
          onClick={submitHandler}
        >
          Search
        </button>
      </form>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          textAlign: "center",
          margin: "auto",
        }}
      >
        {mealData.length > 0 // Search wrong thing it give --> h3 X Show
          ? mealData.map((data) => (
              <div
                key={data.idMeal}
                style={{
                  textAlign: "center",
                  width: "280px",
                  maxWidth: "250px",
                }}
              >
                <div>
                  <img
                    src={data.strMealThumb}
                    alt=""
                    style={{
                      width: "220px",
                      borderRadius: "10px",
                      border: "2px solid blue",
                    }}
                  />
                </div>

                <h5>{data.strMeal}</h5>
              </div>
            ))
          : searched && ( // ✅ show message only after search
              <h3 style={{ marginTop: "20px", color: "red" }}>
                ❌ No recipes found. Try another search!
              </h3>
            )}
            
      </div>
      
    </>
  );
};

export default Meal;





