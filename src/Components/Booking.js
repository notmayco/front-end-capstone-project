import Nav from './Nav';
import Footer from './Footer';
import BookingForms from './BookingForms';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';


function Booking() {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    };

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };


    const initialState = {availableTimes: fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState)

    function updateTimes(state, action) {
        switch(action.type) {
            case 'UPDATE':
                return { availableTimes: fetchAPI(action.payload) };
            default:
                return state;
        }
    }

    const navigate = useNavigate();

    function SubmitForm (formData) {
        if(submitAPI(formData)){
            navigate("/confirmed")
        }
    }

    return (
        <div className='bookingPageContainer'>
            <Nav />
            <BookingForms availableTimes={state.availableTimes} dispatch={dispatch} SubmitForm={SubmitForm}/>
            <Footer />
        </div>
    );
}

export default Booking;
