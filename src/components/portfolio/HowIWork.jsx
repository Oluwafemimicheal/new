import React from 'react'

const HowIWork = () => {
  return (
    <section className='mt-10'>
      <div className="w-max">
        <h2 className="text-3xl text-gray-700 font-semibold">How I Work and Build</h2>
        <div className="mt-4 grid md:flex gap-3">
          {[
            "Understand the problem",
            "Design scalable solution",
            "Build & test",
            "Deliver & document",
          ].map((step) => (
            <div key={step}>
              <p className="text-gray-700 w-max">• {step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowIWork
