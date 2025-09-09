import ProductDetails from "./ProductDetails";
import { productList } from "../Data/data";
import { useState, useEffect } from "react";

function ProductList({ selectedCategory, searchCategory }) {
    //const products = ProductList;
    // console.log("Selected Category in ProductList:", selectedCategory);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        let filtered = selectedCategory
            ? productList.filter(p => p.categoryId === Number(selectedCategory))
            : productList;

        filtered = searchCategory ? filtered.filter(p => p.productName.toLocaleLowerCase().indexOf(searchCategory.toLocaleLowerCase()) !== -1)
            : filtered;
        setFilteredProducts(filtered);

    }, [selectedCategory, searchCategory]);

    return (
        <div>
            <table className='table table-responsive'>
                <thead>
                    <tr>
                        <th colSpan={5}>Product List</th>
                    </tr>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Price</th>
                        {/* <th>Category</th> */}
                    </tr>
                </thead>
                <tbody>
                    {/* Map through productList and display each product in a table row */}
                    {filteredProducts.map((product, index) => (
                        <ProductDetails key={product.productId} productInfo={product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
