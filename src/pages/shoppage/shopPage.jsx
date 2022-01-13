import React from 'react';
import CollectionOverview from '../../components/collection-overview/collectionOverview';
import Category from '../categoryPage/category';
import { Routes,Route, useParams} from 'react-router-dom';

const ShopPage=()=>{
        return(
            <div className='shopPage'>
                <Routes>
                    <Route exact path="/" element={<CollectionOverview />} />
                    <Route path =":categoryid" element={<Category />} />
                </Routes>
            </div>
        ); 
}

export default ShopPage;
