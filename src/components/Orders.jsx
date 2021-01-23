import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchOrders } from "../actions/orderActions";
import formatCurrency from "../util";
import BeatLoader from "react-spinners/BeatLoader";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const { orders } = this.props;
    return !orders ? (
      <div>
        {/* {" "}
        <BeatLoader size={15} margin={5} color={"green"} loading={true} /> */}
      </div>
    ) : (
      <div className="orders">
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>DATE </th>
              <th>TOTAL</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>SHIPPING ADDRESS</th>
              <th>ITEMS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <td>{index + 1}.</td>
                <td>{order._id}</td>
                <td>{order.createdAt}</td>
                <td>{formatCurrency(order.total)}</td>
                <td>
                  {order.firstName} {order.lastName}
                </td>
                <td>{order.email}</td>
                <td>
                  {order.address}, {order.postalCode}, {order.country}
                </td>
                <td>
                  {order.cartItems.map((item) => (
                    <div>
                      {item.count} {"x"} {item.title}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    orders: state.order.orders,
  }),
  {
    fetchOrders,
  }
)(Orders);
