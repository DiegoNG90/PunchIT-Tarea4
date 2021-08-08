// Se definen las acciones del reducer!
/* ↓↓↓ Tmb es normal verlo así const SET_DATA = "SET_DATA", pero cuando hay muchas acciones, mejor guardarlas en un objeto!  */

export const ACTIONS = {
  SET_DATA: 'SET_DATA',
  SET_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING',
};


// Se busca disparar una accion, que setee el estado. El estado ya no se setea a mano, sino a partir de una acción.
/* Cuando el estado maneja datos primitivos, ie:
    const [counter, setCounter] = useState(0)
    Está bien usar useState.
    Pero cuando el estado depende de otros datos y se complejiza, conviene usar useReducer
*/
