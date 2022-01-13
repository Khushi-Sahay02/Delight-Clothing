import React from 'react';
import './checkoutItem.scss';
import { connect } from 'react-redux';
import { removeItems,decreaseItems,additems } from '../../redux/cart/cartAction';

const CheckoutItem=({cartitem,removeItem,decreaseItem,additems})=>{
    const {name,quantity,price,imageUrl}=cartitem; 
    return(<div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <div className='arrow' onClick={()=>decreaseItem(cartitem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={()=>additems(cartitem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>removeItem(cartitem)}>&#10005;</div>
    </div>);
}

const mapDispatchToProps=dispatch=>({
    removeItem:item=>dispatch(removeItems(item)),
    decreaseItem:item=>dispatch(decreaseItems(item)),
    additems:item=>dispatch(additems(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);