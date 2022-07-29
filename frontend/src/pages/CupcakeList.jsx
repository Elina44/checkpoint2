import Cupcake from "@components/Cupcake";
import axios from "axios";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function CupcakeList() {
  // Step 1: get all cupcakes
  const [listCupcakes, setListCupCakes] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [selected, setSelected] = useState("");

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

function handleChange(e) {
  e.preventDefault()
  setSelected(e.target.value)
}

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories && accessories
           
            .map((accessory, index) => (
              <option value={accessory.id} key={accessory.id}>{accessory.name}</option>
            ))
            }

          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
          {listCupcakes && listCupcakes
          .filter((cup) => (cup.accessory_id == selected || selected == ""))
          .map((cupcake, index) => (
          <li className="cupcake-item" key={index}>
            <Link to="/cupcakedetails">
              <Cupcake 
                cupcake={cupcake} />
            </Link>
          </li>
          ))};
        {/* end of block */}
      </ul>
    </>
  );
}
