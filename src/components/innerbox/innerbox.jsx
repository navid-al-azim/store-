import React from 'react';
import './innerbox.scss';
import { withRouter } from 'react-router-dom';

const innerBox = ({ title, imageUrl, size, history, linkUrl, match }) => (

    <div className={`${size} innerboxes`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='contents'>
            <h1 className='titles'>{title.toUpperCase()}</h1>
            <span className='subtitles'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(innerBox);