import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
//  imported pages here
import Home from '../../pages/Home/Home';



const PublicRoutes = () => {
    return ( 
        <>
        <Router>
            <Routes>
                 <Route exact path='/' element={< Home />}></Route>
            </Routes>
        </Router>
        </>
     );
}
 
export default PublicRoutes;