import React from 'react';
import './collection-item.scss';
import ButtonComponent from '../button/buttonComponent';
import {connect} from 'react-redux';
import {additems} from '../../redux/cart/cartAction';

function CollectionItem({item,additems}){
    const{id,name,price,imageUrl}=item;
    return(
        <div className='collection-item'>
            <div 
            className='image'
            style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <ButtonComponent inverted onClick={()=>additems(item)}>Add to cart</ButtonComponent>
        </div>
    );
}
const mapDispatchToProps=dispatch=>({
    additems:item=>dispatch(additems(item))
});
export default connect(null,mapDispatchToProps)(CollectionItem);