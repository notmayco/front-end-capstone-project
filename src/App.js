import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Booking from "./Components/BookingPage/Booking";
import './App.css';

function App() {
  return (
    <div className='appcontainer'>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/booking' element={<Booking />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
