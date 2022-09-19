import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/coffee1.svg'
import cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.css";
import("bootstrap/dist/js/bootstrap");
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';


export default function Home() {
  const token = cookies.get("token");
  const AuthLogout = () => {
    cookies.remove('user_id'),
      cookies.remove('token')
  }

  return (
    <>
      <div className='wrapper-navbar'>
        <div className="container navbar">
          <div className="navbar-left">
            <div><Image alt="logo" src={logo} /></div>
            <div className='name-web rubik-700'>Coffee Shop</div>
          </div>
          <div className='navbar-right'>
            <div className="navbar-menu">
              <Link href={'/'}><button className="navbar-sub-menu rubik-400">Home</button></Link>
              <Link href={'/product'}><button className="navbar-sub-menu rubik-400">Product</button></Link>
              <Link href={'/cart'}><button className="navbar-sub-menu rubik-400">Your Cart</button></Link>
              <Link href={'/history'}><button className="navbar-sub-menu rubik-400">History</button></Link>
            </div>
            {!token ? (<div className="navbar-menu-right w-40">
              <Link href={'/login'}>
                <button type='button' className="navbar-menu-right-btn rubik-400" >Login</button>
              </Link>
              <Link href={'/register'}>
                <button type='button' className="navbar-menu-right-btn-right rubik-400">Register</button>
              </Link>

            </div>) : (
              <div className="navbar-menu-right">
                <div className="navbar-sub-menu-right"><i className="bi bi-search custom-icon" /></div>
                <div className="navbar-sub-menu-right ">
                  <i className="bi bi-chat-right custom-icon-chat" /></div>
                <div className='dropdown'>
                  <div className="wrapper-photo-profile" role="button" data-bs-toggle='dropdown' aria-expanded="false">
                    <Image src={logo} alt='profile' className="photo-profile" />
                  </div>
                  <ul className='dropdown-menu' aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile </a>
                    </li>
                    <li className="dropdown-item" onClick={AuthLogout}>Log Out</li>
                  </ul>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  )
}