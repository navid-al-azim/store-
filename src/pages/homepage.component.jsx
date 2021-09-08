import React from 'react';
import './homepage.style.scss';

import OutterBox from '../components/outterbox/outterbox'


const Homepage = ({ history }) => (
    <div className='homepage'>
        <OutterBox history={history} />
    </div>

);

export default Homepage;