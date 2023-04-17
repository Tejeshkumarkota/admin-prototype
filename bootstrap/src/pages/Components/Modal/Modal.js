import {
    Container,
    Row, 
    Col,
    Card,
} from 'react-bootstrap';
import CustomModal from '../Modal/CustomModal/CustomModal';

const Modal = () => {
    return ( 
        <>
            <Row className='mb-4'>
                <Col xs={12} sm={12} md={12}>
                    <Row className='mb-2'>

                    </Row>
                    <h1 className="fw-medium font-22">Modal</h1>
                </Col>
                <Col xs={12} sm={12} md={12}>
                    <Card>
                        <Card.Body>
                            {/* <BootstrapModal /> */}
                            <CustomModal />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
 
export default Modal;