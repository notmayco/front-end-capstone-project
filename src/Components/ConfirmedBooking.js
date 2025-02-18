import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function ConfirmedBooking () {

    const navigation = useNavigate()

    return (
        <div className="confirmedPageContainer">
            <Nav />
            <div className="confirmationContainer">
                <h1>Your table has been reserved!</h1>
                <button onClick={() => navigation('/')}>Home Page</button>
            </div>
            <Footer />
        </div>
    )
}

export default ConfirmedBooking;