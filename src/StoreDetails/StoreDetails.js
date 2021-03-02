import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons'

import { faCarrot } from '@fortawesome/free-solid-svg-icons'
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'


export default function StoreDetails(props) {
    return (
        <div className="store-details">
            <h4>Open from {props.locationHours}</h4>
            <div className="store-detailed-info">
                <ul>
                    <li><FontAwesomeIcon icon={faCcVisa} />Visa Accepted</li>
                    <li><FontAwesomeIcon icon={faCcMastercard} />Mastercard Accepted</li>
                </ul>
                <ul>
                    <li><FontAwesomeIcon icon={faCarrot} />Fresh Produce</li>
                    <li><FontAwesomeIcon icon={faBreadSlice} />Bakery</li>
                </ul>
            </div>
            
        </div>
    )
}
