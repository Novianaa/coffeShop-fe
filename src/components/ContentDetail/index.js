import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cookie from "js-cookie"
import styles from '../../styles/Detail.module.css'
import { GetDetailsProduct } from '../../redux/actions/product'
import { PostOrder } from '../../redux/actions/order'
import Link from 'next/link';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function ContentDetail({ slug }) {
  let { data, loading } = useSelector((s) => s.product)
  let [formOrder, setFormOrder] = useState({ slug: data[0].slug, qty: '', sub_total: '', total: '', tax: '' })
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetDetailsProduct(slug))
  }, [dispatch, slug])

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  formOrder.qty = count
  formOrder.sub_total = data[0].price * formOrder.qty
  formOrder.tax = formOrder.sub_total * 10 / 100
  formOrder.total = formOrder.sub_total + formOrder.tax

  const router = useRouter()
  const [dataOrder, setDataOrder] = useState({ data: [] })

  const handleOrder = async (dataOrder) => {
    const token = Cookies.get("token")
    // e.preventDefault()
    try {
      const result = await axios({
        method: 'POST',
        url: `https://novia-coffeeshop-be.vercel.app/api/v1/order`,
        headers: {
          authorization: `Bearer ${token}`
        },
        data: formOrder,
      })
      // console.log(first)
      setDataOrder({
        data: result.data.data
      })
      Cookies.set("idOrder", result.data.data.id)
      router.push('/order')
    }
    catch (err) {
      console.log(err)
      toast.error(err.response.data.message)
    }

  }

  console.log(dataOrder, 'sds')
  console.log(formOrder, 'qqq')

  return (
    <>
      {data.map((detail, index) => {
        // console.log(dataOrder, 'ghgh')
        return (
          <div key={index} className={`${styles['wrapper-detail-product']} container`}>
            <div className={`${styles['wrapper-detail-product-header']} rubik-400`}>
              <span className={`${styles['name-category']}`}>{detail.category_name} </span> <span className={`${styles['name-product']} fw-bold`}> &gt; {detail.name}</span>
            </div>
            <div className={`${styles['wrapper-detail-product-content']}`}>
              <div className={`${styles['wrapper-detail-product-content-left']}`}>
                <div className={`${styles['wrapper-detail-product-photo-ex']}`}>
                  <picture>
                    <img src={`http://localhost:8000/static/products/${detail.photo}`} alt='coldbrew' className={`${styles['wrapper-detail-product-photo']}`} />
                  </picture>
                </div>

                <div className={`${styles['wrapper-detail-delivery']} poppins-400 `}>
                  Delivery only on <span className='fw-bold'>Monday to friday</span> at  <span className='fw-bold'>1 - 7 pm</span>
                </div>
              </div>
              <div className={`${styles['wrapper-detail-product-content-right']}`}>
                <div className={`${styles['wrapper-detail-product-content-right-name']} poppins-900`}>
                  {detail.name}
                </div>
                <div className={`${styles['wrapper-detail-product-content-right-desc']} poppins-400`}>
                  {detail.description}
                </div>
                <div className={`${styles['wrapper-price-qty']} d-flex justify-content-between`}>
                  <div className={`${styles['wrapper-count-qty']}`}>
                    {count < 1 ? <button className={`${styles['wrapper-count-qty-btn-plus']} poppins-900`} onClick={handleDecrement} disabled>-</button> : <button className={`${styles['wrapper-count-qty-btn-plus']} poppins-900`} onClick={handleDecrement}>-</button>}
                    <div className={`${styles['wrapper-count-qty-text']} poppins-900`}>{count}</div>
                    <button className={`${styles['wrapper-count-qty-btn-min']} poppins-900`} onClick={handleIncrement}>+</button>
                  </div>
                  <div className={`${styles['wrapper-detail-product-content-right-price']} poppins-500`}>
                    IDR {detail.price}
                  </div>
                </div>
                <div className={`${styles['wrapper-selection']} `}>
                  <select name="select-size" id="size" className={`${styles['costum-input']} poppins-400`} >
                    <option >Select Size</option>
                    <option value='R'>R</option>
                    <option value='L'>L</option>
                    <option value='XL'>XL</option>
                  </select>
                  <select name="delivery" id="delivery" className={`${styles['costum-input']} poppins-400`} >
                    <option >Select Delivery Method</option>
                    <option value='pick-up'>Pick Up</option>
                    <option value='dine-in' >Dine In</option>
                  </select>
                </div>
                <button className={`${styles['wrapper-btn-checkout']} poppins-400`} onClick={() => handleOrder(dataOrder)}>Checkout</button>
              </div>
            </div>
          </div>
        )
      })}

      <ToastContainer autoClose={2000} />
    </>
  )
}