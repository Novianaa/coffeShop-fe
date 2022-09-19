import Layout from '../../layout'
import styles from '../../styles/Product.module.css'
import SidePromo from '../../components/SidePromo'
import Footer from '../../components/FooterNormal'
import ListProduct from '../../components/ListProduct'
import Line from '../../components/Line'
import axios from '../../utils/axios'
import { getDataCookie } from '../../middleware/verifyAuth'

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
    props: { data: dataCookie },
  };
}
export default function Product() {

  return (
    <>
      <Layout title='Product' withNavbar >
        <div className={`${styles['wrapper-product']} container`}>
          <SidePromo />
          <Line />
          <ListProduct />
        </div>
        <Footer />
      </Layout>
    </>
  )
}

