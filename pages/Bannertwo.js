/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
const images = [
    { url: "https://k.nooncdn.com/cms/pages/20220520/8f9e4b2d2aa601f767b0b612c48be377/en_dk_uae-hero-01.jpg" },
    { url: "https://k.nooncdn.com/cms/pages/20220505/12c64234eb40d3716a7ac909a89df125/en_dk_uae-hero-01.png" },
    { url: "https://k.nooncdn.com/ads/banner-1008x1008/en_dk_uae-hero-01%20(58).1653053928.967762.png" },
    
  ];
  import SimpleImageSlider from "react-simple-image-slider";
function Bannertwo() {
  return (
   <div className='banner'>
       <div className='bannerleft'>
       <SimpleImageSlider
        width={928}
        height={200}
        images={images}
        showBullets={true}
        showNavs={true}
      />
       </div>
       <div bannerright>
       <img
          className="header__logos"
          src="https://static-cse.canva.com/blob/689497/mug2x.0c65afb0.avif"
         width={418}
         height={200}/>
       </div>
   </div>
  )
}

export default Bannertwo