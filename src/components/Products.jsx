import React from 'react'
import Product from './Product'
import orange from '../assets/Orange.png'
import mustrd from '../assets/mastard.png'
import Flex from './Flex'

const Products = () => {
  return (
    <div className=''>
        <Flex className={'justify-between pt-12 flex-wrap '}>
        <Product
        imgSrc={orange}
        tittle='Orange'
        Prize='12$'
        weght='/kg'
        addtocart='Add To Cart'
        />
        <Product
        imgSrc={orange}
        tittle='Orange'
        Prize='12$'
        weght='/kg'
        addtocart='Add To Cart'
        />
        <Product
        imgSrc={mustrd}
        tittle='Mustard'
        Prize='12$'
        weght='/kg'
        addtocart='Add To Cart'
        />
        <Product
        imgSrc={orange}
        tittle='Orange'
        Prize='12$'
        weght='/kg'
        addtocart='Add To Cart'
        />
      </Flex>
    </div>
  )
}

export default Products
