//selectors

export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);
export const getAllStatuses = (state) => state.statuses;

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const DELETE_TABLE = createActionName('DELETE_TABLE');


// action creators
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const deleteTable = (payload) => ({ type: DELETE_TABLE, payload });
export const fetchTables = () => {
     return (dispatch) => {
          fetch('http://localhost:3131/tables')
               .then(res => res.json())
               .then(tables => dispatch(updateTables(tables), console.log('tables', tables)))
     };
};

export const updateTableData = (newData) => {
     return (dispatch) => {
          const options = {
               method: 'PUT',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(newData),
          };

          fetch(`http://localhost:3131/tables/${newData.id}`, options)
               .then (()=> dispatch(updateTable(newData)))
     }
}

export const deleteTableData = (payload) => {
     return (dispatch) => {
          const options = {
               method: 'DELETE',
               headers: {
                    'Content-Type': 'application/json'
               }
          };
          fetch(`http://localhost:3131/tables/${payload}`, options)
               .then (()=> dispatch(deleteTable(payload)))
     }
}

const tablesReducer = (statePart = [], action) => {
     switch (action.type) {
          case UPDATE_TABLE:
               return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table))
          case UPDATE_TABLES:
               return [...action.payload];
          case DELETE_TABLE:
               return statePart.filter(table => (table.id !== action.payload))
          default:
          return statePart;
     };
};
export default tablesReducer;