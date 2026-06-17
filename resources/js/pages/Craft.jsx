import React from 'react'
import PageMeta from '../components/common/PageMeta'
import Navbar from '../components/layout/navbar'
import Cutting from '../assets/img/cutting_cloth.jpg'
import { useState, useEffect } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const Craft = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setLoading(false)
    }
    img.onerror = () => setLoading(false);
    img.src = Cutting;
  }, []); 

  return (
    <main>
      <section>
            <PageMeta title="The Craft" description="Welcome to the fittora"></PageMeta>
            <header>
                <Navbar></Navbar>
            </header>
            <div className='grid grid-cols-1 lg:grid-cols-2 p-3 lg:p-5'>
              <div className="order-2 lg:order-1 p-5 lg:p-20">
                {loading ? (
                  <Skeleton className="h-65 lg:h-115 w-full" />
                ) : (
                  <img src={Cutting} className='w-full h-full' />
                )}
              </div>
              <div className="order-1 lg:order-2 p-5 lg:py-30">
                
                {loading ? (
                  <Skeleton className="h-30 w-full" />
                ) : (
                  <h1 className='text-2xl lg:text-3xl xl:text-6xl font-bold'>
                    Where Creativity Meets Precision
                  </h1>
                )}
                {loading ? (
                  <Skeleton className="w-full h-4 lg:h-4 my-7" />
                ) : (
                  <p className='my-5 font-light text-lg'>
                    Crafting exceptional products with attention to detail, innovation, and quality.
                  </p>
                )}
                
                {loading ? (
                  <Skeleton className="w-full h-40 my-7" />
                ) : (
                  <p className='font-light text-lg text-justify'>
                    Fittora Craft is built on the belief that great craftsmanship transforms ideas into meaningful experiences. 
                    Every product is thoughtfully designed and carefully created to deliver both functionality and aesthetic appeal. 
                    By combining skilled artistry with modern techniques, Fittora Craft ensures consistent quality and lasting value. 
                    Our commitment to excellence is reflected in every detail, making each creation a true representation of passion and precision.
                  </p>
                )}
              </div>
            </div>
        </section>
    </main>
  )
}

export default Craft;
