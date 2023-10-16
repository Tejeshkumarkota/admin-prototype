import {
    Container,
    Row, 
    Col,
    Card,
    Image,
    Form,
    Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return ( 
        <>
            <Container fluid className="px-full py-0 mx-0">
                <Row className='min-vh-100 justify-content-center'>
                    <Col xl="5" lg="5" md="7" sm="8" xs="12" className='d-flex flex-wrap align-items-center justify-content-center'>
                        <Card className='w-100 my-4 my-md-0 rounded-20 border-0 shadow-sm'>
                            <Card.Body className='px-3 px-sm-5 py-5'>
                                <div className='text-center mb-3'>
                                    <Image src="/images/logo-colored.png" alt="Logo" height="45" width="110" fluid className='mx-auto' />
                                </div>
                                <div className="text-center mb-4">
                                    <h1 className="text-dark fw-medium font-29">
                                        Forgot Your Password?
                                    </h1>
                                    <p className='text-center font-14'>
                                        We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!
                                    </p>
                                </div>
                                <Form className='user'>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">
                                        <Form.Control type="email" className='font-13 form-h' placeholder="Email ID" />
                                    </Form.Group>

                                    <div className="mb-3 text-center w-100">
                                        <Button variant="primary" className='font-14 rounded-20 text-uppercase w-100 fw-medium' type="submit">
                                            Reset Password
                                        </Button>
                                    </div>
                                    <div className='text-center'>
                                        <Link className='font-12 text-dark' to='/auth/login'>
                                            Already have an account? Login! 
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
 
export default ForgotPassword;