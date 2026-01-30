import axios from 'axios';

function getAllProducts(){
    return axios.get('https://localhost:7250/api/Product/GetAll');
}

function getProductById(id){
    return axios.get(`https://localhost:7250/api/Product/get/${id}`);
}

function addProduct(product){
    return axios.post('https://localhost:7250/api/Product/post', product);
}

function deleteProduct(id){
    return axios.delete(`https://localhost:7250/api/Product/delete/${id}`);
}

export const productService = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct
};