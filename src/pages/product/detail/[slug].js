import Layout from '../../../layout'
import Footer from '../../../components/FooterNormal'
import ContentDetail from '../../../components/ContentDetail'
import { getDataCookie } from '../../../middleware/verifyAuth'

export default function Detail({ slug }) {
  return (
    <>
      <Layout title='Detail Product' withNavbar >
        <ContentDetail slug={slug} />
        <Footer />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.params
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
      slug, data: dataCookie
    }
  }
}

