import React from 'react';
import '../assets/styles/Aboutus.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-text">
                <h1>About Our Company</h1>
                <p>
                    Compellingly reconceptualize compelling outsourcing whereas optimal customer service. Quickly incentivize impactful action items before tactical collaboration. Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities via covalent scenarios. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                </p>
                <button className="view-all-btn">View All</button>
            </div>
            <div className="about-images">
                <img src="https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bread 1" />
                <img src="https://images.pexels.com/photos/17315419/pexels-photo-17315419/free-photo-of-a-wedding-venue-decorated-with-white-flowers.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bread 2" />
                <img src="https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Baking" />
                <img src="https://i.pinimg.com/236x/c4/7a/35/c47a357fc2012d1c4b6ac7e0bd69b845.jpg" alt="Bread Making" />
            </div>
        </div>
    );
};

export default AboutUs;
