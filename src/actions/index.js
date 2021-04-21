import * as types from './../constants/ActionType'

export const actAddToCard = (product, quanity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quanity
    }
}