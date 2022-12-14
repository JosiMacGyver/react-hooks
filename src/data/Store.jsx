import React, { useState } from "react";

//componente não visual, só com estado para a aplicação 
//aulas 73 e 74
const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = props => {
    const [state, setState] = useState(initialState)
    
    function updateState(key, value) {
        setState({
            ...state,
            [key]:value
        })
    }

    return (
        <AppContext.Provider value = {{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store