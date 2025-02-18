import { useNavigate } from 'react-router-dom';
import intoimg from '../assets/restaurantintroduction.jpg';

function Hero () {

    const navigate = useNavigate();

    return(
        <section className='hero'>
            <div className='introText'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button onClick={() => navigate('/booking')} aria-label="On Click">Reserve a Table</button>
            </div>
            <div className='introImg'>
                <img src={intoimg} alt='restaurant food'/>
            </div>
        </section>
    )
}

export default Hero;