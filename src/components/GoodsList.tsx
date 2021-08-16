
import React, { useState } from 'react';
import { connect } from 'react-redux'
import ProductItem from './ProductItem';
// import ProductItem from './ProductItem'

interface interProps {
    list: Array<any>,
}
const GoodsList = (props: interProps) => {
    let { list } = props
    console.log(list)
    // const [list, UpdateList] = useState(Array)
    return (
        <div className="component-goodlist">
            {!!list.length && list.map((item: any) =>
                <div key={item.id} className="li">
                    <div>{item.name}</div>
                    <ProductItem list={item.foods}></ProductItem>
                </div>)}
        </div>
    )
}

export default GoodsList