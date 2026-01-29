import React, { useState } from "react";
import './Validation/Validation.js'
function Controlled(){


    const product={
        ProductId:'',
        productCode:'',
        ProductName:'',
        Price:''
    }

    const [productData, setProductData] = useState(product);
    const [errors, setErrors] = useState({});

    const handleSaveProduct=(e)=>{
        e.preventDefault();
        alert("product saved successfully!" + JSON.stringify(productData));
    }
    
    const handleChange=(e)=>{
        setProductData(prevObj =>({...prevObj,[e.target.name]: e.target.value}) );

        setErrors(validateProductForm(e.target.name, e.target.value));
    }

    return(<>
        <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={(e) => handleSaveProduct(e)}>
                        <div className="form-group">
                            <label>Product Id</label>
                            <input type="number" className="form-control" placeholder="Enter Product Id" name="ProductId"
                            value={productData.ProductId}
                             onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Product code</label>
                            <input type="text" className="form-control" placeholder="Enter Product code" name="productCode" 
                            value={productData.productCode}
                            onChange={(e)=>handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" className="form-control" placeholder="Enter Product name" name="ProductName" 
                            value={productData.ProductName}
                            onChange={(e)=>handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="number" className="form-control" placeholder="Enter Product price"                            
                            value={productData.Price}
                            name="Price" 
                            onChange={(e)=>handleChange(e)}
                            />
                        </div>
                        <hr />
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" value="Save Product" />
                        </div>
                    </form>
                </div>
            </div>
    </>)
}

export default Controlled;