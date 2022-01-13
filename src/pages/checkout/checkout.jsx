import React from 'react';
import './checkout.scss';
import CheckoutHeader from '../../components/checkoutPageHeader/checkoutpageHeader';
import { selectCartItems, selectCartItemsCost } from '../../redux/cart/cartSelectors';
import {connect} from 'react-redux'
import CheckoutItem from '../../components/checkoutItem/checkoutItem';
import StripeButton from '../../components/stripe-button/stripe-button';

const CheckoutPage=({cartitems,cartitemstotal})=>(
    <div className='checkout-page'>
        <CheckoutHeader />
        {cartitems.map(cartitem=><CheckoutItem key={cartitem.id} cartitem={cartitem}/>)}
        <div className='total'>
            <span>TOTAL: ${cartitemstotal}</span>
        </div>
        <div className='warning'>4242 4242 4242 4242; 01/24; 123<br></br></div>
        <StripeButton price={cartitemstotal}/>
    </div>
)

const mapStateToProps=state=>({
    cartitems:selectCartItems(state),
    cartitemstotal:selectCartItemsCost(state)
})

export default connect(mapStateToProps)(CheckoutPage);