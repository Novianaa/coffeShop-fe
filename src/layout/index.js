import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../components/Navbar'

function Layout({ title = 'Home', withNavbar = false, children }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#6A4029" />
        <meta name="description" content="Author: Novia,
        Name Web : Coffee-shop, Category: Order Coffee"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta httpEquiv="Content-Security-Policy" content="font-src 'self' data:; img-src 'self' data:; default-src 'self' http://121.0.0:3000/" /> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />

        <title>{title} - Coffee Shop</title>
      </Head>
      {withNavbar &&
        (<Navbar />)}
      <main>{children}</main>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous" async />
    </>
  )
}

export default Layout