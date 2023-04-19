import { useState } from 'react';
import {
    Row, 
    Col,
    Card,
    Button,
    Modal
} from 'react-bootstrap';
import CustomModal from '../Modal/CustomModal/CustomModal';
import { BsCodeSlash } from "react-icons/bs";
import ViewCodePopup from '../ViewCodePopup/ViewCodePopup';
import ViewCodeButton from '../ViewCodeButton/ViewCodeButton';

const ModalPopup = () => {

    const [show, setShow] = useState(false);

    return ( 
        <>
            <Row className='mb-4'>
                <Col xs={12} sm={12} md={12}>
                    <Row className='mb-2'>
                        <Col xs={12} sm={12} md={7}>
                            <h1 className="fw-medium font-22">Modal</h1>
                        </Col>
                        <Col xs={12} sm={12} md={5} className='text-end'>
                            {/* <Button onClick={handleShow} variant="outline-primary" type="button" className="py-1 px-2 btn-sm">
                                <BsCodeSlash />
                            </Button> */}
                            <ViewCodeButton show={show} setShow={setShow} />
                        </Col>
                    </Row>
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

            {/* <Modal size="xl" show={show} className='custom-modal' onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>View Code</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal> */}
            <ViewCodePopup show={show} setShow={setShow} comp={'Modal'} />
        </>
    );
}
 
export default ModalPopup;