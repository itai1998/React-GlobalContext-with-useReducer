import React, {createContext, useReducer} from "react";
import AddReducer from './AddReducer';

// Initial state
const initialState = {
    transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Providor component
export const GlobalProvidoer = ({children}) => {
  const [state, dispatch] = useReducer(AddReducer, initialState);

// Action
function deleteTransaction(id){
  dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
  });
}

function addTransaction(transaction){
  dispatch({
    type: 'ADD_TRANSACTION',
    payload: transaction
  });
}

  return (
    <GlobalContext.Provider value={{transactions:state.transactions,  deleteTransaction, addTransaction}}>
      {children}
    </GlobalContext.Provider>
  )
}

