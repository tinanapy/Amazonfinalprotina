import React, {createContext,useContext,useReducer} from 'react'
// prepares the datalayer
export const StateContext = createContext();
// wrap our app and probide the ddata layer
export const Stateprovider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
//push and pull information from the data layer
export const useStateValue=()=>useContext(StateContext)


export default Stateprovider