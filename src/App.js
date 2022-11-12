import React from "react";
import "./App.css";
import { useState } from "react"; 

const foodDB = {
  Indian: [
    { name: "Daal", rating: "4.5/5" },
    { name: "Chicken", rating: "4/5" },
    { name: "Naan", rating: "3.5/5" },
    { name: "Roti", rating: "5/5" }
  ],

  Italian: [
    {
      name: "Pizza",
      rating: "5/5"
    },
    {
      name: "Lasagne",
      rating: "4.5/5"
    },
    {
      name: "Risotto",
      rating: "4/5"
    },
    {
      name: "Pasta",
      rating: "3/5"
    },
  ],
  Chinese: [
    {
      name: "Chow Main",
      rating: "4/5"
    },
    {
      name: "Kung Pao",
      rating: "2.5/5"
    },
    {
      name: "Ma Po Tofu",
      rating: "2/5"
    },
    {
      name: "Peking duck",
      rating: "1/5"
    },
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Indian");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🍜 goodfoods </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite foods. Select a category to get started{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left", display: 'flex', justifyContent: 'center' }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller", marginTop: '5px' }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
