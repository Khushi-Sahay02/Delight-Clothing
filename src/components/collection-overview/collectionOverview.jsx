import React from 'react';
import './collectionOverview.scss';
import { connect } from 'react-redux';
import { selectCollectionOverview } from '../../redux/shop/shopSelector.js';
import CollectionPreview from '../../components/shopPage_collection/collection_preview.jsx';
const CollectionOverview=({shopCollection})=>(
    <div className='collection-overview'>
        {shopCollection.map(({id, ...otherprops})=>
                <CollectionPreview key={id} {...otherprops}/>)}
    </div>
)
const mapStateToProps=state=>({
    shopCollection:selectCollectionOverview(state)
})
export default connect(mapStateToProps)(CollectionOverview);