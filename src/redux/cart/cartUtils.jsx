export const addItemToCart=(cartitems,newItem)=>{
    const existingItem=cartitems.find(cartitem=>
        cartitem.id===newItem.id);
    if (existingItem){
        return (
            cartitems.map(cartitem=>
                cartitem.id===newItem.id?
                {...cartitem,quantity:(cartitem.quantity+1)}:cartitem
            )
        );
    }
    return [...cartitems,{...newItem,quantity:1}];
}

export const deleteItem=(cartitems,removeItem)=>{
    return cartitems.filter(cartitem=>cartitem.id!==removeItem.id)
}

export const clearItems=(cartitems,delItem)=>{
    const existingItem=cartitems.find(cartitem=>cartitem.id===delItem.id);
    if(existingItem.quantity===1){
        return(cartitems.filter(cartitem=>cartitem.id!==delItem.id));
    }
    return cartitems.map(cartitem=>
        cartitem.id===delItem.id?
        {...cartitem,quantity:cartitem.quantity-1}:cartitem);
}