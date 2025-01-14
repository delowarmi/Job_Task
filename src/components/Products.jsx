import React from 'react'
import Product from './Product'
import orange from '../assets/Orange.png'
import mustrd from '../assets/mastard.png'
import Flex from './Flex'

const Products = () => {
  return (
    <div>
        <Flex className={'justify-between pt-12 flex-wrap '}>
        <Product addtocart={'Add To Cort'}/>
        <Product addtocart={'Add To Cort'}/>
        <Product addtocart={'Add To Cort'}/>
        <Product addtocart={'Add To Cort'}/>
      </Flex>
    </div>
  )
}

export default Products
