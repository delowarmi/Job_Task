import Image from '../components/Image'
import Heading from './Heading'
import Flex from './Flex'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Product = ({imgSrc,Prize,addtocart,weght}) => {

  let [all,setAll] = useState([])
  useEffect(()=>{
    async function all(){
      let data = await axios.get( 'https://dummyjson.com/products' );
      setAll(data.data.products);
      //  console.log(data);
    }
      all()  
  },[])

  return (
    <>
    {
      all.map(item=>(

    <>
    <div className="w-[24%] text-center bg-gray-200 rounded-lg py-3 mt-4">
    <Image ImgSrc={item.images} className={'ml-[17px]'}/>
    <Heading as={'p'} text={item.title} className='font-rub font-medium text-[18px] text-bgHColor'/>
    <Heading as={'p'} text ={item.price} className='font-qus font-regular text-[18px] text-bgPColor'/>
    <Heading as={'p'} text={addtocart} className='font-rub font-regular text-bgHColor text-[18px] w-[80%] py-1 px-3 border border-bgPColor mx-auto rounded-lg group hover:bg-orange-500 hover:text-white'/>
    
    </div>
    
    </>

      ))
    }


    
    </>
  )
}

export default Product
