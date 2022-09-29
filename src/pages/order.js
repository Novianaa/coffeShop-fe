import Layout from "../layout";
import React, { Component } from "react";
import styles from '../styles/Order.module.css'
import Bg from '../../public/hero1.png'
import Image from "next/image";
import { getDataCookie } from '../middleware/verifyAuth'
import cookies from "next-cookies"
import Cookies from "js-cookie";

export default function Order(props) {
  console.log(props, '445')
  return (
    <>
      <Layout withNavbar title="Payment"></Layout>
      <Image src={Bg} alt='Background' className={`${styles["wrapper-bg"]}`} />
      <div className={`${styles["wrapper-order-page"]} container`}>
        <div className={`${styles["order-page-left"]}`}>
          <div className={`${styles["order-page-left-text"]} rubik-700`}>
            Checkout your item now!
          </div>

          <div className={`${styles["order-page-left-content"]}`}>
            <div className={`${styles["order-page-left-content-header"]} poppins-900`}>
              Order Summary
            </div>
            <div>
              <div className={`${styles["order-page-left-content-main"]}`}>
                <div>
                  <picture>
                    <img src={`http://localhost:8000/static/products/2022-07-31T20-17-00.992Zpistachio.webp`} alt='product-image' width={100} height={100} className={`${styles["order-page-left-img"]}`} />
                  </picture>
                </div>
                <div className={`${styles["order-page-left-content-text"]}`}>
                  <div>
                    <div className="">Ice Cream</div>
                    <div className="">X 2</div>
                  </div>
                  <div>
                    <div className="">IDR 20000</div>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div className={`${styles["order-page-content-main-display"]}`}>
                  <div>
                    SUBTOTAL
                  </div>
                  <div>
                    IDR 20000
                  </div>
                </div>
                <div className={`${styles["order-page-content-main-display"]}`}>
                  <div>
                    TAX
                  </div>
                  <div>
                    IDR 2000
                  </div>
                </div>
                <div className={`${styles["order-page-content-main-display-bold"]} poppins-900`}>
                  <div>
                    TOTAL
                  </div>
                  <div>
                    IDR 22000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={`${styles["order-page-right"]}`}>hjk</div>
         */}
        <div className={`${styles["order-page-right"]}`}>
          <div className={`${styles["order-page-right-first"]}`}>
            <div className={`${styles["order-page-right-text"]} rubik-700`}>
              Address details
            </div>
            <div className={`${styles["order-page-right-content"]}`}>
              {/* <div> */}
              <div >
                <span>Delivery to </span>
                <span>alamat</span>
              </div>
              <hr />
              <div>
                <div>
                  Km 5 refinery road oppsite re public road, effurun, Jakarta
                </div>
              </div>
              <hr />
              <div>
                <div>
                  +62 81348287878
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["order-page-right-second"]}`}>
            <div className={`${styles["order-page-right-text"]} rubik-700`}>
              Payment
            </div>
            <div className={`${styles["order-page-right-content"]}`}>
              <input name="card" type="radio" /> Card
              <hr />
              <input name="bank" type="radio" /> Bank Account
              <hr />
              <input name="cod" type="radio" /> COD
            </div>
          </div>
          <div className={`${styles["order-page-right-first"]}`}>
            <button type="button" className={`${styles["btn-order"]} poppins-500`}>Confirm and pay</button>
          </div>
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps(context) {
  const id = Cookies.get('idOrder')
  const token = Cookies.get('token')
  // const myHeaders = new Headers({
  //   Content- Type: 'application/json',

  // });
  const res = await fetch(`https://novia-coffeeshop-be.vercel.app/api/v1/order/${id}`, {
    method: 'GET',
    headers: { authorization: `Bearer ${token}` },
  })
  const dataOrder = await res.json()
  console.log(dataOrder, 'vvv')
  const dataCookie = await getDataCookie(context);
  if (!dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: dataCookie, ...dataOrder
    }
  }
}