import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteTableData } from '../../../redux/tablesReducer';
import { useDispatch } from 'react-redux';

const TableInfo = ({ status, id, bill }) => {
     const dispatch = useDispatch();
     const tableStatus = status;

     const handleDeleteTable = () => {
          console.log('handledelete');
          dispatch(deleteTableData(id))
     }

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
                         <Button className='me-5' variant="primary" size="lg">
                         Show more
                         </Button>
                         </Link>
                         <Button variant="danger" size="lg" onClick={() => handleDeleteTable()}>
                         Delete
                         </Button>
                    </Col>
               </Row>
               <hr />
          </Row>
     );
     };


export default TableInfo;