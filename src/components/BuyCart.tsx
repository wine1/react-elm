
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addToCart, clearCart } from "../store/action"
import { getCartList, getTotal, getCount } from "../store/reducer"
import { Button, Badge } from 'antd-mobile';
import classNames from 'classnames';
import { Route, useHistory } from 'react-router-dom';
import CartList from './CartList'


const BuyCart = (props: any) => {
    let { cartList, total, count, clearCart } = props
    const [showList, setShowList] = useState(false)
    const history = useHistory()

    const toggleShowList = () => {
        if (cartList.length) {
            setShowList(!showList)
        }
    }
    /** 去购物车 */
    const GoToCart = () => {
        history.push('./cart')
    }


    return (
        <div className="component-cart">
            <div className={classNames('cartlist-layer', { [`hide`]: !showList || !cartList.length })}></div>
            <div className={classNames('cartlist-ul', { [`hide`]: !showList || !cartList.length })}>
                <div className="cartlist-title">
                    <span>已选商品</span>
                    <Button onClick={clearCart}>清空</Button>
                </div>
                <CartList list={cartList}></CartList>
            </div>

            <div className="wrap-cart-icon ele_car_icon" onClick={toggleShowList}>
                <svg className="icon icon-cart" aria-hidden="true">
                    <use xlinkHref="#icon-cart"></use>
                </svg>
                <Badge className="icon-badge" text={count} hot style={{ marginLeft: 12 }} />

            </div>

            {!cartList?.length && <div>buy someting to eat</div>}
            <div>{total}</div>
            <Button inline size="small" style={{ marginRight: '4px', padding: '10px', }} onClick={GoToCart}>{total ? '去结算' : '购物车'}</Button>
        </div >
    )
}



const mapStateToProps = (state: any) => ({
    cartList: getCartList(state),
    total: getTotal(state),
    count: getCount(state)
})


export default connect(mapStateToProps, { clearCart })(BuyCart)
