import { useParams } from 'react-router'
import { getTableById } from '../../../redux/tablesReducer';
import { useSelector } from 'react-redux';

const TableForm = () => {

     const { id } = useParams();
     console.log('table', id);

     const tableData = useSelector(state => getTableById(state, id))

     console.log('tabledata', tableData);

     return (
          <>
               <h1>tableform</h1>
               Status: {tableData.status}
          </>

     );
}

export default TableForm;