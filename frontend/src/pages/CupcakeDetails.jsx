import CupcakeList from "./CupcakeList";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

function CupcakeDetails() {
    const {id} = useParams();
    const [cupcake, setCupcake] = useState([]);
    useEffect(() => {
        axios
        .get(`https://localhost:4000/cupcakes`)
        .then((response) => response.date)
        .then((response) => setCupcake(response))
    }, [])

    return (
            <div>
                <ul className="cupcake-list" id="cupcake-list">
                    <li className="cupcake-item" key={index}>
                    <Cupcake 
                        cupcake={cupcake} />
                    </li>
                </ul>
            </div>
    );
}

export default CupcakeDetails;