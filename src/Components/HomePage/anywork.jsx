import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import anyworkx from "../../Assets/images/anyworkx.png";
import mobile from "../../Assets/images/mobile.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Anywork = () => {
  return (
    <div>
      <div className=''>
        <h2 className='text-xl text-pry font-bold'>AnyWorkX</h2>
        <div className='flex items-center gap-2 my-2'>
          <AiOutlineArrowRight className='bg-black text-white rounded-full p-1' />
          <p className='text-base'>
            CONNECTING SERVICE PROVIDERS TO THEIR CUSTOMERS
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
          <AnimationOnScroll animateIn='animate__backInLeft'>
            <div className='bg-white p-8 rounded-md shadow-md h-fit'>
              <img src={anyworkx} className='w-48 mx-auto' alt='logo' />
              <hr className='border-gray-200 -mx-8 my-10 ' />
              <p className='font-light'>
                AnyworkX is set to boost Africa's service economy by creating a
                huge marketplace with endless possibilities for users . Service
                providers have the opportunity to earn additional income and
                flexibility to transact business anytime 24/7.
              </p>
            </div>
          </AnimationOnScroll>
          <div>
            <p className='p-4 rounded-md border-[1px] border-gray-400 font-light'>
              Get connected with service providers 24/7 from anywhere you are
            </p>
            <p className='p-4 rounded-md border-[1px] my-4 border-gray-400 font-light'>
              Make payment for services rendered through the in-App wallet
            </p>
            <p className='p-4 rounded-md border-[1px] my-4 border-gray-400 font-light'>
              Get More Customers Anytime, Anywhere with AnyworkX
            </p>
          </div>
          <AnimationOnScroll animateIn='animate__backInUp'>
            <img src={mobile} className='h-fit' alt='' />
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Anywork;
