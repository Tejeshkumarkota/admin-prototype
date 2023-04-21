import DashboardTiles from './components/DashboardTiles/DahboardTiles';
import { Row, Col } from 'react-bootstrap';
import TableContent from './components/Table/Table';
import NavMenu from './components/navMenu/navMenu';

const DashboardWrapper = () => {
   
    return (
        <>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <h1 className="font-22 mb-4">Dashboard</h1>
                    <DashboardTiles />
                    <h1 className="font-22 mb-4">Default Table Example</h1>
                    <TableContent />
                    <NavMenu />
                </Col>
            </Row>
        </>
    );
}

export default DashboardWrapper;