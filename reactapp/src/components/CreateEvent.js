import React, { useState } from 'react';

const CreateEvent = () => {
    const [eventDetails, setEventDetails] = useState({
        title: '',
        description: '',
        image: '',
        cardNo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission
        console.log('Event details:', eventDetails);
    };

    return (
        <div className="create-event-container">
            <h1>Create Event</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                    type="text" 
                    name="title" 
                    value={eventDetails.title} 
                    onChange={handleChange} 
                />
                <label>Description:</label>
                <textarea 
                    name="description" 
                    value={eventDetails.description} 
                    onChange={handleChange} 
                />
                <label>Image URL:</label>
                <input 
                    type="text" 
                    name="image" 
                    value={eventDetails.image} 
                    onChange={handleChange} 
                />
                <label>Card Number:</label>
                <input 
                    type="text" 
                    name="cardNo" 
                    value={eventDetails.cardNo} 
                    onChange={handleChange} 
                />
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvent;
