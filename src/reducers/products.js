
var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung Galaxy S7',
        image: 'https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_s7_silver_han_600x600.jpg',
        description: 'Sản phẩm do samsung sản xuất',
        price: 450,
        inventory: 15,
        rating: 5
    },
    {
        id: 3,
        name: 'Oppo F1s',
        image: 'https://cdn.tgdd.vn/Products/Images/42/81592/oppo-f1s-7-300x300.jpg',
        description: 'Sản phẩm do china sản xuất',
        price: 400,
        inventory: 5,
        rating: 3
    }
]

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state]
    }
}

export default products