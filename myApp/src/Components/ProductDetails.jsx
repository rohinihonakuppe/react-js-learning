

function ProductDetails({productInfo}) {
    return (
        <tr key ={productInfo.productId}>
            <td>{productInfo.productId}</td>
            <td>{productInfo.productName}</td>
            <td>{productInfo.ProductCode}</td>
            <td>{productInfo.price}</td>
            {/* <td>{productInfo.category}</td> */}
        </tr>
    )
}
export default ProductDetails;
