import React from 'react';
import ButtonComponent from '../button/buttonComponent';
import './cartDropdown.scss';
import CartItem from '../cart-item/cart-item';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { useNavigate } from 'react-router-dom';
import { ToggleCart } from '../../redux/cart/cartAction';

const Cart_dropdown=({cartitems,dispatch})=>{
    let Navigate=useNavigate();
    if (cartitems.length===0){
    return(<div className='cart-dropdown noItem'>
        <span className='heading'>Please add items to the cart!</span>
    </div>);
    }
    else{
    return(<div className='cart-dropdown'>
        <div className='cart-items'>
            {cartitems.map(cartitem=><CartItem item={cartitem}/>)}
        </div>
        <ButtonComponent onClick={
            ()=>{Navigate('/checkout');
            dispatch(ToggleCart());
            }}>GO TO CART</ButtonComponent>
    </div>);
    }
}

const mapStateToProps=state=>({
    cartitems:selectCartItems(state)
});

export default connect(mapStateToProps)(Cart_dropdown);
