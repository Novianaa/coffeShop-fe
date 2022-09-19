import Layout from "../layout";
import React, { Component } from "react";
import styles from '../styles/Order.module.css'
import Bg from '../../public/hero1.png'
import Image from "next/image";
import { getDataCookie } from '../middleware/verifyAuth'

export default function Order() {
  // const { x } = router.query
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
            <div className={`${styles["order-page-left-content-main"]}`}>
              <div >hjkhk</div>
              <div >hjkhk</div>

            </div>
          </div>
        </div>
        <div className={`${styles["order-page-right"]}`}>hjk</div>
      </div>
      {/* </div> */}
    </>
  )
}
export async function getServerSideProps(context) {

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
      data: dataCookie
    }
  }
}