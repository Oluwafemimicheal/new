
const ArticleCard = ({ data }) => {
  return (
    <div className='flex'>
      <small className='hidden lg:block lg:w-[20%] text-[15px] text-gray-600 lg:p-5'>{data?.date}</small>
      <div className='w-max flex flex-col gap-3 cursor-pointer hover:bg-gray-200 p-5 rounded-2xl'>
        <h4 className='text-xl font-semibold'>{data?.topic}</h4>
        <p className='lg:w-4/6'>Technology: {data?.projectArchitecture}</p>
        <p className='lg:w-4/6'>Extras: {data?.extras}</p>
        <p className='lg:w-4/6'>Best Title: {data?.titleExample}</p>
        {/* <button className='flex mt-2 cursor-pointer text-gray-600 items-center  gap-3'>Read article <FaChevronRight size={12} /></button> */}
      </div>
    </div>
  )
}

export default ArticleCard
