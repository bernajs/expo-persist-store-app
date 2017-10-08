import { AGREGAR_USUARIO } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case AGREGAR_USUARIO:
      return [...state, action.payload];
      break;
    default:
      return state;
      break;
  }
}
