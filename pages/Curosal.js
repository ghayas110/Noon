import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Curosal() {
  return (
    <Carousel
    additionalTransfrom={0}
    arrows
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 7,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
      }
    }}
    showDots={false}
    sliderClass=""
    slidesToSlide={2}
    swipeable
  >
    <div>
    <img
          className="header__logos"
          src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png"
        width={100}/>
    </div>
   
    <div>
    <img
          className="header__logos"
          src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-17.png"
          width={100}/>
    </div>
    <div>
    <img
          className="header__logos"
          src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png"
          width={100}/>
    </div>
    <div>
    <img
          className="header__logos"
          src="https://k.nooncdn.com/cms/pages/20220506/9364cae56ee3e32b7d840bd4ea52b6bc/en_mb_uae-cat-26.png"
          width={100}/>
    </div>
    <div>
    <img
          className="header__logos"
          src="https://k.nooncdn.com/cms/pages/20220519/14758f75b4b4ea21bd847e526bad57f5/en_mb_uae-cat-04.png"
          width={100}/>
    </div>
    <div>
    <img
          className="header__logos"
          src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-01.png"
          width={100}/>
    </div>
    <div>
    <img
          className="header__logos"
          src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-23.png"
          width={100}/>
    </div>
    <div>
    <img
          className="header__logos"
          src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-01.png"
          width={100}/>
    </div>
    
  </Carousel>
  )
}

export default Curosal