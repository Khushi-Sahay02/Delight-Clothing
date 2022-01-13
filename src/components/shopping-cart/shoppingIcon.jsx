import React from 'react';
import {ReactComponent as Shopping_Icon} from './shopping-bag.svg';
import './shoppingIcon.scss';
import { connect } from 'react-redux';
import { ToggleCart } from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

const Shoppingicon=({ToggleCart,itemCount})=>(
        <div className='cartIcon' onClick={ToggleCart}>
            <Shopping_Icon className='icon'/>
            <span className='itemsCount'>{itemCount}</span>
        </div>
);

const mapDispatchToProps=dispatch=>({
    ToggleCart:()=>dispatch(ToggleCart())
});
const mapStateToProps=state=>({
    itemCount:selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(Shoppingicon);