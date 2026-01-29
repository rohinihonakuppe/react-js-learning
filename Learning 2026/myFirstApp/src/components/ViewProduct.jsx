import React, { useState, useEffect } from 'react';
import '../index.css';
import { useParams } from 'react-router-dom';
import { productList } from '../Data/data';

function ViewProduct() {

    const { id } = useParams(); //useParams hook to get the route parameters. It helps to extract the dynamic segments of the URL.
    const [productInfo, setProductInfo] = React.useState(null);

    useEffect(() => {
        //fetching the product details based on the id from the URL or routing parameter
        const product = productList.find(p => p.ProductId === Number(id));
        setProductInfo(product);
    }, [id]);

    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <h3>Product Detail</h3>
                {productInfo &&
                <div>
                    <p><strong>Product ID:</strong> {productInfo.ProductId}</p>
                    <p><strong>Product Code:</strong> {productInfo.productCode}</p>
                    <p><strong>Product Name:</strong> {productInfo.ProductName}</p>
                    <p><strong>Category ID:</strong> {productInfo.CategoryId}</p>
                    <p><strong>Price:</strong> {productInfo.Price}</p>
                </div>}
            </div>
        </div>
    );
}
export default ViewProduct;