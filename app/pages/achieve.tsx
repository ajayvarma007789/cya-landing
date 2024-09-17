import React from 'react'
import ImageSlider from '@/components/ui/swiper'
function Achieve(){
    const img = [
        '/achievements/raju.webp',
        '/achievements/ashin.webp',
        '/achievements/raju.webp',
        '/achievements/ashin.webp',
        '/achievements/raju.webp',
    ]
  return (
    <div >
        <ImageSlider images={img} reverse={false}/>
    </div>
  )
}

export default Achieve