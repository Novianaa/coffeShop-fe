import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

function Layout({ title = 'Home', withNavbar = false, children }) {
  return (
    <div>
      <Head>
        <meta name="theme-color" content="#6A4029" />
        <meta name="description" content="Author: Novia,
        Name Web : Coffee-shop, Category: Order Coffee"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta httpEquiv="Content-Security-Policy" content="font-src 'self' data:; img-src 'self' data:; default-src 'self' http://121.0.0:3000/" /> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />

        <title>{title} - Coffee Shop</title>
      </Head>
      {withNavbar &&
        (<Navbar />)}
      <main>{children}</main>
    </div>
  )
}

export default Layout