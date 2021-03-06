import React from 'react'

export default function StoreName(props) {
    return (
        <div className='store-name'>
            <h1>{props.locationName} - Store Map</h1>
            <p>Find it fast! 
                <span className="produce">Produce</span>
                <span className="bakery">Bakery</span>
                <span className="meat">Meat</span>
                <span className="international-foods">International Foods</span>
            </p>
        </div>
    )
}
