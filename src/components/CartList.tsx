import React from 'react';
import { useState, useEffect } from 'react';

interface interfaceProps {
  list: any
}
const CartList: React.FC<interfaceProps> = (props) => {
  useEffect(() => {
    let list = props.list
    console.log(222, list)
  }, [])

  return (<div>123</div>)
}
export default CartList