import {
  Card,
  Col,
  Form,
  Row,
  Table,
  InputGroup,
  Button,
  Image,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

const TableContent = () => {
  const tableData = [
    {
      id: 1,
      Image: (
        <Image
          src="/images/table-1.png"
          alt="logo"
          height="60"
          width="93"
          fluid
          className=""
        />
      ),
      Title: "Abstract 3D",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ProductName: "1",
      Stock: "32 in stock",
      Price: "$ 45.99",
      TotalSales: "20",
    },
    {
      id: 2,
      Image: (
        <Image
          src="/images/table-2.png"
          alt="logo"
          height="60"
          width="93"
          fluid
          className=""
        />
      ),
      Title: "Sarphens Illustration",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ProductName: "2",
      Stock: "32 in stock",
      Price: "$ 45.99",
      TotalSales: "20",
    },
    {
      id: 3,
      Image: (
        <Image
          src="/images/table-1.png"
          alt="logo"
          height="60"
          width="93"
          fluid
          className=""
        />
      ),
      Title: "Abstract 3D",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ProductName: "1",
      Stock: "32 in stock",
      Price: "$ 45.99",
      TotalSales: "20",
    },
    {
      id: 4,
      Image: (
        <Image
          src="/images/table-2.png"
          alt="logo"
          height="60"
          width="93"
          fluid
          className=""
        />
      ),
      Title: "Sarphens Illustration",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ProductName: "2",
      Stock: "32 in stock",
      Price: "$ 45.99",
      TotalSales: "20",
    },
    {
      id: 5,
      Image: (
        <Image
          src="/images/table-1.png"
          alt="logo"
          height="60"
          width="93"
          fluid
          className=""
        />
      ),
      Title: "Abstract 3D",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ProductName: "1",
      Stock: "32 in stock",
      Price: "$ 45.99",
      TotalSales: "20",
    },
  ];

  return (
    <>
      <Row className="dash-table-sec">
        <Col sm={12} md={12}>
          <Card className="mb-4 border-0 rounded-10">
            <Card.Body>
              <Row>
                <Col sm={6} xs={6} md={6} lg={6} className="mb-3">
                  <Card.Title className="card-title text-black fw-bold border-0 mb-2 pb-0 font-18">
                    Product Sell
                  </Card.Title>
                </Col>
                <Col sm={6} xs={6} md={6} lg={6}>
                  <div className="">
                    <Row className="justify-content-end">
                      <Col xs={12} sm={12} md={6} lg={4}>
                        <InputGroup className="mb-2 dash-input-group">
                          <Button
                            variant="outline-secondary"
                            className="border-0"
                          >
                            <SearchIcon />
                          </Button>
                          <Form.Control
                            placeholder="Search"
                            className="border-0 shadow-none ps-0"
                          />
                        </InputGroup>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={4}>
                        <Form.Select className="border-0 font-14 fw-medium shadow-none">
                          <option value="0" selected>
                            Last 30 days
                          </option>
                          <option value="1">Monthly</option>
                          <option value="2">Quarterly</option>
                          <option value="3">Yearly</option>
                        </Form.Select>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <Table size="sm" className="mb-0 font-14">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th className="text-center">Stock</th>
                        <th>Price</th>
                        <th className="text-center">Total Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((item) => (
                        <tr key={item.id}>
                          <td className="border-0">
                            <div className="d-flex align-items-center">
                              <div>{item.Image}</div>
                              <div className="ms-3">
                                <h5 className="text-black fw-bold font-16">
                                  {item.Title}
                                </h5>
                                <p className="text-rgb-black fw-normal font-12 mb-0">
                                  {item.Description}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="border-0 text-center">{item.Stock}</td>
                          <td className="border-0 fw-bold">{item.Price}</td>
                          <td className="border-0 text-center">
                            {item.TotalSales}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TableContent;
