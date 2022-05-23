import React, { FC } from 'react';
import { getCartList, getTotal, getCount } from "../../store/reducer"
import CartList from "../../components/CartList";
import { connect } from 'react-redux';
import cart from '../../store/reducer/cart';
const Cart: FC<{ cartList: [] }> = ({ cartList }) => {

  return (<div className="wrap-cart">
    <div className='page-title'>购物车</div>
    <CartList list={cartList}></CartList>
  </div>)
}

const mapStateToProps = (state: any) => ({
  cartList: getCartList(state),
  total: getTotal(state),
  count: getCount(state)
})
export default connect(mapStateToProps)(Cart)
