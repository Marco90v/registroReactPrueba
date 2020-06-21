import { createStore } from "redux";

let datos = {datos: JSON.parse(localStorage.getItem('datos'))};
datos.datos = datos.datos === null ? [] : datos.datos;

const reducer = (state = datos, action)=> {
    switch (action.type) {
        case "Agregar_Usuario":
            action.u.ID = state.datos.length + 1;
            return{
                ...state,
                datos: state.datos.concat(action.u)
            }
        default:
            return state
    }
}

export default createStore(reducer)
