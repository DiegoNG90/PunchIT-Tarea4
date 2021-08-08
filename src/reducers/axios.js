import {ACTIONS} from '../actions/axios'

// Reducer: función pura: entra algo (param) y sale algo return newVariable.

export const initialState = {
    data: {},
    loading: true,
    error: false,
}

/* → 1) Una funcion reducer SIEMPRE recibe un ESTADO (state) y una ACCION (action)
   → 2) Se suelen definir con un SWITCH
   → 3) En action viene ...action: ({type: ACTIOS.SET_DATA, payload: {info: ..., results: ...}})
*/
export const axiosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_DATA:
            return{
                ...initialState,
                loading: false,
                data: {
                    info: action.payload.info,
                    results: action.payload.results,
                }
            }
        case ACTIONS.SET_ERROR:
            return {
                ...initialState,
                error: true,
                loading: false,
            }
        default:
            return state;
    }
}
