import React from 'react';

function CardContainer(props) {
    return (
        <div className="card-container">
            <img src={props.imgURL} alt="car" />
            <div className="card-description">
                <h1>{props.heading}</h1>
                <p>{props.paragraph}</p>
                <p>{props.price}</p>
                <input type="button" value="Button" />
            </div>
        </div>
    )
}

export default CardContainer;
