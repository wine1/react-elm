
import React from 'react';
import { connect } from 'react-redux'
import ProductItem from './ProductItem';
import { addToCart } from '../store/action/index'
interface interProps {
    list: Array<any>,
    addToCart: any
}
const GoodsList = (props: interProps) => {
    let { list, addToCart } = props
    console.log('list', list)
    return (
        <div className="component-goodlist">
            {!!list.length && list.map((item: any) =>
                <div key={item.id} className="li">
                    <div>{item.name}</div>

                    {!!item.foods?.length && item.foods.map((item: any) => {
                        return <div key={item.item_id}>
                            <ProductItem name={item.name} description={item.description} specfoods={item.specfoods} onAddToCartClicked={() => addToCart(item.restaurant_id, item.specfoods[0])}></ProductItem>
                        </div>
                    })}
                </div>)}
        </div>
    )
}
const mapStateToProps = (state: any) => ({
})
export default connect(
    mapStateToProps,
    { addToCart }
)(GoodsList)