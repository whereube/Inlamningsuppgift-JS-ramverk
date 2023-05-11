import React from 'react'

export default function Movie(props) {
    const addStars = (rating) => {
        const list = [];

        for (let i = 0; i < rating; i++) {
            list.push(<img src="star.png" alt="star" className="star float-end" />)
        }
        return list;
    }

    return (

        <li className="list-group-item">
            { props.item.title }
            <button className="btn btn.sm btn-danger float-end" onClick={() => {props.deleteMovie(props.item.id)}}>X</button>
            { addStars(props.item.rating) }                
        </li>

    
    )
}