import { categoryList } from "../Data/data";
import { Field,Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';

function FormikForm() {
    const productForm = {
        productId: '',
        productCode: '',
        productName: '',
        price: '',
        CategoryId: ''
    }

    const Categories = categoryList;

    const productValidationSchema = Yup.object({
        productId: Yup.number().required("Product Id is required"),
        productCode: Yup.string().required("Product Code is required"),
        productName: Yup.string().required("Product Name is required"),
        price: Yup.number().required("Price is required"),
        CategoryId: Yup.string().notOneOf([0],"Category is required")
    });

    const handleSubmit = (e) => {
        alert("Product saved successfully "+JSON.stringify(e));
    }

    return (<>
        <h2>Formik Form Component</h2>
        <div className="row">
            <div className="col-lg-6">
                <Formik initialValues={productForm}
                enableReinitialize={true}
                validationSchema={productValidationSchema}
                onSubmit={(e)=>handleSubmit(e)}>
                    <Form>
                        <div className="form-group">
                            <label>Category</label>
                            <Field name="CategoryId" as="select" className="form-control" >
                                <option value="">--Select Category--</option>
                                {Categories.map((cat) => (
                                    <option key={cat.CategoryId} value={cat.CategoryId}>{cat.CategoryName}</option>
                                ))}
                            </Field>
                            <ErrorMessage name="CategoryId" component="span" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label>Product Id</label>
                            <Field name="productId" type="number" className="form-control"  placeholder="Enter Product Id" />
                            <ErrorMessage name="productId" component="span" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label>Product code</label>
                            <Field name="productCode" type="text" className="form-control"  placeholder="Enter Product code" />
                            <ErrorMessage name="productCode" component="span" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label>Product Name</label>
                            <Field  name="productName" type="text" className="form-control" placeholder="Enter Product name" />
                            <ErrorMessage name="productName" component="span" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <Field  name="price" type="number" className="form-control" placeholder="Enter Product price" />
                            <ErrorMessage name="price" component="span" className="text-danger" />
                        </div>
                        <hr />
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" value="Save Product" >  Save Product  </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    </>);
}
export default FormikForm;