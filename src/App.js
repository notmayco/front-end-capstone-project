import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Booking from "./Components/Booking";
import ConfirmedBooking from "./Components/ConfirmedBooking";
import './App.css';

function App() {
  return (
    <div className='appcontainer'>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/confirmed' element={<ConfirmedBooking />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
