//selectors

export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);
export const getAllStatuses = (state) => state.statuses;

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE')
const UPDATE_TABLES = createActionName('UPDATE_TABLES');


// action creators
export const updateTable = payload => ({ type: UPDATE_TABLE, payload })
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });


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