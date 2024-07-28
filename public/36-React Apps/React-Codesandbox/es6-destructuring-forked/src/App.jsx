// CHALLENGE: uncomment the code below and see the car stats rendered
import React, { useState } from "react";
import cars from "./cars";
import animals from "./animals";

function App() {
  const [honda, tesla] = cars;
  console.log(honda);
  const {
    speedStats: { topSpeed: hondaTopSpeed },
    coloursByPopularity: [hondaTopColour],
  } = honda;

  const {
    speedStats: { topSpeed: teslaTopSpeed },
    coloursByPopularity: [teslaTopColour],
  } = tesla;

  return (
    <div>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
