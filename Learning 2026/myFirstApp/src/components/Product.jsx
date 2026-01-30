import { useEffect, useState } from "react";
import { productService } from "./Services/Product.Services";

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        productService.getAllProducts().then((res)=>{
            setProducts(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);

    const handleDelete = (id) => {
        let confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if(confirmDelete) {
        productService.deleteProduct(id).then((res)=>{
            alert("Product deleted successfully");
            // Refresh the product list after deletion
            window.location.reload();})
            .catch((err)=>{
                console.log(err);
            });
        };
        }
    const handleEdit = (id) => {
        navigate(`/formikform${id}`);

    }

    return (<>
    <h2>Product List</h2>
    <hr />
        <table className="table table-hower">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Price</th>
                    <th>Category Id</th>
                </tr>
            </thead>
            <tbody>
                {products.map((prod, index) => (
                    <tr key={prod.productId}>
                        <td>{prod.productId}</td>  
                        <td>{prod.productName}</td>
                        <td>{prod.productCode}</td>
                        <td>{prod.price}</td>   
                        <td>{prod.categoryId}</td>
                        <td>
                            <button className="btn btn-danger btn-sm" onClick={(id)=>handleDelete(prod.productId)}>Delete</button>
                        </td>
                        <td>
                            <button className="btn btn-warning btn-sm" onClick={(e)=> handleEdit(prod.ProductId)}>Edit</button>
                        </td>
                        </tr>
                        ))}
            </tbody>
        </table>

    </>)
}

export default ProductList;