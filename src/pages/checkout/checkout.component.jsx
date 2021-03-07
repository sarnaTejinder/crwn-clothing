import React from 'react';
import './checkout.styles.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors'
import { Link } from 'react-router-dom';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.length ?
            cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))
            : <h3 className="muted-text">Your cart is empty.{' '}
                <Link to='/shop'>Shop here</Link>
            </h3>
        }
        <div className="total">Total: ${total}</div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    total: selectCartItemsTotal,
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CheckoutPage);