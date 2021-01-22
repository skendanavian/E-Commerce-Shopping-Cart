import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { createOrder, clearOrder } from "../actions/orderActions";
import shoppingCart from "../images/shoppingCart.png";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckout: false,
      firstName: "",
      lastName: "",
      address: "",
      postalCode: "",
      country: "",
      email: "",
    };
  }

  handleCheckout = () => {
    this.setState({ showCheckout: true });
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value.toString() });
  };

  createOrder = (e) => {
    e.preventDefault();
    const order = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      address: this.state.address,
      postalCode: this.state.postalCode,
      country: this.state.country,
      cartItems: this.props.cartItems,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
  };
  closeModal = () => {
    this.props.clearOrder();
  };
  render() {
    const { cartItems, order } = this.props;
    return (
      <div>
        <div className="cart cart-header">
          <img src={shoppingCart} alt="shopping cart"></img>
          <div>Checkout</div>
        </div>

        {order && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                X
              </button>
              <div className="order-details">
                <h3 className="success-message">Your Order Has Been Placed!</h3>
                <h2>Order {order._id}</h2>
                <ul>
                  <li>
                    <div>Name:</div>
                    <div>
                      {order.firstName} {order.lastName}
                    </div>
                  </li>
                  <li>
                    <div>Email:</div>
                    <div>{order.email}</div>
                  </li>
                  <li>
                    <div>Address:</div>
                    <div>
                      {order.address} <br /> {order.postalCode} <br />{" "}
                      {order.country}
                    </div>
                  </li>
                  <li>
                    <div>Total Cost:</div>
                    <div>{formatCurrency(order.total)}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                      {order.cartItems.map((x) => (
                        <div>
                          {x.count} {"x"} {x.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}
        <div>
          <div className="cart">
            <ul className="cart-items">
              <div className="cart-count">
                {cartItems.length === 1
                  ? `You have ${cartItems.length} item in your cart`
                  : cartItems.length === 0
                  ? `Cart is empty`
                  : `You have ${cartItems.length} items in your cart`}{" "}
              </div>
              {cartItems.map((item) => (
                <Fade left cascade>
                  <li key={item._id}>
                    <div>
                      <img src={item.image} alt={item.title}></img>
                    </div>
                    <div>
                      <div>{item.title}</div>
                      <div className="right">
                        {formatCurrency(item.price)} x {item.count}
                        {"  "}
                        <button
                          className="button remove-button"
                          onClick={() => {
                            this.props.removeFromCart(item);
                            if (cartItems.length === 1) {
                              this.setState({ showCheckout: false });
                            }
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                </Fade>
              ))}
            </ul>
          </div>

          {cartItems.length !== 0 && (
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <button
                  onClick={() => this.handleCheckout()}
                  className="button button-primary"
                >
                  Proceed
                </button>
              </div>
            </div>
          )}
          {this.state.showCheckout && cartItems.length !== 0 && (
            <Fade right cascade>
              <div className="cart">
                <form onSubmit={this.createOrder}>
                  <ul className="form-container">
                    <li>
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>First Name</label>
                      <input
                        name="firstName"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Last Name</label>
                      <input
                        name="lastName"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Shipping Address</label>
                      <input
                        name="address"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Postal Code</label>
                      <input
                        name="postalCode"
                        type="text"
                        maxlength="7"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Country</label>
                      <input
                        name="country"
                        type="text"
                        onChange={this.handleInput}
                        required
                      ></input>
                    </li>
                    <li>
                      <button type="submit" className="button-primary">
                        Checkout
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </Fade>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
  }),
  { removeFromCart, createOrder, clearOrder }
)(Cart);
