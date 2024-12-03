import React from 'react';
import { useParams } from 'react-router-dom';
import FeaturedCollection from '../utils/FeaturedCollectionData';

const ProductDetails = () => {
    const { id } = useParams();
    const product = FeaturedCollection.find(item => item.id === parseInt(id));

    if (!product) return <p>Product not found</p>;

    return (
        <div className='product-details'>
            <img src={product.image} alt={product.brand} />
            <h1>{product.brand}</h1>
            <h2>{product.tagline}</h2>
            <p>Rating: {product.rating}</p>
            <p>Price: {product.price}</p>
            <p>Available offers: ...</p>
        </div>
    );
};

export default ProductDetails;
    