//selectors

export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);
export const getAllStatuses = (state) => state.statuses;
export const getAllId = (state) => state.tables.id;

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const DELETE_TABLE = createActionName('DELETE_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE');

// action creators
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const deleteTable = (payload) => ({ type: DELETE_TABLE, payload });
export const addTable = (payload) => ({type:ADD_TABLE, payload})
export const fetchTables = () => {
     return (dispatch) => {
          fetch('http://localhost:3131/tables')
               .then(res => res.json())
               .then(tables => dispatch(updateTables(tables)));
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
               .then(() => dispatch(deleteTable(payload)))
     }
};

export const addTableData = (payload) => {
     return (dispatch) => {
          const options = {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(payload),
          };
          fetch(`http://localhost:3131/tables/`, options)
               .then(() => dispatch(addTable(payload)))
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
          case ADD_TABLE:
               return [...statePart,  ...action.payload ]
          default:
          return statePart;

     };
};
export default tablesReducer;