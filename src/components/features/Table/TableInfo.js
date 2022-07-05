import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TableInfo = ({ status, id, bill }) => {
     const tableStatus = status;
     return (
          <Row>
               <Row className="align-items-end mb-3 mt-3 pr-0">
                    <Col className="col-2">
                         <h2 className="mb-0">Table {id}</h2>
                    </Col>
                    <Col className="col-4">
                         <strong>Status:</strong> {status} {''}
                         {tableStatus === 'Busy' ?
                         <span>
                         <strong>Bill: </strong>
                         {bill}
                         </span>
                         : null}
                    </Col>
                    <Col className="col-6 d-flex justify-content-end padding-right-0">
                         <Link to={'/table/' + id}>
                         <Button variant="primary" size="lg">
                         Show more
                         </Button>
                         </Link>
                    </Col>
               </Row>
               <hr />
          </Row>
     );
     };


export default TableInfo;