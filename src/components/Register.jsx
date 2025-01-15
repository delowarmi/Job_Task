import React from 'react'
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import { useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
const Register = () => {
const [hidden, setHidden] = useState(false);
  return (
      <div className=' relative'>
        {/* <OutsideClickHandler onOutsideClick ={() => { setHidden(false); }} > */}
                <Flex className={'items-center'}>
                 <div onClick={() => setHidden(!hidden)}>
                <Heading as={'h4'} text={" Sing Up "} className = 'font-rub font-semibold text-[14px] text-orange-600 cursor-pointer' onClick={() => setHidden(!hidden)} />
                </div>
                {hidden && (
                  <div className='bg-white  w-[400px] absolute right-[400px] top-[150px] rounded-md py-8 px-10 '>
                        <Heading as={'h4'} text={'Register'} className='font-rub font-semibold text-[32px] text-center'/>
                        <div className='pt-6'>
                        <label for="uname"><b className=' pl-3 text-bgHColor'>Full Name</b></label> <br/>
                        <input type="text" className='border border-InfoColor className mt-2 p-2 bg-white rounded-lg w-full' placeholder="Enter Your Name" name="uname"required></input>
                        </div>
                        <div className='pt-6'>
                        <label for="uname"><b className=' pl-3 text-bgHColor'>Email</b></label> <br/>
                        <input type="text" className='border border-InfoColor className mt-2 p-2 bg-white rounded-lg w-full' placeholder="Enter Your Email" name="uname"required></input>
                        </div>
                        <div className='pt-6 '>
                        <label for="uname"><b className='pl-3 pb-2 text-bgHColor'>Password</b></label> <br/>
                        <input type="text" className='border border-InfoColor className mt-2 p-2 bg-white rounded-lg w-full' placeholder="Enter Your Password" name="uname"required></input>
                        </div>
                        <Flex className={'justify-between pt-3'}>
                        <div>
                         <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" ></input>
                         <label for="vehicle1" className='font-dm font-regular text-[16px] text-InfoColor text-bgPColor'> Remember me</label> <br/></div>
                         <a href="#" className='underline font-rub font semibold text-[14px] text-bgPColor'>Forgot Password</a>
                        </Flex>
                        <button className='w-full rounded-lg border border-navColor py-[10px] px-[60px] mt-[20px] bg-orange-600 text-white'>Continue</button>
                        <div className='text-center pt-3'>
                                <Heading as={'p'} text={'Or Sign in with'} className={'text-bgPColor relative after:absolute after:w-[100px] after:h-[2px] after:bg-slate-500 after:top-[50%] after:left-0 before:absolute before:w-[100px] before:h-[2px] before:bg-slate-500 before:top-[50%] before:left-56'}/>
                                <Flex className={'justify-between mt-5'}>
                                        <Flex className={'gap-x-1  border border-bgPColor py-1 px-8 rounded-lg'}><FcGoogle className='pt-1 text-[22px]'/>
                                        <Heading as={'p'} text={'Google'} className='font-rub font-semibold text-[18px]'/>
                                        </Flex>
                                        <Flex className={'gap-x-2  border border-bgPColor py-1 px-5 rounded-lg'}><FaFacebookF className='mt-1 pt-1 text-[22px] py-1 px-1 bg-blue-600 rounded-full '/>
                                        <Heading as={'p'} text={'Facebook'} className='font-rub font-semibold text-[18px]'/>
                                        </Flex>
                                </Flex>
                                <div>
                                        <Flex className={'justify-center mt-3'}>
                                                <Heading as={'p'} text={'Don’t have an account?'} className='font-rub font-semibold text-[14px] text-bgHColor'/>
                                                <Link><Heading as={'p'} text={'Login'} className='font-rub font-semibold text-[14px] text-orange-600'/></Link>
                                        </Flex>
                                </div>
                                
                        </div>
                  </div>
                 )}
                </Flex>
        {/* </OutsideClickHandler> */}
    </div>
  )
}



export default Register
