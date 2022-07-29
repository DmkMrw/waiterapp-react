import TableInfo from "../features/Table/TableInfo";
import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tablesReducer";

const Home = () => {

     const tables = useSelector(getAllTables);



     return (
          <>
               <h1>All tables</h1>
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