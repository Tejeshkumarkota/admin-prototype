import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ListAltIcon from '@mui/icons-material/ListAlt';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function DashboardTiles() {
  const data = [
    {
      id: "1",
      icon: <CurrencyExchangeIcon />,
      iconclass: "earning-icon",
      title: "Earning",
      price: "$198k",
      progresscolor: "text-success",
      arrow: <ArrowUpwardIcon />,
      progress: "37.8%",
      monthlyweekly: "this month"
    },
    {
      id: "2",
      icon: <ListAltIcon />,
      iconclass: "orders-icon",
      title: "Orders",
      price: "$2.4k",
      progresscolor: "text-danger",
      arrow: <ArrowDownwardIcon />,
      progress: "2%",
      monthlyweekly: "this month"
    },
    {
      id: "3",
      icon: <AccountBalanceWalletOutlinedIcon />,
      iconclass: "bal-icon",
      title: "Balance",
      price: "$2.4k",
      progresscolor: "text-danger",
      arrow: <ArrowDownwardIcon />,
      progress: "2%",
      monthlyweekly: "this month"
    },
    {
      id: "4",
      icon: <WorkOutlineIcon />,
      iconclass: "sales-icon",
      title: "Total Sales",
      price: "$89k",
      progresscolor: "text-success",
      arrow: <ArrowUpwardIcon />,
      progress: "11%",
      monthlyweekly: "this week"
    },
  ];
  return (
    <Row>
      {data.map((item) => (
        <Col sm={6} md={3} lg={3}>
          <Card className={`font-16 mb-4 bg-white border-0 rounded-10`}>
            <Card.Body>
              <Row className="align-items-center">
                <Col sm={12} xs={12} md={5} lg={5}>
                    <div className={`icon-bg-dash ${item.iconclass}`}>
                        {item.icon}
                    </div>
                </Col>
                <Col sm={12} xs={12} md={7} lg={7}>
                  <Card.Title className="card-title text-rgb-black h5 fw-normal border-0 mb-1 pb-0 font-12">
                    {item.title}
                  </Card.Title>
                  <h2 className="font-24 fw-bold text-black mb-1">{item.price}</h2>
                  <Card.Text className="text-black fw-medium font-12 pb-0 mb-0">
                    <span className={`${item.progresscolor}`}> <span className="dash-arw-icon"> {item.arrow} </span> {item.progress} </span> {item.monthlyweekly}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DashboardTiles;
