import { useState, useEffect } from "react";
import RestaurantFood from "../assets/restaurant food.jpg"

function BookingRegistration(props) {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [errors, setErrors] = useState({});

   function validateForm() {
        let newErrors = {};

        if (!date) newErrors.date = "Please select a date.";
        if (!time) newErrors.time = "Please select a time.";
        if (!guests || Number(guests) < 1) newErrors.guests = "Guests must be at least 1!";
        if (!occasion) newErrors.occasion = "Please select an occasion.";

        setErrors(newErrors);
    }

    useEffect(() => {
        validateForm();
    }, [date, time, guests, occasion]);

    function handleSubmit(e) {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            props.SubmitForm({ date, time, guests, occasion });
        }
    }

    const isSubmitDisabled = Object.keys(errors).length > 0;


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
                                aria-required="true"
                                aria-invalid={!!errors.date}
                                onChange={handleDateChange}
                            />
                             {errors.date && <p style={{ color: "red", fontSize: "14px" }}>{errors.date}</p>}
                        </div>

                        <div>
                            <label htmlFor="time">Choose time:</label>
                            <select
                                id="time"
                                value={time}
                                aria-required="true"
                                aria-invalid={!!errors.time}
                                onChange={e => setTime(e.target.value)}
                            >
                                {props.availableTimes.map((availableTime, index) => (
                                    <option key={index}>{availableTime}</option>
                                ))}
                            </select>
                            {errors.time && <p style={{ color: "red", fontSize: "14px" }}>{errors.time}</p>}
                        </div>

                        <div>
                            <label htmlFor="guests">Number of guests:</label>
                            <input
                                type="number"
                                placeholder="1"
                                min={1}
                                max="10"
                                id="guests"
                                value={guests}
                                aria-required="true"
                                aria-invalid={!!errors.guests}
                                onChange={e => setGuests(e.target.value)}
                            />
                            {errors.guests && <p style={{ color: "red", fontSize: "14px" }}>{errors.guests}</p>}
                        </div>

                        <div>
                            <label htmlFor="occasion">Occasion:</label>
                            <select
                                id="occasion"
                                value={occasion}
                                aria-required="true"
                                aria-invalid={!!errors.occasion}
                                onChange={e => setOccasion(e.target.value)}
                            >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                            {errors.occasion && <p style={{ color: "red", fontSize: "14px" }}>{errors.occasion}</p>}
                        </div>

                        <input className="bookingButton"
                                type="submit" value={"Make Your reservation"}
                                aria-label="On Click"
                                aria-disabled={isSubmitDisabled}
                                style={{
                                    backgroundColor: isSubmitDisabled ? "#ccc" : "#F4CE14",
                                    cursor: isSubmitDisabled ? "not-allowed" : "pointer"
                        }}/>

                    </fieldset>
                </form>
            </div>

            <img src={RestaurantFood} alt="restaurant food example"/>
        </div>
    )
}
export default BookingRegistration;
