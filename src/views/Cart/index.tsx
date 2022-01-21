import React from 'react';
import { getCartList, getTotal, getCount } from "../../store/reducer"
import CartList from "../../components/CartList";
export default function Cart() {
  return (<div className="wrap-cart">
    <CartList list={CartList}></CartList>
  </div>)
}

const mapStateToProps = (state: any) => ({
  cartList: getCartList(state),
  total: getTotal(state),
  count: getCount(state)
})