import { Card, Table } from 'react-bootstrap';
const TableContent = () => {
    const tableData =[{
        "id": 1,
        "sNo":"1",
        "FirstName":"Mark",
        "LastName":"Otto",
        "Username":"@mdo"
    },{
        "id": 2,
        "sNo":"2",
        "FirstName":"Jacob",
        "LastName":"Thornton",
        "Username":"@fat"
    },{
        "id": 3,
        "sNo":"3",
        "FirstName":"Jacob",
        "LastName":"Thornton",
        "Username":"@fat"
    }]
    return (
        <>
            <Card className='mb-4'>
                <Card.Body>
                    <Table striped bordered hover size="sm" className='mb-0'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item)=>(
                                <tr key={item.id}>
                                    <td>{item.sNo}</td>
                                    <td>{item.FirstName}</td>
                                    <td>{item.LastName}</td>
                                    <td>{item.Username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
}

export default TableContent;