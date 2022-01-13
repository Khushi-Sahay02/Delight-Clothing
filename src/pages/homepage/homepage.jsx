import React from 'react';
import '../../components/menu-directory/menu-directory.jsx';
import MenuDirectory from '../../components/menu-directory/menu-directory.jsx';
import './homepage.scss';

function Homepage(){
    return(
        <div className='homepage'>
            <MenuDirectory />
        </div>
    );
}

export default Homepage;