import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div></div>
    ) : (
      <div className="filter">
        <div className="filter-result">
          {this.props.filteredProducts.length} Products
        </div>
        <div className="filter-sort">
          Order{" "}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortProducts(this.props.products, e.target.value)
            }
          >
            <option value="latest">Latest Inventory</option>
            <option value="lowest">Price: Lowest to Highest</option>
            <option value="highest">Price: Highest to Lowest</option>
          </select>
        </div>
        {/* <div className="filter-size">
          Filter{" "}
          <select
            value={this.props.size}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value="">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div> */}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts,
    sortProducts,
  }
)(Filter);
