import React, { useState, useEffect } from 'react'
import { productList } from '../Data/data';
import '../index.css';
import { useNavigate } from 'react-router-dom';

// props: selectedcat, searchText, onNotify 
//  selectcat: category id from dropdown, searchText: text from input box,
//  onNotify: callback to send count to parent - Its an event handler function

function ListsOfProduct({selectedcat, searchText, onNotify}) { 

    const navigate = useNavigate();
    const [filteredProducts, setFilteredProducts] = useState([]);

        useEffect(() => {

            let filteredProd = selectedcat 
            ? productList.filter(f =>f.CategoryId === Number(selectedcat)) 
            : productList;

            filteredProd = searchText 
            ? filteredProd.filter(product => product.ProductName.toLowerCase().
            indexOf(searchText.toLowerCase()) !== -1) : filteredProd;

         setFilteredProducts(filteredProd);
            onNotify(filteredProd.length);
        }, [selectedcat, searchText]);

    const redirectProduct = (id) => {
        navigate(`/viewproduct/${id}`);
    }
    return(<>

    <table className='table table-success table-striped'>
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Code</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>View</th>
            </tr>
        </thead>
        <tbody>
            {filteredProducts.map((product, index) =>(
                <tr key={product.ProductId}>
                    <td>{product.ProductId}</td>
                    <td>{product.productCode}</td>
                    <td>{product.ProductName}</td>
                    <td>{product.Price}</td>
                    <td><button type='button' className='btn btn-info' onClick={(e)=>redirectProduct(product.ProductId)}>View</button></td>

                </tr>
            ))}
        </tbody>
    </table>

    </>)
}

 export default ListsOfProduct;
