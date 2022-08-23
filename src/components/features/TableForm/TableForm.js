import { useParams } from 'react-router'
import { getTableById, updateTableData } from '../../../redux/tablesReducer';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { getAllStatuses } from '../../../redux/tablesReducer';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const TableForm = ({actionText}) => {

     const { id } = useParams();
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const tableData = useSelector(state => getTableById(state, id));
     const statuses = useSelector(getAllStatuses);

     const [status, setStatus] = useState(tableData.status)
     const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount)
     const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount)
     const [bill, setBill] = useState(tableData.bill)

     const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(updateTableData({ status, peopleAmount, maxPeopleAmount, bill, id}));

          navigate(-1)

     }

     return (
          <>
               <Row>
                    <h1>Table {tableData.id}</h1>
                    <Form onSubmit={handleSubmit}>
                         <Form.Group>
                              <Row className="mb-4 mt-4 d-flex align-items-center">
                                   <Col md={1}>
                                        <strong>Status:</strong>
                                   </Col>
                                   <Col md={2}>
                                        <Form.Select id="statusSelect" onChange={(e) => setStatus(e.target.value)} value={status}>
                                             {statuses.map(status => <option key={shortid()} value={status} >{status}</option>)}
                                        </Form.Select>
                                   </Col>
                              </Row>
                              {status === 'Busy' &&
                                   <Row className="mb-4 mt-4 d-flex align-items-center">
                                        <Col md={1}>
                                             <strong>People:</strong>
                                        </Col>
                                        <Form.Control
                                             className="pl-3"
                                             style={{ width: '60px', marginLeft: '10px', marginRight: '10px' }}
                                             type="number"
                                             value={peopleAmount}
                                             onChange={(e)=> setPeopleAmount(e.target.value)}
                                        />
                                        /
                                        <Form.Control
                                             className="pl-3"
                                             style={{ width: '60px', marginLeft: '10px', marginRight: '10px' }}
                                             type="number"
                                             value={maxPeopleAmount}
                                             onChange={(e)=> setMaxPeopleAmount(e.target.value)}
                                        />
                                   </Row>
                              }
                              {(status !== 'Free' && status !== 'Reserved') &&
                                   <Row className={'d-flex align-items-center'}>
                                        <Col md={1}>
                                             <strong>Bill:</strong>
                                        </Col>
                                        $
                                        <Col md={2}>
                                             <Form.Control
                                                  style={{ width: '60px', marginRight: '10px' }}
                                                  type="number"
                                                  placeholder="current bill"
                                                  onChange={(e) => setBill(e.target.value)}
                                                  value={bill}
                                             />
                                        </Col>
                                   </Row>
                              }
                         </Form.Group>
                         <Button as="input" value={'UPDATE'} type="submit" style={{ marginTop: '20px' }} />
                    </Form>
               </Row>

          </>

     );
}

export default TableForm;