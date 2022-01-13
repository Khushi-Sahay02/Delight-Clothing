import React from 'react';
import './buttonComponent.scss';

function ButtonComponent({children,isGoogleSignIn,inverted,...otherProps}){    //general purpose button
    return(
    <button className={`
    ${inverted?'inverted':''}
    ${isGoogleSignIn?'googleSignIn':''} 
    custom-button`} {...otherProps}>
        {children}
    </button>);     
}

export default ButtonComponent;