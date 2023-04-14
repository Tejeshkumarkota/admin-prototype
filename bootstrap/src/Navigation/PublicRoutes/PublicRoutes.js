import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
//  imported pages here
import Home from '../../pages/Home/Home';
import SignIn from '../../pages/Auth/SignIn/SignIn';

const PublicRoutes = () => {
    return ( 
        <>
        <Router>
            <Routes>
                <Route exact path='/auth/login' element={<SignIn />}></Route>
                <Route exact path='/' element={< Home />}></Route>
            </Routes>
        </Router>
        </>
     );
}
 
export default PublicRoutes;