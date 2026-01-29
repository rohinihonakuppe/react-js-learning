import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Databinding from './Databinding';
import Search from './Search';
import Navbar from './Navbar';
import ViewProduct from './ViewProduct';
import Uncontrolled from './Uncontrolled';
import Controlled from './Controlled';
import Child1 from './Child1';
import Child2 from './Child2';
import { Suspense } from 'react';
import { lazy } from 'react';
import FormikForm from './FormikForm';
import { UserProvider } from './context/UserProvider';
import Login from './Login'; 

function Layout() {
    const DBinding = lazy(() => import('./Databinding'));
    const SearchComp = lazy(() => import('./Search'));
    const ViewProd = lazy(() => import('./ViewProduct'));
    const UncontrolledComp = lazy(() => import('./Uncontrolled'));
    const ControlledComp = lazy(() => import('./Controlled'));
    const FormikForm = lazy(() => import('./FormikForm'));
    const Login = lazy(() => import('./Login'));

    return (<>
        <BrowserRouter>
            <UserProvider>
                <Suspense fallback={<div>Loading...</div>}>
                    <Navbar />
                    <Routes>
                        <Route path="/databinding" element={<Databinding />} >
                            <Route path="personal" element={<Child1 />} />
                            <Route path="professional" element={<Child2 />} />
                        </Route>
                        <Route path="/search" element={<Search />} />
                        <Route path="/viewproduct/:id" element={<ViewProduct />} />
                        <Route path="/Uncontrolled" element={<Uncontrolled />} />
                        <Route path="/Controlled" element={<Controlled />} />
                        <Route path="/formikform" element={<FormikForm />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="*" element={<Databinding />} />

                    </Routes>
                </Suspense>
            </UserProvider>
        </BrowserRouter>
    </>)
}

export default Layout;