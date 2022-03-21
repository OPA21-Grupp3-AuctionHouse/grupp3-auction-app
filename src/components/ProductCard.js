import React from 'react'

const ProductCard = ({ productImage, productName, productDescription, productPrice, productBuyout }) => {

    return (
        <div className='product-card'>
            <div className='product-image'>
                {productImage}
            </div>
            <div className='product-name'>
                {productName}
            </div>
            <div className='product-description'>
                {productDescription}
            </div>
            <div className='product-price'>
                {productPrice}
            </div>
            <div className='product-buyout'>
                {productBuyout} 
            </div>
        </div>
    )
}

export default ProductCard