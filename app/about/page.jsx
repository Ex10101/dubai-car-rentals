import React from 'react'

function About() {
  return (
    <div>
        <div className='red-color w-full h-[350px] relative'>
            <img className='absolute left-[340px] top-[150px] w-[1182px] h-[412px] object-fit' src="/about-hero.png" alt="" />
        </div>
        <div className='red-color w-full h-[17px] mt-2'></div>
        <div className='red-color w-full h-[10px] mt-2'></div>
        <section className='w-full px-[125px] text-2xl mb-20'>
            <h1 className='font-russo font-bold text-center text-[50px] mt-64 mb-20'>About Us</h1>
            <p className='mb-10'>Welcome to Dubai Car Rentals, your trusted partner in luxury and convenience when it comes to exploring the vibrant city of Dubai and beyond. With a legacy spanning over a decade, Dubai Car Rentals has been the go-to choice for both locals and tourists seeking premium car rental services.</p>

            <h4>Our Journey:</h4>
            <p className='mb-10'>Established in 2014, Dubai Car Rentals has proudly served the dynamic UAE market for over 10 years. Since our inception, we have strived to redefine the car rental industry by providing a seamless and unforgettable experience to our valued customers.</p>

            <h4>Our Commitment:</h4>
            <p className='mb-10'>At Dubai Car Rentals, our commitment to excellence is unwavering. We are dedicated to providing you with a fleet of meticulously maintained vehicles that cater to all your travel needs, whether it's for business, leisure, or special occasions. Our diverse range of cars, from top-tier luxury models to economical options, ensures that you find the perfect vehicle for your journey.</p>

            <h4>Why Choose Dubai Car Rentals:</h4>
            <ol className='mb-10 list-decimal ml-8'>
                <li>Experience: With a decade of industry experience under our belt, we have perfected the art of delivering exceptional customer service. Our knowledgeable and friendly team is always ready to assist you in selecting the ideal car for your adventure.</li>
                <li>Quality Assurance: We take great pride in our well-maintained fleet, ensuring that each vehicle is thoroughly inspected and sanitized before reaching your hands. Your safety and comfort are our top priorities.</li>
                <li>Convenience: We understand that your time is precious, which is why we offer hassle-free booking options, including online reservations and flexible pick-up and drop-off locations, to accommodate your busy schedule.</li>
                <li>Competitive Pricing: Dubai Car Rentals offers competitive rates without compromising on the quality of service. We believe in providing you with the best value for your money.</li>
                <li>Local Expertise: As a locally-owned and operated company, we possess an intimate knowledge of Dubai and the surrounding regions. Count on us for personalized recommendations and travel tips to make the most of your visit.</li>
                <li>Environmental Responsibility: We are committed to reducing our carbon footprint by incorporating eco-friendly practices into our operations, such as maintaining fuel-efficient vehicles and adopting sustainable business practices.</li>
            </ol>

            <p className='mb-10'>Join the thousands of satisfied customers who have chosen Dubai Car Rentals as their preferred car rental partner. Whether you are here for a short stay or an extended vacation, we are here to make your journey unforgettable, one mile at a time.</p>

            <p className='mb-10'>Thank you for choosing Dubai Car Rentals for your travel needs. We look forward to being a part of your next adventure in the United Arab Emirates!</p>


        </section>
    </div>
  )
}

export default About