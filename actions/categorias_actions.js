import axios from 'axios'

import { FETCH_CATEGORIAS } from './types'

export const fetch_categorias = () => async (dispatch) => {
  let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  dispatch({ type: FETCH_CATEGORIAS, payload: data })
}

// export function fetch_categorias(dispatch) {
//   axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
//     dispatch({ type: FETCH_CATEGORIAS, payload: reponse.result })
//   })
// }
