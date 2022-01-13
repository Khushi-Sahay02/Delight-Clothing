import React from 'react';
import './menu-item.scss';
import {useNavigate} from 'react-router-dom';

function Menuitem({title,imageurl,size,linkUrl}){
    let navigate=useNavigate();
    return(
        <div className='mainmenu'>
            <div className={`${size} menu`} onClick={()=>navigate(`${linkUrl}`)}>
                <div className='bgimage' style={{backgroundImage:`url(${imageurl})`}}/>
                <div className='content'>
                    <h1 className='title'>{`${title}`}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    );
}

export default Menuitem;