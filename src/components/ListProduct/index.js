import styles from '../../styles/Product.module.css'
import { GetProducts, GetDetailsProduct } from '../../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import cookie from "js-cookie"

import cookies from 'next-cookies'

export default function ListProduct() {

  let { data, loading } = useSelector((s) => s.product)
  const dispatch = useDispatch()
  const [category, setCategory] = useState({})
  const { category_id } = category
  useEffect(() => {
    dispatch(GetProducts(category.category_id))
  }, [category.category_id, dispatch])
  console.log(data, category.category_id, 'dsdsd')
  return (
    <>
      <div className={`${styles['wrapper-list-product']} container`}>
        <div className={`${styles['wrapper-list-product-category']}`}>
          {/* <button className={`${styles['wrapper-list-product-category-title']} rubik-700`} name='Favorite'
            onClick={(e) => {
              setCategory({
                ...category,
                category_id: "favorite"
              })
            }}>
            <div className={`${styles['wrapper-list-product-category-title-line']}`}>
              Favorite & Promo
            </div>
          </button> */}
          <div className={`${styles['wrapper-list-product-category-title']} rubik-700`} onClick={(e) => {
            setCategory({
              ...category,
              category_id: "coffee"
            })
          }}>
            <div className={`${styles['wrapper-list-product-category-title-line']}`}>Coffee
            </div>
          </div>
          <div className={`${styles['wrapper-list-product-category-title']} rubik-700`} onClick={(e) => {
            setCategory({
              ...category,
              category_id: "non-coffee"
            })
          }}>
            <div className={`${styles['wrapper-list-product-category-title-line']}`}>
              Non Coffee
            </div>
          </div>
          <div className={`${styles['wrapper-list-product-category-title']} rubik-700`} onClick={(e) => {
            setCategory({
              ...category,
              category_id: "foods"
            })
          }}>
            <div className={`${styles['wrapper-list-product-category-title-line']}`}>Foods</div>
          </div>
        </div>
        <div className={`${styles['wrapper-card-menu-product']}`}>
          {data.map((product, index) => {
            return (
              <Link href={`/product/detail/${product.slug}`} key={product.slug}>
                <div key={index} name={product.slug} className={`${styles['wrapper-card-menu-product-list']}`}>

                  <div className={`${styles['wrapper-image-menu']}`}>
                    <picture>
                      <img crossOrigin="anonymous" src={`http://localhost:8000/static/products/${product.photo}`} alt={product.name} className={`${styles['image-menu']}`} />
                    </picture>
                  </div>
                  <div className={`${styles['card-menu-title']} poppins-900`}>
                    {product.name}
                  </div>
                  <div className={`${styles['card-menu-title-sub']} poppins-900`}>
                    IDR {product.price}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}