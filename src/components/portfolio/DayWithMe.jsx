import React from 'react'

const DayWithMe = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold">Your first 7 days with me</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className='bg-gray-100 p-1 rounded-2xl shadow-sm'><p className="p-3">Day 1–2: Codebase understanding & quick fixes</p></div>
        <div className='bg-gray-100 p-1 rounded-2xl shadow-sm'><p className="p-3">Day 3–5: Deliver a useful feature</p></div>
        <div className='bg-gray-100 p-1 rounded-2xl shadow-sm'><p className="p-3">Day 6–7: Documentation & improvement suggestions</p></div>
      </div>
    </section>
  )
}

export default DayWithMe
