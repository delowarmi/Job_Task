import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import Button from './Button'
import Product from './Products'
import orange from '../assets/Orange.png'
import mastrd from '../assets/mastard.png'
import Products from './Products'


const OurAllProduct = () => {
  return (
    <div className='py-[100px]'>
    <Container >
        <div className="w-[467px] mx-auto text-center">
                <Heading as={'h3'} text={'Our Products'} className='font-rub font-medium text-[20px] text-bgtColor'/>
                <Heading as={'h1'} text={'Our Fresh Products'} className='font-rub font-medium text-[48px] text-bgHColor'/>
                <Heading as={'p'} text={'We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.'} className='font-qus font-regular text-[14px] text-bgPColor'/>

                <Flex className={'justify-between mt-6'}>
                        <Button btnText={'All'} className={'font-rub font-regular text-[18px] text-btColor py-1 px-6 border border-b-gray-500 rounded-lg group hover:bg-bgtColor hover:text-white'}/>
                        <Button btnText={'Fruits'} className={'font-rub font-regular text-[18px] text-btColor py-1 px-6 border border-b-gray-500 rounded-lg group hover:bg-bgtColor hover:text-white'}/>
                        <Button btnText={'Vegetables'} className={'font-rub font-regular text-[18px] text-btColor py-1 px-6 border border-b-gray-500 rounded-lg group hover:bg-bgtColor hover:text-white'}/>
                        <Button btnText={'Salad'} className={'font-rub font-regular text-[18px] text-btColor py-1 px-6 border border-b-gray-500 rounded-lg group hover:bg-bgtColor hover:text-white'}/>
                        
                </Flex>     
        </div> 

        <Products/>
    </Container>
    </div>
  )
}

export default OurAllProduct
