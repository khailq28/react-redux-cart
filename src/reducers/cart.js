import * as types from './../constants/ActionType'

var data = JSON.parse(localStorage.getItem('CART'));

// var initialState = data ? data : []
var initialState = [
    {
        product: {
            id: 3,
            name: 'Oppo F1s',
            image: 'https://cdn.tgdd.vn/Products/Images/42/81592/oppo-f1s-7-300x300.jpg',
            description: 'Sản phẩm do china sản xuất',
            price: 400,
            inventory: 5,
            rating: 3
        },
        quanity: 5
    },
    {
        product: {
            id: 2,
            name: 'Samsung Galaxy S7',
            image: 'https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_s7_silver_han_600x600.jpg',
            description: 'Sản phẩm do samsung sản xuất',
            price: 450,
            inventory: 15,
            rating: 5
        },
        quanity: 2
    }
]

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            return [...state]
        default: return [...state]
    }
}

export default cart