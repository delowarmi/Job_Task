import React from 'react'
import Navbar from './Navbar'
import Flex from './Flex'
import Heading from './Heading'
import Container from './Container'
import Button from './Button'
import Image from './Image'
import Women from '../assets/Women.png'
import Special from '../assets/Special Offer.png'
import social from '../assets/Download App_.png'
import Products from './Products'




const Banner = () => {
  return (
    <>
    <div className='bg-bannerImg bg-no-repeat bg-center bg-cover relative'>
        
        <Container>
        <Flex className={'pt-[100p]'}>
                <div className='relative py-[100px]'>
                <div className="w-[660px]">
                        <Heading as='h4' text='Welcome to Fresh Harvest' className='font-rub font-medium text-[20px] text-bgtColor'/>
                        <Heading as='h1' text='Fresh Fruits and Vegetables' className='font-rub font-medium text-[78px] text-bgHColor'/>
                        <Heading as='p' text='At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables' className='font-qus font-regular text-[14px] text-bgPColor pr-[180px]'/>
                        <Button btnText={'Shop Now'} className={'font-rub text-[18px] font-semibold bg-bgBColor rounded-lg py-2 px-4 mt-4'}/>
                </div>
                <div className='absolute'>
               <Image ImgSrc={Special} className={'pt-8 pl-[350px]'}/>
                </div>
                <div className='absolute'>
               <Image ImgSrc={social} className={'pt-48 pl-[100px]'}/>
                </div>
                </div>
                <div className="w-[695px] pl-[100px]">
                        <Image ImgSrc={Women} className={'pt-[300px] w-full'}/>
                </div>
        </Flex>


        </Container>
    </div>
    </>
  )
}

export default Banner
