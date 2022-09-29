import styles from '../../styles/Product.module.css'

export default function SidePromo() {
  return (
    <>
      <div className={`${styles['wrapper-promo']} container`}>
        <div className={`${styles['promo-header']} container`}>
          <div className={`${styles['promo-header-title']} rubik-700`}>
            Promo Today
          </div>
          <div className={`${styles['promo-header-title-sub']} rubik-400`}>
            Coupons will be updated every weeks. Check them out!
          </div>
        </div>
        <div className={`${styles['wrapper-promo-list']}`}>
          <div className={`${styles['wrapper-promo-list-card']}`}>
            <picture>
              <img src='/mbak.png' alt='person' />
            </picture>
            <div className={`${styles['wrapper-name-promo']}`}>
              <div className={`${styles['wrapper-name-promo-title']} rubik-400`}>
                Happy Mother&apos; Day!
              </div>
              <div className={`${styles['wrapper-name-promo-sub']} rubik-400`}>
                Get one of our favorite menu for free!
              </div>
            </div>
          </div>
          <div className={`${styles['wrapper-promo-list-card-sec']}`}>
            <picture>
              <img src='/om.png' alt='person' />
            </picture>
            <div className={`${styles['wrapper-name-promo']}`}>
              <div className={`${styles['wrapper-name-promo-title']} rubik-400`}>
                Happy Mother&apos; Day!
              </div>
              <div className={`${styles['wrapper-name-promo-sub']} rubik-400`}>
                Get one of our favorite menu for free!
              </div>
            </div>
          </div>
          <div className={`${styles['wrapper-promo-list-card-third']}`}>
            <picture>
              <img src='/mbah.png' alt='person' />
            </picture>
            <div className={`${styles['wrapper-name-promo']}`}>
              <div className={`${styles['wrapper-name-promo-title']} rubik-400`}>
                Happy Mother&apos; Day!
              </div>
              <div className={`${styles['wrapper-name-promo-sub']} rubik-400`}>
                Get one of our favorite menu for free!
              </div>
            </div>
          </div>
          <button type='button' className={`${styles['btn-coupon']} rubik-600`}>
            Apply Coupon
          </button>
        </div>
        <div className={`${styles['terms-coupon']}`}>
          <div className={`${styles['terms-coupon-title']}`}>
            Terms and Condition
          </div>
          <div className={`${styles['terms-coupon-list']}`}>
            <div className={`${styles['terms-coupon-list-content']}`}>
              1. You can only apply 1 coupon per day
            </div>
            <div className={`${styles['terms-coupon-list-content']}`}>
              2. It only for dine in
            </div>
            <div className={`${styles['terms-coupon-list-content']}`}>
              3. Buy 1 get 1 only for new user
            </div>
            <div className={`${styles['terms-coupon-list-content']}`}>
              4. Should make member card to apply coupon
            </div>
          </div>
        </div>
      </div>
    </>
  )
}