import { useState } from "react";
import RestaurantFood from "../assets/restaurant food.jpg"

function BookingRegistration(props) {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.SubmitForm(e);
    }

    function handleDateChange(e) {
        const selectedDate = new Date (e.target.value);
        setDate(e.target.value);
        props.dispatch({ type: "UPDATE", payload: selectedDate });
    }

    return (
        <div className='bookingComponentContainer'>
            <div className='bookingFormsContainer'>
                <h1>Reserve a Table</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="date">Choose date:</label>
                            <input
                                type="date"
                                id="date"
                                value={date}
                                onChange={handleDateChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="time">Choose time:</label>
                            <select
                                id="time"
                                value={time}
                                onChange={e => setTime(e.target.value)}
                            >
                                {props.availableTimes.map((availableTime, index) => (
                                    <option key={index}>{availableTime}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="guests">Number of guests:</label>
                            <input
                                type="number"
                                placeholder="1"
                                min="1"
                                max="10"
                                id="guests"
                                value={guests}
                                onChange={e => setGuests(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="occasion">Occasion:</label>
                            <select
                                id="occasion"
                                value={occasion}
                                onChange={e => setOccasion(e.target.value)}
                            >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        <input className="bookingButton" type="submit" value={"Make Your reservation"} onClick={props.SubmitForm}/>

                    </fieldset>
                </form>
            </div>

            <img src={RestaurantFood} />
        </div>
    )
}
export default BookingRegistration;
