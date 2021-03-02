import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'


export default function ItemLocator(props) {

    let classes = [props.display ? '' : 'hide', 'item-locator', props.searchedItem]

    return (
        <div className={classes.join(' ')}>
            <button className="close-button" onClick={props.hideLocator}>X</button>
            <h3>{props.searchedItem}</h3>
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
            <button className="got-it-button" onClick={() => props.hideLocator(props.searchedItem)} >Remove from List</button>
        </div>
    )
}
