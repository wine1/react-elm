
import React from 'react';

import { Button } from 'antd'
const ProductItem = (props: any) => {
    let { list } = props
    return (
        <div>
            {!!list?.length && list.map((item: any) =>
                <div className="sub-li" >
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                    {!!item.specfoods?.length && item.specfoods.map((item: any) =>
                        <div>{item.price}</div>)}
                    <Button>+1</Button>
                </div>
            )}</div>
    )
}

export default ProductItem