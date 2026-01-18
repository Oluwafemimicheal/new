import PryBtn, { SecBtn } from '../Button'
import { useRef } from "react";
import { useScroll } from "../../util/useScroll";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaAngular, FaBootstrap, FaNodeJs, FaGithub, FaStackOverflow } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress, SiMongodb, SiRedis } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import IconWrapper from './IconWrapper';
import self from "../../assets/myself.jpg"
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


const Hero2 = () => {
  const feature1 = useRef(null);
  const feature2 = useRef(null);
  const feature3 = useRef(null);

  useScroll([feature1, feature2], {
    origin: "left",
  });
  useScroll([feature3], {
    origin: "right",
  });

  return (
    <div className='flex h-screen overflow-x-hidden relative' id='home'>
      <div className=' px-5 lg:px-0 flex justify-start items-center bg-gray-800 w-full lg:w-[70%] h-full'>
        <button
          onClick={() => window.scrollBy({ top: 650, behavior: "smooth" })}
          className="absolute bottom-1 left-3/6 flex items-center justify-center py-1 px-0 rounded-xl border-2 border-gray-500 text-white  transition animate-bounce cursor-pointer"
          aria-label="Scroll Down"
        >
          <MdOutlineKeyboardDoubleArrowDown  size={22}/>
        </button>
        <div className='lg:w-5/6 mx-auto flex flex-col gap-3 items-center lg:items-start' ref={feature1}>
          <div className='flex items-center gap-1 bg-gray-500 p-1 pr-3 rounded-2xl' >
            <div className='w-8 h-8 rounded-full overflow-hidden'>
              <img src={self} alt="self" className='flex justify-center items-center' />
            </div>
            <h3 className='text-md text-gray-800 font-bold'>I'm Oluwafemi Michael</h3>
          </div>
          <div
            className='text-3xl text-center lg:text-left lg:text-6xl font-extrabold text-gray-300'>Software Developer, Instructor and Coding Hit</div>
          <p
            
            className="text-xl text-center lg:text-left lg:w-5/6 mt-3 leading-8 text-gray-400"
          >
            I build production-ready software that removes bottlenecks and delivers results, and most practical way to learn anything.
          </p>

          <div>
            <div className="inline-flex gap-5 items-center mt-5 text-gray-400" ref={feature2}>
              <PryBtn text='Hire Me' />
              <SecBtn text='Need a Project Support' />
            </div>
            <div className='mt-7 flex justify-center lg:justify-start items-center gap-5'>
              <div className='w-max p-1 bg-gray-400 rounded-sm'>
                <FaGithub size={20} />
              </div>
              <div className='w-max p-1 bg-gray-400 rounded-sm'>
                <FaLinkedinIn size={20} />
              </div>
              <div className='w-max p-1 bg-gray-400 rounded-sm'>
                <FaXTwitter size={20} />
              </div>
              <div className='w-max p-1 bg-gray-400 rounded-sm'>
                <FaStackOverflow size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block bg-gray-800  w-[40%]'>
        <div className='flex justify-center items-center text-5xl h-full pr-10 relative text-gray-500' ref={feature3}>
          <IconWrapper icon={<FaHtml5 />} position={"top-45 left-10"} />
          <IconWrapper icon={<FaCss3 />} position={"top-30 left-55"} />
          <IconWrapper icon={<TbBrandJavascript />} position={"bottom-20 right-30"} />
          <IconWrapper icon={<FaNodeJs />} position={"bottom-20 left-35"} />
          <IconWrapper icon={<SiExpress />} position={"bottom-48 right-10"} />
          <IconWrapper icon={<RiTailwindCssFill />} position={"top-65 right-30"} />
          <IconWrapper icon={<SiMongodb />} position={"top-65 left-30"} />
          <IconWrapper icon={<BiLogoPostgresql />} position={"top-45 right-10"} />
          <IconWrapper icon={<IoLogoReact />} position={"bottom-50 right-50"} />
          <IconWrapper icon={<FaAngular />} position={"bottom-50 left-10"} />
        </div>

        </div>
        
    </div>
  )
}

export default Hero2
