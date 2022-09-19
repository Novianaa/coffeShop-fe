import Image from 'next/image'
import Slider from "react-slick";
import Logo from '/public/coffee1.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className='container review'>
      <div className='review-title'>
        <div className='review-header rubik-600'>Loved by Thousands of Happy Customer</div>
        <div className='review-header-sub rubik-400'>These are the stories of our customers who have visited us with great pleasure.</div>
      </div>
      <Slider {...settings}>
        <div className="card-review rubik-400">
          <div className="card-review-header d-flex">
            <Image src={Logo} alt='photo-profile' />
            <div className="detail-profile">
              <div className="name-user">a</div>
              <div className="loc-user">indonesia</div>
            </div>
          </div>
          <div className="review-content">
            “Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!“
          </div>
        </div>
        <div className="card-review rubik-400">
          <div className="card-review-header d-flex">
            <Image src={Logo} alt='photo-profile' />
            <div className="detail-profile">
              <div className="name-user">a</div>
              <div className="loc-user">indonesia</div>
            </div>
          </div>
          <div className="review-content">
            “Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!“
          </div>
        </div>
        <div className="card-review rubik-400">
          <div className="card-review-header d-flex">
            <Image src={Logo} alt='photo-profile' />
            <div className="detail-profile">
              <div className="name-user">a</div>
              <div className="loc-user">indonesia</div>
            </div>
          </div>
          <div className="review-content">
            “Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!“
          </div>
        </div>
        <div className="card-review rubik-400">
          <div className="card-review-header d-flex">
            <Image src={Logo} alt='photo-profile' />
            <div className="detail-profile">
              <div className="name-user">a</div>
              <div className="loc-user">indonesia</div>
            </div>
          </div>
          <div className="review-content">
            “Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!“
          </div>
        </div>
      </Slider>
    </div>
  )
}