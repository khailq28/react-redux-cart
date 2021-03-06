import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import * as Messages from './../constants/Message'
import {actRemoveProductInCart, actChangeMessage, actUpdateProductInCart} from './../actions/index'

class CartContainer extends Component {
    render() {
        var { cart } = this.props
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props
        var result = <tr><td>{Messages.MSG_CART_EMPTY}</td></tr>
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    key={index}
                    item={item}
                    index={index}
                    onDeleteProductInCart={onDeleteProductInCart}
                    onChangeMessage={onChangeMessage}
                    onUpdateProductInCart={onUpdateProductInCart}
                />
            })
        }
        return result
    }

    showTotalAmount = (cart) => {
        var result = null
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result
    }
}

// PropType
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quanity: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actRemoveProductInCart(product))
        },
        onChangeMessage : message => {
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart: (product, quanity) => {
            dispatch(actUpdateProductInCart(product, quanity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
