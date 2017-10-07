import { FETCH_CATEGORIAS } from '../actions/types'

// const INITIAL_STATE = { data: [] }

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIAS:
    return action.payload
      break;
    default: return state
  }
}
