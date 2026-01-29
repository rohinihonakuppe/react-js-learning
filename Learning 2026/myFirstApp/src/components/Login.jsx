import { ErrorMessage, Formik, Field, Form, } from "formik";
import * as Yup from 'yup';
import { useState, useContext } from "react";
import { UserContext } from "./context/UserProvider";
import { useNavigate } from "react-router-dom";


function Login() {
    const {loginClick} = useContext(UserContext);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const loginForm = {
        username: '',
        password: ''
    }

    const loginValidationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")
    });

    const handleLoginForm = (frm) => {
        if (frm.username === 'admin' && frm.password === 'admin') {
            setMessage('Login successful');
            loginClick(frm.username);
            setTimeout(() =>{
                navigate('/FormikForm');
            }, 2000);
        } else {
            setMessage('Invalid credentials');
        }
    }

    return (<>
        <div className="row">
            <div className="col-lg-3">
            </div>
            <div className="col-lg-6">
                {message && <div className="alert alert-info text-center">{message}</div>}
                <Formik initialValues={loginForm} enableReinitialize={true} onSubmit={(frm) => handleLoginForm(frm)}
                    validationSchema={loginValidationSchema}>
                    <Form>
                        <div className="form-group">
                            <label>Username</label>
                            <Field name="username" type="text" className="form-control" placeholder="Enter Username" />
                            <ErrorMessage name="username" component="span" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Field name="password" type="password" className="form-control" placeholder="Enter Password" />
                            <ErrorMessage name="password" component="span" className="text-danger" />
                        </div>
                        <hr />
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="col-lg-3">
            </div>
        </div>
    </>
)}

export default Login;