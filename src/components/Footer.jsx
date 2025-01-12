import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import pay from '../assets/Frame 8.png'
import Logo from '../assets/Logo.png'
import social from '../assets/Download App_.png'
import Heading from './Heading'
import { IoCallOutline ,IoMailOutline,IoLocationOutline} from "react-icons/io5";
import { FaTwitter,FaFacebookF,FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-gray-200 py-10'>
      <Container >
        <Flex className={'justify-between border-b  border-gray-400 '}>
                <div className="w-[297px]">
                        <Image ImgSrc={Logo} />
                        <Image ImgSrc={social} className={'pt-24'}/>
                        
                </div>
                <div className="w-[102px]">
                        <ul>
                                <li className='text-bgHColor font-rub font-medium text-[17px]'>Quick links 1</li>
                                <li className='text-bgPColor font-regular text-[14px] font-rub pt-2'>Home</li>
                                <li className='text-bgPColor font-regular text-[14px] font-rub pt-2'>Shop</li>
                                <li className='text-bgPColor font-regular text-[14px] font-rub pt-2'>About us</li>
                                <li className='text-bgPColor font-regular text-[14px] font-rub pt-2'>Blog</li>
                                <li className='text-bgPColor font-regular text-[14px] font-rub pt-2'>Detail Blog</li>
                        </ul>
                </div>
                <div className="w-[105px]">
                        <ul>
                                <li className='text-bgHColor font-rub font-medium text-[17px]'>Quick links 2</li>
                                <li className='text-bgPColor font-regular text-[14px] font-rub pt-2'>Favorites</li>
                                <li className='text-bgPColor font-regular text-[14px] font-rub pt-2'>Cart</li>
                                <li className='text-bgPColor font-regular text-[14px] font-rub pt-2'>Sign in</li>
                                <li className='text-bgPColor font-regular text-[14px] font-rub pt-2'>Register</li>
                                
                        </ul>
                </div>
                <div className="w-[270px]">
                        <ul>
                                <li className='text-bgHColor font-rub font-medium text-[17px]'>Contact us</li>
                                <Flex>
                                <IoCallOutline className='text-bgtColor pt-2 text-[23px]'/>
                                <li className='text-bgPColor font-regular text-[14px] font-rub pt-2'>1234 5678 90</li>
                                </Flex>
                                <Flex>
                                <IoMailOutline className='text-bgtColor pt-2 text-[23px]'/>
                                <li className='text-bgPColor font-regular text-[14px] font-rub pt-2'>Freshharvests@gmail.com</li>
                                </Flex>
                                <Flex>
                                <IoLocationOutline className='text-bgtColor pt-2 text-[23px]'/>
                                <li className='text-bgPColor font-regular text-[14px] font-rub pt-2'>Tanjung Sari Street, Pontianak, Indonesia</li>
                                </Flex>
                        </ul>
                        <Heading as='h4'text='Accepted Payment Methods:' className='font-rub font-medium text-[12px] pt-5 pl-2'/>
                        <Image ImgSrc={pay} className={'pt-6 pb-6'}/>
                </div>
        </Flex>
        <Flex className={'justify-between'}>
                <div className="w">
                    <Heading as={'h4'} text={'© Copyright 2024, All Rights Reserved by Banana Studio'} className='font-rub font-medium text-[12px] pt-5 pl-2'/>    
                </div>
                <Flex className={'pt-5 gap-x-4'}>
                <FaTwitter className='text-[32px] py-2 px-2 text-white bg-black rounded-full'/>
                <FaFacebookF className='text-[32px] py-2 px-2 text-white bg-black rounded-full'/>
                <FaInstagram className='text-[32px] py-2 px-2 text-white bg-black rounded-full'/>
                </Flex>
        </Flex>
      </Container>
    </div>
  )
}

export default Footer
