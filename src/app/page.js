'use client'

import { useState } from 'react'
import Image from 'next/image'
import "./globals.css"

export default function Home() {
  const [bravo, setBravo] = useState(0)
  const handlerBravo = () => {
    setBravo(bravo + 1)
  }
  
  const [nama, setNama] = useState('Andi Ichwan Farmawan')
  const handlerTambahNama = () => {
    setNama('Ichwan')
  }

  return (
    <div className='body'>
      <div className='banner-container'>
        <div className='header-banner-wrapper'> 
          <div className='profile-header-banner'>
            <Image 
            src='/assets/profil.png'
            alt='picture'
            fill 
            objectFit='contain'
           />
          </div>
          <div className='content-header-banner'>
            <h1>{nama}</h1>
            <div className='bio-nim-header-banner'>
              <p>D121211025</p>
              <p>Bravo {bravo}, going dark </p>
            </div>
          </div>
        </div>
        <div className='cta-banner-wrapper'>
          <button onClick={handlerBravo}>
            <p>Halo !</p>
          </button>
          <button style={{marginTop:'12px'}} onClick={handlerTambahNama}>
            <p>Ganti Nama</p>
          </button>
        </div>
      </div>
    </div>
  )
}
