import React from 'react';
import {Link} from 'react-router-dom';
import{ReactComponent as Logo} from './logo.svg';
import './header.scss';
import {auth} from '../../firebase/firebase-utils';
import {connect} from 'react-redux';
import Shoppingicon from '../shopping-cart/shoppingIcon';
import Cart_dropdown from '../cart-dropdown/cartDropdown';
import {selectCurrentUser} from '../../redux/user/userSelect';
import {selectHiddenProp} from '../../redux/cart/cartSelectors';
function Header({currentUser,hidden}){
    return(
        <div className='header'>
            <Link to="/" className='logo-container'>
                <Logo />
            </Link>
            <div className='options'>
                <Link to="/shop" className='option'>
                    SHOP
                </Link>
                {/* <Link to="/signin" className='option'>
                    LOGIN
                </Link> */}
                <Link to="/shop" className='option'>
                    CONTACT
                </Link>
                {currentUser?
                <div className='option' onClick={()=> auth.signOut() }> SIGN OUT</div>
                :
                <Link className='option' to="/signin">SIGN IN</Link>
                }
                <Shoppingicon/>
            </div>
            {hidden?null:<Cart_dropdown/>}
        </div>
    );
}

const mapStatetoProps=state=>({
    currentUser:selectCurrentUser(state),
    hidden:selectHiddenProp(state)
});

export default connect(mapStatetoProps)(Header);