import {categoryList} from "../Data/data";
import ProductList from "./ProductList";
import { useState } from "react";
function SearchProduct() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchCategory, setSearchCategory] = useState("");

    const handleChange =(e)=>{
        setSelectedCategory(e.target.value);
    }
    const handleTextChange=(e)=>{
        setSearchCategory(e.target.value);
    }
    return (
        <div>
            <h4>SearchProduct</h4>
            <input type="text" className="form-control" placeholder="Enter Product Name" onClick={(e) => handleTextChange(e)}/>
            <select className="form-select" onClick={(e)=>handleChange(e)}>
                <option value={""}>--All Categories----</option>
                {categoryList.map((cat,index)=><option key={cat.categoryId} value={cat.categoryId}> 
                {cat.categoryName}
                </option>
            )}
            </select>
            <ProductList selectedCategory={selectedCategory} searchCategory={searchCategory} />
        </div>
    )
}

export default SearchProduct;