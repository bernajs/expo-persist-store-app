import { AGREGAR_USUARIO } from './types'

export const agregarUsuario = (usuario) => {
    return { type: AGREGAR_USUARIO, payload: usuario }
}