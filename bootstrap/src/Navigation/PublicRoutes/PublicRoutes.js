import {
	Routes,
	Route,
    useLocation
} from 'react-router-dom';
//  imported pages here
import Home from '../../pages/Home/Home';
import SignIn from '../../pages/Auth/SignIn/SignIn';
import SignUp from '../../pages/Auth/SignUp/SignUp';
import ForgotPassword from '../../pages/Auth/ForgotPassword/ForgotPassword';
import ModalPopup from '../../pages/Components/Modal/ModalPopup';
import AccordionBootstrap from '../../pages/Components/Accordion/AccordionBootstrap';
import {ChartsWrapper} from '../../pages/Charts/ChartsWrapper';
import {GanttChartWrapper} from'../../pages/Charts/GanttChart/GanttChartWrapper';
import {DxSchedular} from "../../pages/Charts/DxSchedular/DxSchedular";
import AlertBootstrap from '../../pages/Components/Alert/AlertBootstrap';
import Header from '../../pages/Layout/Header/Header';
import Sidebar from '../../pages/Layout/Sidebar/Sidebar';

const PublicRoutes = () => {
    let location = useLocation();
    return ( 
        <>
        {/* Before Login */}
        {(location.pathname === '/auth/login') || (location.pathname === '/auth/forgot-password') || (location.pathname === '/auth/register') ?
        (
            <Routes>
                <Route exact path='/auth/login' element={<SignIn />}></Route>
                <Route exact path='/auth/register' element={<SignUp />}></Route>
                <Route exact path='/auth/forgot-password' element={<ForgotPassword />}></Route>
            </Routes>
        ):
         (
            <div className='Wrapper'>
                <Sidebar />
                <div className="ContentWrapper">
                    <div className="Content">
                        <Header/>
                        <div className='container-fluid'>
                            <Routes>
                                <Route exact path='/components/modal' element={<ModalPopup />}></Route>
                                <Route exact path='/components/accordion' element={<AccordionBootstrap />}></Route>
                                <Route exact path='/components/alert' element={<AlertBootstrap />}></Route>
                                <Route exact path='/dashboard' element={<Home />}></Route>
                                <Route exact path='/charts' element={<ChartsWrapper />}></Route>
                                <Route exact path='/gantt-chart' element={<GanttChartWrapper />}></Route> 
                                <Route exact path='/dx-schedular' element={<DxSchedular />}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        )}
        
        </>
     );
}
 
export default PublicRoutes;