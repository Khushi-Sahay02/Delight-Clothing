import React from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import './category.scss';
import { useParams } from "react-router-dom";
import SHOP_DATA from '../../redux/shop/collection_data';

const Category=()=>{
    const {categoryid}=useParams();
    return(
        <div className="category-page">
        <h2 className="title">{categoryid.toUpperCase()}</h2>
        <div className="items">
        {SHOP_DATA[`${categoryid}`]['items'].map(mainItems=>
        <CollectionItem key={mainItems.id} item={mainItems}/>)}
        </div>
        </div>
    )
}
export default Category;