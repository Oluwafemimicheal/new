import { useRef } from "react";
import { useScroll } from "../../util/useScroll";
import ArticleCard from './ArticleCard'
import { div } from "framer-motion/client";

const Articles = () => {
  const feature1 = useRef(null);

  useScroll([feature1], {
    interval: 150,
    origin: "bottom",
    scale: 0.95,
  });
  
  
  return (
    <section className='article max-w-6xl px-6 mx-auto lg:pt-20 lg:pb-20' id="blog">
      <div className='h-auto'>
        <div className='lg:w-[60%] lg:mb-10'>
          <h3 className='mb-3 text-2xl lg:text-4xl text-gray-700 font-semibold lg:leading-12 '>Journey Through Code</h3>
          <p className='text-lg text-gray-700'>Exploring different language and frameworks, documenting my progress and discoveries, in chronological order</p>
        </div>
        <div className='lg:pl-5 lg:mt-0 mt-10 flex flex-col gap-6 border-l border-gray-400' ref={feature1}>
          {
            [1,2,3].map((index)=>(
              
              <ArticleCard key={index} />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Articles
