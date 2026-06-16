import React from 'react'
import PageMeta from '../components/common/PageMeta'
import Navbar from '../components/layout/navbar'
import { useState, useEffect } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Tshirt from '../assets/img/shirt-men.jpg'
import Suit from '../assets/img/man-blue-suit.jpg'
import Pants from '../assets/img/beige-pants.jpg'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Card,
  CardFooter,
} from "@/components/ui/card"

const Collection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoading(false);
    };

    img.onerror = () => setLoading(false);
    img.src = Tshirt;
    img.src = Pants;
    img.src = Suit;

  }, []);

  return (
    <main>
        <PageMeta title="Collection" description="Welcome to the fittora"></PageMeta>
        <header>
            <Navbar></Navbar>
        </header>
        <div className='px-5 lg:px-10 xl:px-25 py-5'>
          <h1 className='py-2 font-bold text-4xl lg:text-5xl xl:text-6xl '>Crafted for Confidence</h1>
          <p className='py-3 text-md lg:text-lg text-justify font-light'>Discover our curated collection of premium tailored pieces designed for perfect fit, comfort, and timeless style.</p>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div>
                <Card className="relative w-full pt-0">
                  <div className="absolute " />
                  <div className='w-full h-120 overflow-hidden'>
                    <img
                    src={Suit}
                    alt="Event cover"
                    className="relative w-full object-cover"
                  />
                  </div>
                  <div className='px-3 md:px-5'>
                    <h2 className='font-bold text-md pb-2'>Classic Tailored Suit</h2>
                    <div className="text-justify" text-sm font-light>
                      A refined two-piece suit crafted from premium wool blend fabric, designed for a clean silhouette and professional look.
                    </div>
                  </div>
                  <CardFooter className="flex justify-center items-center">
                    <Button>View Collection</Button>
                  </CardFooter>
                </Card>
            </div>
             <div>
                <Card className="relative w-full pt-0">
                  <div className="absolute " />
                  <div className='w-full h-120 overflow-hidden'>
                    <img
                    src={Tshirt}
                    alt="Event cover"
                    className="relative w-full object-cover"
                  />
                  </div>
                  <div className='px-3 md:px-5'>
                    <h2 className='font-bold text-md pb-2'>Slim Fit Formal Shirt</h2>
                    <div className="text-justify text-sm font-light">
                     A breathable, soft cotton shirt tailored for a modern slim fit—perfect for office wear or lgart casual occasions.
                    </div>
                  </div>
                  <CardFooter className="flex justify-center items-center">
                    <Button>View Collection</Button>
                  </CardFooter>
                </Card>
            </div>
             <div >
                <Card className="relative w-full pt-0">
                  <div className="absolute " />
                  <div className='w-full h-120 overflow-hidden'>
                    <img
                    src={Pants}
                    alt="Event cover"
                    className="relative w-full object-cover"
                  />
                  </div>
                  <div className='px-3 md:px-5'>
                    <h2 className='font-bold text-md pb-2'>Custom Tailored Trousers</h2>
                    <div className="text-justify text-sm font-light">
                     Precision-cut trousers made with durable yet comfortable fabric, offering flexibility, style, and all-day comfort.
                    </div>
                  </div>
                  <CardFooter className="flex justify-center items-center">
                    <Button>View Collection</Button>
                  </CardFooter>
                </Card>
            </div>
          </div>
        </div>
        
    </main>
  )
}

export default Collection
