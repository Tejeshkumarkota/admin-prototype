import {
    Container,
    Row, 
    Col,
    Card,
    Image,
    Form
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return ( 
        <>
            <Container fluid className="px-full py-0 mx-0">
                <Row className='min-vh-100 justify-content-center'>
                    <Col xl="4" lg="5" md="7" sm="8" xs="12" className='d-flex flex-wrap align-items-center justify-content-center'>
                        <Card className='w-100 my-4 my-md-0 rounded-20 border-0 shadow-sm'>
                            <Card.Body className='px-3 px-sm-5 py-5'>
                                <div className='text-center mb-3'>
                                    <Image src="https://exalogic-store.s3.us-east-2.amazonaws.com/admin-prototype/react/images/exa-blue-logo.png" alt="Logo" fluid className='mx-auto' />
                                </div>
                                <div className="text-center text-uppercase">
                                    <h1 className="text-dark text-center mb-5">
                                        <span className="font-29 d-block mb-3 fw-medium">
                                            Signin
                                        </span>
                                        <span className="font-18 text-secondary d-block">
                                            Welcome Back! <br />
                                        </span>  
                                    </h1>
                                </div>
                                <Form className='user'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" className='font-13 form-h' placeholder="Email ID" />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formBasicPassword">
                                        <Form.Control type="password" className='font-13 form-h' placeholder="Password" />
                                    </Form.Group>

                                    <div className="mb-3 text-center">
                                        <Link to='/dashboard' className='btn btn-primary font-14 rounded-20 text-uppercase w-100 fw-medium'>
                                            Sign in
                                        </Link>
                                    </div>
                                    <div className="mb-3 text-center">
                                        <Link to='/auth/register' className='btn btn-outline-primary font-14 rounded-20 text-uppercase w-100 fw-medium'>
                                            Sign up
                                        </Link>
                                    </div>
                                    <div className='text-center'>
                                        <Link className='font-12 text-dark' to='/auth/forgot-password'>
                                            Forgot Password? 
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
 
export default SignIn;