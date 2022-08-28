import TableInfo from "../features/Table/TableInfo";
import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tablesReducer";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Home = () => {

     const tables = useSelector(getAllTables);
     console.log('tables in Home', tables);

     const handleAddTable = () => {
          console.log('handleAddTable');
     }

     return (
          <>
               <Row className="mb-3 mt-3">
                    <Col>
                         <h1>All tables</h1>
                    </Col>
                    <Col className="d-flex justify-content-end">
                         <Link to={'/addtable'}>
                              <Button variant="success" size="lg" onClick={()=> handleAddTable()}>
                              Add table
                              </Button>
                         </Link>
                    </Col>
               </Row>
               {tables.map((table) =>
                    <TableInfo key={table.id}
                    id={table.id}
                    number={table.id}
                    status={table.status}
                    people={table.people}
                    maxPeople={table.maxPeople}
                    bill={table.bill} />
               )}
          </>
     );
}

export default Home;
