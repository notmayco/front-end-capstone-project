import owner1 from '../assets/Mario and Adrian A.jpg'
import owner2 from '../assets/Mario and Adrian b.jpg'
function About () {
    return(
        <section className='aboutContainer'>
            <div className='aboutContent'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment the restaurant features a locally sourced menu with daily specials.Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment the restaurant features a locally sourced menu with daily specials.</p>
            </div>
            <div className='aboutImage'>
                <img src={owner1} className='owner1' alt='Owners of the restaurant'/>
                <img src={owner2} className='owner2' alt='Owners of the restaurant'/>
            </div>
        </section>
    )
}

export default About;