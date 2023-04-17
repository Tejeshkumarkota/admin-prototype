import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
//  imported pages here
import Home from '../../pages/Home/Home';
import SignIn from '../../pages/Auth/SignIn/SignIn';
import SignUp from '../../pages/Auth/SignUp/SignUp';
import ForgotPassword from '../../pages/Auth/ForgotPassword/ForgotPassword';
import Modal from '../../pages/Components/Modal/Modal';

const PublicRoutes = () => {
    return ( 
        <>
        <Router>
            <Routes>
                <Route exact path='/auth/login' element={<SignIn />}></Route>
                <Route exact path='/auth/register' element={<SignUp />}></Route>
                <Route exact path='/auth/forgot-password' element={<ForgotPassword />}></Route>
                <Route exact path='/components/modal' element={<Modal />}></Route>
                <Route exact path='/' element={< Home />}></Route>
            </Routes>
        </Router>
        </>
     );
}
 
export default PublicRoutes;