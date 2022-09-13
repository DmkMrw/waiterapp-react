import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { getAllStatuses } from '../../../redux/tablesReducer';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTableData } from '../../../redux/tablesReducer';
import { getAllId } from '../../../redux/tablesReducer';

const AddTable = ({actionText}) => {

     const dispatch = useDispatch();
     const navigate = useNavigate();
     const statuses = useSelector(getAllStatuses);

     const [status, setStatus] = useState('')
     const [peopleAmount, setPeopleAmount] = useState('')
     const [maxPeopleAmount, setMaxPeopleAmount] = useState('')
     const [bill, setBill] = useState('')
     const [tableNumber, setTableNumber] = useState('');

     const handleSubmit = (e) => {
          const payload = {
               id: tableNumber,
               status: status,
               peopleAmount: peopleAmount,
               maxPeopleAmount: maxPeopleAmount,
               bill: bill
          }
          e.preventDefault();
          dispatch(addTableData(payload));

          navigate(-1)

     }

     return (
          <>
               <Row>
                    <h1>Add new table</h1>
                    <Form onSubmit={handleSubmit}>
                         <Form.Group className={'mb-4'}>
                              <Row className={'d-flex align-items-center'}>
                                        <Col md={2}>
                                             <strong>Table number:</strong>
                                        </Col>
                                        <Col md={2}>
                                             <Form.Control
                                                  style={{ width: '60px', marginRight: '10px' }}
                                                  type="text"
                                                  placeholder="0"
                                                  onChange={(e) => setTableNumber(e.target.value)}
                                                  value={tableNumber}
                                             />
                                        </Col>
                                   </Row>
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
                              {status !== 'Free' &&
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
                              {status !== 'Free' &&
                                   <Row className={'d-flex align-items-center'}>
                                        <Col md={1}>
                                             <strong>Bill:</strong>
                                        </Col>
                                        $
                                        <Col md={2}>
                                             <Form.Control
                                                  style={{ width: '60px', marginRight: '10px' }}
                                                  type="number"
                                                  placeholder="0"
                                                  onChange={(e) => setBill(e.target.value)}
                                                  value={bill}
                                             />
                                        </Col>
                                   </Row>
                              }
                         </Form.Group>
                         <Button as="input" value={'Add new table'} type="submit" style={{ marginTop: '20px' }} />
                    </Form>
               </Row>

          </>

     );
}

export default AddTable;
