//selectors

export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);
export const getAllStatuses = (state) => state.statuses;

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLES')
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });

// action creators

export const updateTable = payload => ({ type: UPDATE_TABLE, payload })
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

export const fetchTables = () => {
     return (dispatch) => {
          fetch(`http://localhost:3131/tables`)
               .then((res) => res.json())
               .then((tables) => dispatch(updateTables(tables)));
          };
};


const tablesReducer = (statePart = [], action) => {
     switch (action.type) {
          case UPDATE_TABLE:
               return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table))
          case UPDATE_TABLES:
               return [...action.payload];
          default:
          return statePart;
     };
};
export default tablesReducer;