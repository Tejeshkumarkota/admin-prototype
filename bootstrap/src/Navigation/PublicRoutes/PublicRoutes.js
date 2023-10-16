import Container from "react-bootstrap/Container";
import { Route, Routes, useLocation } from "react-router-dom";
//  imported pages here
import ForgotPassword from "../../pages/Auth/ForgotPassword/ForgotPassword";
import SignIn from "../../pages/Auth/SignIn/SignIn";
import SignUp from "../../pages/Auth/SignUp/SignUp";
import DashboardWrapper from "../../pages/Dashboard/DashboardWrapper";
import Sidebar from "../../pages/Layout/Sidebar/Sidebar";

const PublicRoutes = () => {
    let location = useLocation();
    return (
        <>
            {/* Before Login */}
            {location.pathname === "/auth/login" ||
                location.pathname === "/auth/forgot-password" ||
                location.pathname === "/auth/register" ? (
                <Routes>
                    <Route exact path="/auth/login" element={<SignIn />}></Route>
                    <Route exact path="/auth/register" element={<SignUp />}></Route>
                    <Route exact path="/auth/forgot-password" element={<ForgotPassword />}></Route>
                </Routes>
            ) : (
                <div className="Wrapper">
                    <Sidebar />
                    <div className="ContentWrapper px-3">
                        <div className="Content">
                            <Container fluid>
                                <Routes>
                                    <Route exact path="/" element={<DashboardWrapper />}></Route>
                                </Routes>
                            </Container>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PublicRoutes;