import Image from 'next/image'
import HazelnutLatte from '/public/hazelnutlatte.png'

export default function Favorite() {
  return (
    <div className='favorite'>
      <div className='favorite-header text-center'>
        <div className='favorite-header-title rubik-600'>Here is People&apos;s Favorite</div>
        <div className='favorite-header-content rubik-400'>Let&apos;s choose and have a bit taste of poeple&apos;s favorite. It might be yours too!</div>
      </div>
      <div className='favorite-menu container'>
        <div className='favorite-menu-list text-center'>
          <div className='wrapper-photo-product'>
            <Image src={HazelnutLatte} alt='hazelnut-latte' className='img-fluid photo-product' />
          </div>
          <div className='name-product rubik-600'>Hazelnut Latte</div>
          <div className='composition'>
            <div className='composition-list'>
              <div className="bi bi-check-lg" />
              <div className='composition-list-text'>
                HazelnutSyrup
              </div>
            </div>
            <div className='composition-list'>
              <div className="bi bi-check-lg" />
              <div className='composition-list-text'>
                Wanilla Whipped Cream
              </div>
            </div>
            <div className='composition-list'>
              <div className="bi bi-check-lg" />
              <div className='composition-list-text'>
                Ice / Hot
              </div>
            </div>
            <div className='composition-list'>
              <div className="bi bi-check-lg" />
              <div className='composition-list-text'>
                Sliced Banana on Top
              </div>
            </div>
          </div>
          <div className='total-price rubik-700'>
            IDR 25.000
          </div>
          <button type="button" className="btn-price rubik-700">Order Now</button>
        </div>
        <div className='favorite-menu-list text-center'>
          <div className='wrapper-photo-product'>
            <Image src={HazelnutLatte} alt='hazelnut-latte' className='img-fluid photo-product' />
          </div>
          <div className='name-product rubik-600'>Hazelnut Latte</div>
          <div className='composition'>
            <div className='composition-list'>
              <div className="bi bi-check-lg" />
              <div className='composition-list-text'>
                HazelnutSyrup
              </div>
            </div>
            <div className='composition-list'>
              <div className="bi bi-check-lg" />
              <div className='composition-list-text'>
                Wanilla Whipped Cream
              </div>
            </div>
            <div className='composition-list'>
              <div className="bi bi-check-lg" />
              <div className='composition-list-text'>
                Ice / Hot
              </div>
            </div>
            <div className='composition-list'>
              <div className="bi bi-check-lg" />
              <div className='composition-list-text'>
                Sliced Banana on Top
              </div>
            </div>
          </div>
          <div className='total-price rubik-700'>
            IDR 25.000
          </div>
          <button type="button" className="btn-price rubik-700">Order Now</button>
        </div>
        <div className='favorite-menu-list text-center'>
          <div className='wrapper-photo-product'>
            <Image src={HazelnutLatte} alt='hazelnut-latte' className='img-fluid photo-product' />
          </div>
          <div className='name-product rubik-600'>Hazelnut Latte</div>
          <div className='composition'>
            <div className='composition-list'>
              <div className="bi bi-check-lg" />
              <div className='composition-list-text'>
                HazelnutSyrup
              </div>
            </div>
            <div className='composition-list'>
              <div className="bi bi-check-lg" />
              <div className='composition-list-text'>
                Wanilla Whipped Cream
              </div>
            </div>
            <div className='composition-list'>
              <div className="bi bi-check-lg" />
              <div className='composition-list-text'>
                Ice / Hot
              </div>
            </div>
            <div className='composition-list'>
              <div className="bi bi-check-lg" />
              <div className='composition-list-text'>
                Sliced Banana on Top
              </div>
            </div>
          </div>
          <div className='total-price rubik-700'>
            IDR 25.000
          </div>
          <button type="button" className="btn-price rubik-700">Order Now</button>
        </div>
      </div>
    </div>
  )
}