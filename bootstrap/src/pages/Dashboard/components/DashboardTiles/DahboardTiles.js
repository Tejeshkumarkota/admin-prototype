import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
function DashboardTiles() {
    const data = [{
        "id": "1",
        "title": "Primary Card",
        "viewlink": "/",
        "bgColorClassName": "bg-primary",
    }, {
        "id": "2",
        "title": "Warning Card",
        "viewlink": "/",
        "bgColorClassName": "bg-warning",
    }, {
        "id": "3",
        "title": "Success Card",
        "viewlink": "/",
        "bgColorClassName": "bg-success",
    }, {
        "id": "4",
        "title": "Danger Card",
        "viewlink": "/",
        "bgColorClassName": "bg-danger",
    }];
    return (
        <Row>
            {data.map((item) => (
                <Col sm={6} md={3} lg={3}>
                    <Card className={`text-white font-16 mb-4 ${item.bgColorClassName}`}>
                        <Card.Body>
                            <Card.Title className='card-title h5 border-0 mb-0 pb-0 font-18'>{item.title}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className='d-flex align-items-center justify-content-between'>
                                <Link to={" / "} className='font-13 text-decoration-none view-link'>View Details</Link>
                                <i className="bi bi-chevron-right"></i>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default DashboardTiles;