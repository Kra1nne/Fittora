import React from 'react'
import PageMeta from '../components/common/PageMeta'
import Navbar from '../components/layout/navbar'

const Craft = () => {
  return (
    <div>
      <main>
            <PageMeta title="About" description="Welcome to the fittora"></PageMeta>
            <header>
                <Navbar></Navbar>
            </header>
            
        </main>
    </div>
  )
}

export default Craft;
