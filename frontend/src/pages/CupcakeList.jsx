import Cupcake from "@components/Cupcake";
import axios from "axios";
import {useState, useEffect} from 'react';

export default function CupcakeList() {
  // Step 1: get all cupcakes
  const [listCupcakes, setListCupCakes] = useState([""]);
  const [accessories, setAccessories] = useState([""]);

  useEffect(() => {
    axios
    .get("http://localhost:4000/cupcakes")
    .then(response => response.data)
    .then(data => setListCupCakes(data));
  }, []);
  // Step 3: get all accessories
  useEffect(() => {
    axios
    .get("http://localhost:4000/accessories")
    .then(response => response.data)
    .then(data => setAccessories(data));
  }, []);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select">
            <option value="cherry">Cherry</option>
            <option value="donut">Donut</option>
            <option value="chocolate">Chocolate</option>
            <option value="wild">Wild</option>
            <option value="christmasCandy">Christmas Candy</option>
            {/* Step 4: add an option for each accessory */}
            {accessories && accessories
            .filter((accessories) => accessories.name === value )
           
            .map((accessories, index) => (
              <li className="cupcake-item" >
                <Cupcake 
                  cupcake={cupcake.name} index={cupcake.id}/>
              </li>
            ))
            }

          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
          {listCupcakes && listCupcakes
          .map((cupcake, index) => (
          <li className="cupcake-item" >
          <Cupcake 
            cupcake={cupcake.name} index={cupcake.id}/>
          </li>
          ))};
        {/* end of block */}
      </ul>
    </>
  );
}
