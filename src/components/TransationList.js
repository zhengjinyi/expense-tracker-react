import React, {useState} from 'react'

export const TransationList = () => {
    return (
        <div>
        <h3>History</h3>
        <ul className="list">
            <li className="minus">
            Cash <span>-$400</span><button className="delete-btn">x</button>
            </li>
        </ul>
        </div>
    )
}
