import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const ExtraSection = () => {
    return (
        <>
            <section className=" relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-12 bg-gray-100 py-16 ">
                <div className="space-y-6">
                    <h2 className="text-4xl  font-bold text-[#8b0000]">
                        Celebrate Every Moment
                    </h2>
                    <svg width="150" height="80" xmlns="http://www.w3.org/2000/svg" className='absolute top-2 left-0'>

                        <circle cx="20" cy="10" r="3" stroke="red" stroke-width="2" fill="none" />


                        <circle cx="50" cy="25" r="4" stroke="red" stroke-width="2" fill="red" />


                        <circle cx="80" cy="40" r="3" stroke="red" stroke-width="2" fill="none" />


                        <circle cx="110" cy="60" r="5" stroke="red" stroke-width="2" fill="none" />
                    </svg>

                    <svg width="150" height="80" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 right-0'>

                        <circle cx="20" cy="10" r="3" stroke="red" stroke-width="2" fill="none" />


                        <circle cx="50" cy="25" r="4" stroke="red" stroke-width="2" fill="red" />


                        <circle cx="80" cy="40" r="3" stroke="red" stroke-width="2" fill="none" />


                        <circle cx="110" cy="60" r="5" stroke="red" stroke-width="2" fill="none" />
                    </svg>


                    <div className='relative'>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        From birthdays to quiet tea times, our cakes bring joy to life’s sweetest occasions.
                        Handcrafted with care and delivered fresh across the UK.
                    </p>
                    <svg width="150" height="50" xmlns="http://www.w3.org/2000/svg" className='absolute top-14 right-0'>
                        <circle cx="20" cy="30" r="4" stroke="red" stroke-width="2" fill="none"  />
                        <circle cx="60" cy="10" r="3" stroke="red" stroke-width="2" fill="none"  />
                        <circle cx="100" cy="30" r="3" stroke="red" stroke-width="2" fill="none"  />
                        <circle cx="130" cy="15" r="5" stroke="red" stroke-width="2" fill="none" />
                    </svg>
                    </div>
                    <Button className="bg-[#8b0000] cursor-pointer hover:bg-red-800 text-white rounded-LG px-6 py-3 text-md ">
                        <Link href="/cakes">
                            Order Now
                        </Link>
                    </Button>
                </div>
                <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden">
                    <Image
                        src="/cut.jpg" // replace with your cake/lifestyle image
                        alt="Celebrate with cake"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>
        </>
    )
}

export default ExtraSection
