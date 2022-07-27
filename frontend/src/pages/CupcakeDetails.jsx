import CupcakeList from "./CupcakeList";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function CupcakeDetails() {
    return (
       <Router>
            <div>
                <Routes>
                    <Route path="/cupcakes/:id" element={<CupcakeList />} />
                </Routes>
            </div>
       </Router>
    );
}

export default CupcakeDetails;