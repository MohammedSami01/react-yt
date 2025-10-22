import React, { useState } from 'react'

const Card = (props) => {
    const [showProfile, setShowProfile] = useState(false);
    
    console.log(props);

    const handleViewProfile = () => {
        setShowProfile(true);
    };

    const handleBack = () => {
        setShowProfile(false);
    };
    
    if (showProfile) {
        return (
            <div className="card">
                <h2>Profile Details</h2>
                <img src={props.img} alt='profile' />
                <h1>{props.user}</h1>
                <p>Age: {props.age}</p>
                <p>Email: {props.email || 'email@example.com'}</p>
                <p>Location: {props.location || 'Not specified'}</p>
                <p>Interests: {props.interests?.join(', ') || 'No interests listed'}</p>
                <button onClick={handleBack}>Back</button>
            </div>
        );
    }
    
    return (
        <div className="card">
            <img src={props.img} alt='profile' />
            <h1>{props.user},{props.age}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button onClick={handleViewProfile}>view profile</button>
        </div>
    )
}

export default Card