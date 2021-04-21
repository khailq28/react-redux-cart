import * as Types from './../constants/ActionType'

export const actAddToCard = (product, quanity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quanity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}

export const actRemoveProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product, quanity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quanity
    }
}