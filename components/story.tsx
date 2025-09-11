import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const story = () => {
  return (
    <>
        <section className="px-6  flex justify-center flex-col bg-white h-[60vh] text-center "
        style={{ backgroundImage: "url('/ban.png')", background: "cover", backgroundPosition:"bottom" }}
        >
        
     
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Story
        </h2>
        <p className="text-white max-w-2xl mx-auto text-lg leading-relaxed">
          What began as a small kitchen in 2015 has grown into a beloved UK bakery. 
          Every cake we make carries our tradition of passion, craft, and joy.
        </p>
        <div className=''>

        <Button variant="outline" className="mt-6  text-white border-none bg-[#8b0000] hover:bg-red-800 hover:text-white rounded-lg px-6 py-3 text-md cursor-pointer">
         <Link href="/about">
          Read More
         </Link>
        </Button>
        </div>
      </section>
    </>
  )
}

export default story
