import React from 'react';
import Menuitem from '../menu-item/menu-item.jsx';
import './menu-directory.scss';
import {connect} from 'react-redux'
import { selectMenuSection } from '../../redux/directory/directorySelector.js';

const MenuDirectory=({directoryItems})=>(
        <div className='directory-menu'>
            {directoryItems.map(menu=>
            (<Menuitem key={menu.id} title={menu.title} imageurl={menu.imageUrl} size={menu.size} linkUrl={menu.linkUrl}/>)
            )}   
        </div>);


const mapStateToProps=state=>({
  directoryItems:selectMenuSection(state)
})

export default connect(mapStateToProps)(MenuDirectory);