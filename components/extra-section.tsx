import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const ExtraSection = () => {
    return (
        <>
            <section className=" relative grid grid-cols-2 max-md:grid-cols-1 max-m:grid-cols-1  gap-8 items-center px-12 bg-gray-100 py-16 ">
                <div className="space-y-6">
                    <h2 className="text-4xl  font-bold text-primary">
                        Celebrate Every Moment
                    </h2>
                    <svg width="150" height="80" xmlns="http://www.w3.org/2000/svg" className='absolute top-2 left-0'>
                        <circle cx="20" cy="10" r="3" stroke="#ff6b9d" strokeWidth="2" fill="#ff6b9d" />
                        <circle cx="50" cy="25" r="4" stroke="#ff6b9d" strokeWidth="2" fill="#ff6b9d" />
                        <circle cx="80" cy="40" r="3" stroke="#ff6b9d" strokeWidth="2" fill="#ff6b9d" />
                        <circle cx="110" cy="60" r="5" stroke="#ff6b9d" strokeWidth="2" fill="#ff6b9d" />
                    </svg>

                    <svg width="150" height="80" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 right-0'>
                        <circle cx="20" cy="10" r="3" stroke="#ff6b9d" strokeWidth="2" fill="#ff6b9d" />
                        <circle cx="50" cy="25" r="4" stroke="#ff6b9d" strokeWidth="2" fill="#ff6b9d" />
                        <circle cx="80" cy="40" r="3" stroke="#ff6b9d" strokeWidth="2" fill="#ff6b9d" />
                        <circle cx="110" cy="60" r="5" stroke="#ff6b9d" strokeWidth="2" fill="#ff6b9d" />
                    </svg>




                    <div className='relative'>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            From birthdays to quiet tea times, our cakes bring joy to life’s sweetest occasions.
                            Handcrafted with care and delivered fresh across the UK.
                        </p>

                    </div>
                    <Button className="bg-primary cursor-pointer hover:bg-primary/80 text-white rounded-LG px-6 py-3 text-md ">
                        <Link href="/cakes">
                            Order Now
                        </Link>
                    </Button>
                </div>
                <div className=" h-72 md:h-96 w-full">
                    <Image
                        src="/cut.jpg" // replace with your cake/lifestyle image
                        alt="Celebrate with cake"

                        width={200}
                        height={200}
                        className="object-cover w-[85%] rounded-2xl"
                    />
                </div>
            </section>
        </>
    )
}

export default ExtraSection
