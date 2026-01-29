
import React, { useState } from 'react'
import { categoryList } from '../Data/data';
import ListsOfProduct from './ListsOfProduct';
import '../index.css';

function Search() {

    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [productCount, setProductCount] = useState(0);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }
    const handleSelect = (e) => {
        setSelectedCategory(e.target.value);
    }
    // updateCount function to get count from child component
    const updateCount = (count) => {
        setProductCount(count);
    }

    return (<>
        <div className='row'>
            <div className='col-lg-12'>
                <h3>Product Search</h3>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-6 col-sm-9'>
                <label>Filter: </label>
                <input type="text" placeholder="Search..." value={searchText} onChange={(e) => handleSearch(e)} />
            </div>

            <div className='col-lg-6'>
                <select onChange={(e) => handleSelect(e)} >
                    <option value="">--All Category--</option>
                    {categoryList.map((cat, index) => (
                        <option key={cat.CategoryId} value={cat.CategoryId}>{cat.CategoryName}</option>
                    ))}
                </select>
            </div>
        </div>

        <div className='row'>
            <div className='col-lg-12'>
                <div className='alert alert-primary'>
                    Total Products: {productCount}
                </div>
                <ListsOfProduct selectedcat={selectedCategory} searchText={searchText} onNotify={(e) => updateCount(e)} />
            </div>
        </div>
    </>)
}

export default Search;

// updateCount is passed as prop to ListsOfProduct component,
//  its called whenever the filtered product list is updated it return the count from child to parent component