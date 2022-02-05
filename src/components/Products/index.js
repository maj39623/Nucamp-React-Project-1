import React, { useState } from 'react';
import Popup from '../Modal/modal';
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements';

const Products = ({ heading, data}) => {

    const [isOpenPopup, setIsOpenPopup] = useState(false)

    const togglePopup = () => {
        setIsOpenPopup(!isOpenPopup)
    }

    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <Popup isOpen={isOpenPopup} />
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton onClick={togglePopup}>
                                    {product.button}
                                </ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
};

export default Products;
