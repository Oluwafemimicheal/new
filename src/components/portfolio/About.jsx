import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FaGithub, FaStackOverflow } from "react-icons/fa";
import { useRef } from "react";
import { useScroll } from "../../util/useScroll";
import self from "../../assets/Me.png"
import WhyHire from './WhyHire';

const About = () => {
  const feature1 = useRef(null);
    const feature3 = useRef(null);
  
    useScroll([feature1], {
      origin: "left",
    });
    useScroll([feature3], {
      origin: "right",
    });
  return (
    <section className='max-w-6xl px-6 mx-auto pt-26 lg:pb-20' id='about'>
      <div className='h-auto mb-8 flex flex-col-reverse lg:flex-row justify-between items-center'>
        <div className='w-full lg:w-[60%] lg:mt-0 mt-16'  ref={feature1}>
          <h3 className='mb-3 text-2xl lg:text-4xl text-gray-700 font-semibold lg:leading-12 '>I'm Oluwafemi Michael, residing in Lagos, NG, Where I bring dynamic web project to life</h3>
          <p className='mb-5 text-lg text-gray-700'>With a deep passion for coding, I spend most of my day experimenting with HTML, CSS, and JavaScript, diving into its vast array of frameworks and libraries such as React, TypeScript, Next.js, as well as backend technologies like Node.js and Express.</p>
          <p className='text-lg text-gray-700'>Beyond my development work, I serve as an instructor, creating and teaching in-depth courses while helping students overcome real development challenges, with the goal of empowering aspiring developers to succeed.</p>
        </div>
        <div className='relative' ref={feature3}>
          <div className='w-80 h-80 rounded-lg -rotate-6 absolute bg-gray-200 overflow-hidden'></div>
          <div className='w-80 h-80 rounded-lg rotate-6 bg-gray-200 overflow-hidden'>
            <img src={self} alt="self" className='flex justify-center items-center sc' />
          </div>
          <div>
            <div className='mt-16 flex justify-between items-center gap-5'>
              <div className='w-max p-1 bg-gray-200 rounded-sm'>
                <FaGithub size={30} />
              </div>
              <div className='w-max p-1 bg-gray-200 rounded-sm'>
                <FaLinkedinIn size={30} />
              </div>
              <div className='w-max p-1 bg-gray-200 rounded-sm'>
                <FaXTwitter size={30} />
              </div>
              <div className='w-max p-1 bg-gray-200 rounded-sm'>
                <FaStackOverflow size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyHire />
    </section>
  )
}

export default About
