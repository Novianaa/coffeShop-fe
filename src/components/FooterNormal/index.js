import Image from 'next/image'
import Logo from '/public/coffee1.svg'

export default function Home() {
  return (
    <>
      <div className='footer-normal'>
        <div className='wrapper-footer-normal container'>
          <div className='wrapper-footer-left'>
            <div className='footer-left-header'>
              <Image src={Logo} alt='logo' />
              <div className='footer-left-title rubik-600 '>Coffee Shop</div>
            </div>
            <div className='footer-left-content rubik-400'>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</div>
            <div className='wrapper-sns'>
              <button type='button' className='wrapper-icon-sns'>
                <div className='bi bi-facebook icon-sns' />
              </button>
              <button type='button' className='wrapper-icon-sns'>
                <div className='bi bi-twitter icon-sns' />
              </button>
              <button type='button' className='wrapper-icon-sns'>
                <div className='bi bi-instagram icon-sns' />
              </button>
            </div>
            <div className='closing rubik-400'>
              ©2020CoffeeStore
            </div>
          </div>
          <div className='footer-right'>
            <div className='wrapper-footer-product'>
              <div className='wrapper-footer-header rubik-600'>
                Product
              </div>
              <div className='footer-sub-menu'>
                <div className='sub-menu-list rubik-400'>Download</div>
                <div className='sub-menu-list rubik-400'>Pricing</div>
                <div className='sub-menu-list rubik-400'>Locations</div>
                <div className='sub-menu-list rubik-400'>Countries</div>
                <div className='sub-menu-list rubik-400'>Blog</div>
              </div>
            </div>
            <div className='wrapper-footer-engage'>
              <div className='wrapper-footer-header rubik-600'>
                Engage
              </div>
              <div className='footer-sub-menu'>
                <div className='sub-menu-list rubik-400'>Coffee Shop</div>
                <div className='sub-menu-list rubik-400'>FAQ</div>
                <div className='sub-menu-list rubik-400'>About Us</div>
                <div className='sub-menu-list rubik-400'>Privacy Policy</div>
                <div className='sub-menu-list rubik-400'>Terms of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}