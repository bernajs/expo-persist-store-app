import { combineReducers } from 'redux'
import categorias from './categorias_reducer'
import usuarios from './usuarios_reducer'

export default combineReducers({ categorias, usuarios })
