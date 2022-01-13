import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton=({price})=>{
    const publishableKey='pk_test_51KFOegSFPJPdVP4xJw7XHkHEss3a5Rnyk3Cvrf6jTRtQPlJseH50TOohFojEYryd3FiHidtqCikR3XfB3pbP5yvm003GYSMCjM'
    const onToken=token=>{
        console.log(token)
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
        label='Pay Now'
        name='Delight Clothing'
        billingAddress
        shippingAddress
        image="https://stripe.com/img/documentation/checkout/marketplace.png"
        description={`Your total is ${price}`}
        currency='INR'
        amount={price*100}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}

export default StripeButton;