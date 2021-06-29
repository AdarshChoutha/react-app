import React from 'react';

import CardContainer from './CardContainer';
import CardContents from './CardContents';

function Main() {
    const CardContentsArray = CardContents.map(content =>
        <CardContainer
            key={content.id}
            imgURL={content.imgURL}
            heading={content.heading}
            paragraph={content.paragraph}
            price={content.price}
        />
    )
    return (
        <div className="main">
            {CardContentsArray}
        </div>
    )
}

export default Main;
