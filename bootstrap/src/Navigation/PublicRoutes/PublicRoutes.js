import { Routes, Route, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
//  imported pages here
import Home from "../../pages/Home/Home";
import SignIn from "../../pages/Auth/SignIn/SignIn";
import SignUp from "../../pages/Auth/SignUp/SignUp";
import ForgotPassword from "../../pages/Auth/ForgotPassword/ForgotPassword";
import ModalPopup from "../../pages/Components/Modal/ModalPopup";
import AccordionBootstrap from "../../pages/Components/Accordion/AccordionBootstrap";
import { ChartJsWrapper } from "../../pages/Charts/ChartJsWrapper";
import { GanttChartWrapper } from "../../pages/Charts/GanttChart/GanttChartWrapper";
import { DxSchedular } from "../../pages/Charts/DxSchedular/DxSchedular";
import AlertBootstrap from "../../pages/Components/Alert/AlertBootstrap";
import CardBootstrap from "../../pages/Components/Card/CardBootstrap";
import CarouselBootstrap from "../../pages/Components/Carousel/CarouselBootstrap";
import { FloorPlanAdmin } from "../../pages/Floor/DXDiagram/FloorPlanAdmin";
import Header from "../../pages/Layout/Header/Header";
import Sidebar from "../../pages/Layout/Sidebar/Sidebar";
import {CustomCode} from "../../pages/Floor/CustomCode/CustomCode";
import DashboardWrapper from "../../pages/Dashboard/DashboardWrapper";
import {CalendarWrapper} from "../../pages/Calendar/CalendarWrapper";
import {ApexChartJsWrapper} from "../../pages/ApexCharts/ApexChartJsWrapper";
import {KPITemplateWrapper} from '../../pages/KPITemplate/KPITemplateWrapper';
import CollapseBootstrap from '../../pages/Components/Collapse/CollapseBootstrap';
import DropdownBootstrap from '../../pages/Components/Dropdown/DropdownBootstrap';
import ListGroupBootstrap from '../../pages/Components/ListGroup/ListGroupBootstrap';
import OffCanvasBootstrap from '../../pages/Components/OffCanvas/OffCanvasBootstrap';
import ScrollspyBootstrap from '../../pages/Components/Scrollspy/ScrollspyBootstrap';
import NavsTabsBootstrap from '../../pages/Components/Navs&Tabs/NavsTabsBootstrap';
import PaginationBootstrap from '../../pages/Components/Pagination/PaginationBootstrap';
import PopoversBootstrap from '../../pages/Components/Popovers/PopoversBootstrap';
import ProgressBootstrap from '../../pages/Components/Progress/ProgressBootstrap';
import BadgeBootstrap from '../../pages/Components/Badge/BadgeBootstrap';
import BreadcrumbBootstrap from '../../pages/Components/Breadcrumb/BreadcrumbBootstrap';
import ButtonsBootstrap from '../../pages/Components/Buttons/ButtonsBootstrap';
import BasicFormBootstrap from '../../pages/Components/BasicForm/BasicFormBootstrap';
import AdvancedFormBootstrap from '../../pages/Components/AdvancedForm/AdvancedFormBootstrap';
import SpinnerBootstrap from '../../pages/Components/Spinner/SpinnerBootstrap';
import ToastsBootstrap from '../../pages/Components/Toasts/ToastsBootstrap';
import SweetAlertBootstrap from '../../pages/Components/SweetAlert/SweetAlertBootstrap';
import TooltipBootstrap from '../../pages/Components/Tooltip/TooltipBootstrap';

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
                    <div className="ContentWrapper">
                        <div className="Content">
                            <Header />
                            <Container fluid>
                                <Routes>
                                    <Route exact path="/components/modal" element={<ModalPopup />}></Route>
                                    <Route exact path="/components/accordion" element={<AccordionBootstrap />}></Route>
                                    <Route exact path="/components/alert" element={<AlertBootstrap />}></Route>
                                    <Route exact path="/components/card" element={<CardBootstrap />}></Route>
                                    <Route exact path="/components/carousel" element={<CarouselBootstrap />}></Route>
                                    <Route exact path="/components/collapse" element={<CollapseBootstrap />}></Route>
                                    <Route exact path="/components/dropdown" element={<DropdownBootstrap />}></Route>
                                    <Route exact path="/components/list-group" element={<ListGroupBootstrap />}></Route>
                                    <Route exact path="/components/off-canvas" element={<OffCanvasBootstrap />}></Route>
                                    <Route exact path="/components/scrollspy" element={<ScrollspyBootstrap />}></Route>
                                    <Route exact path="/components/navs-tabs" element={<NavsTabsBootstrap />}></Route>
                                    <Route exact path="/components/pagination" element={<PaginationBootstrap />}></Route>
                                    <Route exact path="/components/popovers" element={<PopoversBootstrap />}></Route>
                                    <Route exact path="/components/progress" element={<ProgressBootstrap />}></Route>
                                    <Route exact path="/components/badge" element={<BadgeBootstrap />}></Route>
                                    <Route exact path="/components/breadcrumb" element={<BreadcrumbBootstrap />}></Route>
                                    <Route exact path="/components/buttons" element={<ButtonsBootstrap />}></Route>
                                    <Route exact path="/components/basic-form" element={<BasicFormBootstrap />}></Route>
                                    <Route exact path="/components/advanced-form" element={<AdvancedFormBootstrap />}></Route>
                                    <Route exact path="/components/spinner" element={<SpinnerBootstrap />}></Route>
                                    <Route exact path="/components/toasts" element={<ToastsBootstrap />}></Route>
                                    <Route exact path="/components/sweet-alert" element={<SweetAlertBootstrap />}></Route>
                                    <Route exact path="/components/tooltip" element={<TooltipBootstrap />}></Route>

                                    <Route exact path="/dashboard" element={<DashboardWrapper />}></Route>
                                    <Route exact path="/charts" element={<ChartJsWrapper />}></Route>
                                    <Route exact path="/gantt-chart" element={<GanttChartWrapper />}></Route>
                                    <Route exact path="/dx-schedular" element={<DxSchedular />}></Route>
                                    <Route exact path="/floor-plan-admin" element={<FloorPlanAdmin />}></Route>
                                    <Route exact path="/floor-custom-code" element={<CustomCode />}></Route>
                                    <Route exact path="/calendar" element={<CalendarWrapper />}></Route>
                                    <Route exact path="/apex-chart" element={<ApexChartJsWrapper />}></Route>
                                    <Route exact path="/kpi-template" element={<KPITemplateWrapper />}></Route>
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