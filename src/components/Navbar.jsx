import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Logo from '../assets/Logo.png'
import Button from './Button'
import { Link } from 'react-router-dom'
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import Heading from './Heading'

const Navbar = () => {
  return (
    <div className='bg-NavImg bg-no-repeat bg-cover bg-center py-2  top-0 z-10 sticky  '>
        <Container >
                <Flex className={'justify-start sticky top-0 pt-3'}>
                        <div className="w-[30%] ">
                        <Image ImgSrc={Logo} className={'w-[200px]'}/>
                        </div>
                        <div className="w-[50%] ">
                                <ul className='font-regular text-[14px] font-qus text-bgPColor'>
                                        <Flex className={'justify-start gap-x-12 '}>
                                                <Link to='/' className='relative after:absolute after:hover:w-4 after:hover:h-[3px] after:hover:bg-bgtColor after:hover:left-2 '><li>Home</li></Link>
                                                <Link to='/shop' className='relative after:absolute after:hover:w-4 after:hover:h-[3px] after:hover:bg-bgtColor after:hover:left-2 '><li>Shop</li></Link>
                                                <Link to='/about'className='relative after:absolute after:hover:w-4 after:hover:h-[3px] after:hover:bg-bgtColor after:hover:left-4 '><li>About us</li></Link>
                                                <Link to='/blog'className='relative after:absolute after:hover:w-4 after:hover:h-[3px] after:hover:bg-bgtColor after:hover:left-1 '><li>Blog</li></Link>
                                        </Flex>
                                </ul>
                        </div>
                        <div className="w-[20%] bg-transparent ">
                                <Flex className={'justify-start gap-x-2'}>
                                        <div className="w-[35%]">
                                                <Flex className={'gap-x-2'}>
                                                <FaHeart className='text-white  '/>
                                                <Heading as={'p'} text={'Favorites'} className='text-white font-qus text-[14px] font-regular '/>
                                                </Flex>
                                        </div>
                                        <div className="w-[25%]">
                                        <Flex className={'justify-center gap-x-2'}>
                                                <FaShoppingCart className='text-white'/>
                                                <Heading as={'p'} text={'Cart'} className='text-white font-qus text-[14px] font-regular'/>
                                        </Flex>
                                        </div>
                                        <div className="w-[40%]">
                                        <Button btnText={'Sine In'} className={'text-white text-[14px] border border-b-gray-300 rounded-md translate-y-[-50%] ml-2 mt-3 pl-2 pr-2'}/>
                                        </div>
                                </Flex>
                        </div>
                </Flex>
        </Container>
    </div>
  )
}

export default Navbar


