import Stars from  '../assets/five-stars.png'
import Person from  '../assets/pexels person.jpg'


function ReviewCard () {
    return (
            <div className='reviewCard'>
                <img src={Stars} />
                <div className='reviewContent'>
                    <h2>Review Title</h2>
                    <p>Review Body</p>
                </div>
                <div className='reviewPerson'>
                    <img src={Person}/>
                    <h3>Reviewer Name</h3>
                    <p>Date</p>
                </div>
            </div>
    )
}

function Testimonials () {
    return (
        <section className='testimonialsContainer'>
                    <div>
                        <h1>Our Customers love us!</h1>
                        <div className='reviewCardContainer'>
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                        </div>
                    </div>
                </section>
    )
}

export default Testimonials;