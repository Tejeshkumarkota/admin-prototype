import { useState } from 'react';
import {
    Button,
    Modal
} from 'react-bootstrap';

const CustomModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
            <Button onClick={handleShow} variant="primary" type="button" className="text-uppercase font-12 py-2 px-4 d-inline-block rounded">
                Bootstrap Modal
            </Button>

            <Modal size="lg" show={show} className='custom-modal' onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Bootstrap Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" className='text-uppercase font-12 d-inline-block py-2 px-4 rounded' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" className='text-uppercase font-12 py-2 px-4 d-inline-block rounded ms-2' onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
 
export default CustomModal;