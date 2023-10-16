import {
    Container,
    Row, 
    Col,
    Card,
    Image,
    Form
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return ( 
        <>
            <Container fluid className="px-full py-0 mx-0">
                <Row className='min-vh-100 justify-content-center'>
                    <Col xl="4" lg="5" md="7" sm="8" xs="12" className='d-flex flex-wrap align-items-center justify-content-center'>
                        <Card className='w-100 my-4 my-md-0 rounded-20 border-0 shadow-sm'>
                            <Card.Body className='px-3 px-sm-5 py-5'>
                                <div className='text-center mb-3'>
                                    <Image src="/images/logo-colored.png" alt="Logo" height="45" width="110" fluid className='mx-auto' />
                                </div>
                                <div className="text-center text-uppercase">
                                    <h1 className="text-dark text-center mb-5">
                                        <span className="font-29 d-block mb-3 fw-medium">
                                            Signup
                                        </span>
                                    </h1>
                                </div>
                                <Form className='user'>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" className='font-13 form-h' placeholder="Full Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="email" className='font-13 form-h' placeholder="Email ID" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="password" className='font-13 form-h' placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Control type="password" className='font-13 form-h' placeholder="Confirm Password" />
                                    </Form.Group>

                                    <div className="mb-3 text-center">
                                        <Link to='/auth/login' className='btn btn-primary font-14 rounded-20 text-uppercase w-100 fw-medium'>
                                            Sign up
                                        </Link>
                                    </div>
                                    <div className="mb-3 text-center">
                                        <Link to='/auth/login' className='btn btn-outline-primary font-14 rounded-20 text-uppercase w-100 fw-medium'>
                                            Login
                                        </Link>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default SignUp;