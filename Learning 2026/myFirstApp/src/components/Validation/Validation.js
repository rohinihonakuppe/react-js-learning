export const validateProductForm = (fieldName, fieldValue) => {
    let errorObj ={};

    if(fieldName == "ProductId"){
        if(!fieldValue.length){
            errorObj.ProductId = "Product Id is required";
        }
    }

    if(fieldName == "price"){
        if(!fieldValue.length || fieldValue <=0){
            errorObj.Price = "Price is required";
        }
    }
}