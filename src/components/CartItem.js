import React, { Component } from 'react';
import * as Messages from './../constants/Message'

class CartItem extends Component {

    render() {
        var {item} = this.props
        var { quanity } = item
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image} />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quanity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={()=>this.onUpdateQuantity(item.product, item.quanity - 1)}
                        >
                            <a>—</a>
                        </label>
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={()=>this.onUpdateQuantity(item.product, item.quanity + 1)}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.quanity)}$</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title data-original-title="Remove item"
                        onClick={() => {this.onDelete(item.product)}}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    showSubTotal = (price, quanity) => {
        return price * quanity
    }

    onDelete = product => {
        var {onDeleteProductInCart, onChangeMessage} = this.props
        onDeleteProductInCart(product)
        onChangeMessage(Messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }
    
    onUpdateQuantity = (product, quanity) => {
        var {onUpdateProductInCart, onChangeMessage} = this.props
        onUpdateProductInCart(product, quanity)
        onChangeMessage(Messages.MSG_UPDATE_CART_SUCCESS)
    }
}

export default CartItem;
