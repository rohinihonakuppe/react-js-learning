import { useRef, useState } from "react";

function Uncontrolled() {

    const ProductIdRef = useRef(0);
    const ProductCodeRef = useRef();
    const ProductNameRef = useRef("");
    const PriceRef = useRef();
    const [error, setError] = useState("");

    const handleSaveProduct = (e) => {
        e.preventDefault();

        let productObj = {
            ProductId: ProductIdRef.current.value,
            productCode: ProductCodeRef.current.value,
            ProductName: ProductNameRef.current.value,
            Price: PriceRef.current.value
        };

        let errorObj = {};
        if (!productObj.ProductId) errorObj.ProductId = "Product Id is required";
        if (!productObj.Price && productObj.Price<=0) errorObj.Price = "Price is required";

        setError(errorObj);
        if (Object.keys(errorObj).length === 0) {
            alert("Product saved successfully!" + JSON.stringify(productObj));
        }
    }


    return (
        <>
            <h2>Uncontrolled Component</h2>
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={(e) => handleSaveProduct(e)}>
                        <div className="form-group">
                            <label>Product Id</label>
                            <input type="number" className="form-control" placeholder="Enter Product Id" ref={ProductIdRef} />
                            {error.ProductId && <span className="text-danger">{error.ProductId}</span>}
                        </div>
                        <div className="form-group">
                            <label>Product code</label>
                            <input type="text" className="form-control" placeholder="Enter Product code" ref={ProductCodeRef} />
                            {/* {error && error.productCode && <span className="text-danger">{error.productCode}</span>} */}
                        </div>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" className="form-control" placeholder="Enter Product name" ref={ProductNameRef} />
                            {/* {error && error.ProductName && <span className="text-danger">{error.ProductName}</span>} */}
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="number" className="form-control" placeholder="Enter Product price" ref={PriceRef} />
                            {error.Price && <span className="text-danger">{error.Price}</span>}
                        </div>
                        <hr />
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" value="Save Product" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Uncontrolled;