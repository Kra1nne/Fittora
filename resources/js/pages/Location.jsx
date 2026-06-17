import React from 'react'
import PageMeta from '../components/common/PageMeta'
import Navbar from '../components/layout/navbar'
import { Map, MapControls, MapMarker, MarkerLabel, MarkerContent, MarkerTooltip } from "@/components/ui/map"
import { Card } from "@/components/ui/card"
//import { useState, useEffect } from 'react'

const Location = () => {
  // const [position, setPosition] = useState(null);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     setPosition(pos);
  //   });
  // }, []);
  // if (!position) {
  //   return <div>Getting your location...</div>;
  // }

  //const start = {name: "Location", lng: position.coords.longitude, lat: position.coords.latitude }
  const end = {name: "Fittora",lng: 124.9827, lat: 10.3865}
  return (
    <main>
        <PageMeta title="Location" description="Welcome to the fittora"></PageMeta>
        <header>
            <Navbar></Navbar>
        </header>
        <section className='grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-10'>
          <div className='order-2 lg:order-1'>
            <Card className="h-140 p-2 shadow-xl overflow-hidden">
              <Map center={[124.9827, 10.3865]} zoom={11}>
                <MapControls 
                position="top-right"
                showZoom
                showCompass
                showLocate
                showFullscreen
                />
                <MapMarker longitude={end.lng} latitude={end.lat}>
                  <MarkerContent>
                    <div className="size-5 rounded-full bg-red-500 border-2 border-white shadow-lg" />
                    <MarkerLabel className="text-primary font-bolder" position="center">{end.name}</MarkerLabel>
                    <MarkerTooltip>{end.name}</MarkerTooltip>
                  </MarkerContent>
                </MapMarker>
                 {/* <MapMarker longitude={start.lng} latitude={end.lat}>
                  <MarkerContent>
                    <div className="size-5 rounded-full bg-red-500 border-2 border-white shadow-lg" />
                    <MarkerLabel className="text-primary font-bolder" position="center">{start.name}</MarkerLabel>
                    <MarkerTooltip>{start.name}</MarkerTooltip>
                  </MarkerContent>
                </MapMarker> */}
              </Map>
            </Card>
          </div>
          <div className='lg:px-10 p-5 order-1 lg:order-2 flex flex-col justify-center'>
            <h1 className='text-5xl lg:text-6xl font-semibold mb-6'>
              Get in Touch with Us
            </h1>

            <p className='text-gray-600 text-lg leading-relaxed mb-6'>
              We'd love to hear from you. Whether you need custom tailoring,
              alterations, wedding attire, corporate uniforms, or have questions
              about our services, our team is ready to assist you.
            </p>

            <div className='space-y-4 mb-8'>
              <div>
                <h3 className='font-semibold text-xl'>Address</h3>
                <p className='text-gray-600'>
                  Elegant Stitch Tailoring Shop, Sogod, Southern Leyte, Philippines
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-xl'>Phone</h3>
                <p className='text-gray-600'>+63 912 345 6789</p>
              </div>

              <div>
                <h3 className='font-semibold text-xl'>Email</h3>
                <p className='text-gray-600'>info@elegantstitch.com</p>
              </div>

              <div>
                <h3 className='font-semibold text-xl'>Business Hours</h3>
                <p className='text-gray-600'>
                  Monday - Saturday: 8:00 AM - 6:00 PM
                </p>
                <p className='text-gray-600'>
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Location;
