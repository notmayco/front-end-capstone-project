
import greeksalad from '../assets/greek salad.jpg'
import Brucheta from '../assets/bruchetta.svg'
import LemonDessert from '../assets/lemon dessert.jpg'
import Delivery from '../assets/motorbike.png'


function Special () {
    return (
        <section className='special'>
                    <div className='specialText'>
                        <h1>This week’s specials!</h1>
                        <button>Order Online</button>
                    </div>
                    <div className='cardGrid'>

                        <div className='cardContainer'>
                            <img src={greeksalad} width={'281.38px'} height={'185.97px'}/>
                            <div className='cardHeading'>
                                <h2>GreekSalad</h2>
                                <p>$12.99</p>
                            </div>
                            <div className='cardContent'>
                                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                                <div>
                                    <button><strong>Order Delivery</strong><img src={Delivery} alt='delivery icon'/></button>
                                </div>
                            </div>
                        </div>

                        <div className='cardContainer'>
                            <img src={Brucheta} width={'281.38px'} height={'185.97px'}/>
                            <div className='cardHeading'>
                                <h2>Bruchetta</h2>
                                <p>$5.99</p>
                            </div>
                            <div className='cardContent'>
                                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                                <div>
                                    <button><strong>Order Delivery</strong><img src={Delivery} alt='delivery icon'/></button>
                                </div>
                            </div>
                        </div>

                        <div className='cardContainer'>
                            <img src={LemonDessert} width={'281.38px'} height={'185.97px'}/>
                            <div className='cardHeading'>
                                <h2>Lemon Dessert</h2>
                                <p>$5.00</p>
                            </div>
                            <div className='cardContent'>
                                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                                <div>
                                    <button><strong>Order Delivery</strong><img src={Delivery} alt='delivery icon'/></button>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
    )
}

export default Special;