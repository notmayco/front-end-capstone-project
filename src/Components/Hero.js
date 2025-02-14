import intoimg from '../assets/restaurantintroduction.jpg'
function Hero () {
    return(
        <section className='hero'>
            <div className='introText'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <div className='introImg'>
                <img src={intoimg} alt='restaurant food'/>
            </div>
        </section>
    )
}

export default Hero;