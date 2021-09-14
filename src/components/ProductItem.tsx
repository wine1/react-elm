
import React from 'react';

const ProductItem = (props: any) => {
    let { name, description, specfoods, onAddToCartClicked } = props
    // console.log(123, onAddToCartClicked)
    return (
        <div>
            {/* {!!list?.length && list.map((item: any) => */}
            <div className="sub-li">
                <div>{name}</div>
                <div>{description}</div>
                {!!specfoods?.length && specfoods.map((item: any, index: number) =>
                    <div key={index}>{item.price}</div>)}
                <button onClick={onAddToCartClicked}>+1</button>
            </div>
            {/* )} */}
        </div>
    )
}

export default ProductItem