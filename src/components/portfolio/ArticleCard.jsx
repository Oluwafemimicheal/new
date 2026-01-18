import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const ArticleCard = ({ date = "June 5, 2025", topic = "Learn Git and GitHub the Easy Way: A Beginner's Guide", articleBody = "A comprehensive guid to Git and GitHub for beginners. Learn essential Git command, branching, merging, collaboration, and GitHub workflows through clear explanations and practical examples." }) => {
  return (
    <div className='flex'>
      <small className='hidden lg:block lg:w-[20%] text-[15px] text-gray-600 lg:p-5'>{date}</small>
      <div className='w-max flex flex-col gap-3 cursor-pointer hover:bg-gray-200 p-5 rounded-2xl'>
        <h4 className='text-xl font-semibold'>{topic}</h4>
        <p className='lg:w-4/6'>{articleBody}</p>
        <button className='flex mt-2 cursor-pointer text-gray-600 items-center  gap-3'>Read article <FaChevronRight size={12} /></button>
      </div>
    </div>
  )
}

export default ArticleCard
