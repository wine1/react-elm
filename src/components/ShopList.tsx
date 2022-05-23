import React from 'react';
import { useState, useEffect } from 'react';

interface interfaceProps {
  list: any
}
const ShopList: React.FC<interfaceProps> = (props) => {
  useEffect(() => {
    let list = props.list
  }, [])

  return (<div>123</div>)
}
export default ShopList