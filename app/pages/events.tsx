import React from 'react'
import ImageSlider from '@/components/ui/swiper'
export function Events() {
    const img = [
        '/events/figmafusion.jpeg',
        '/events/imposterinvasion.jpeg',
        '/events/linuxshellessentials.jpeg',
        '/events/pixelconquest.jpeg',
        '/events/techtrivia.jpeg',
        '/events/virtual vanguard.jpeg',
        
    ]
  return (
    <div >
        <ImageSlider images={img} reverse={false}/>
    </div>
  )
}

export default Events