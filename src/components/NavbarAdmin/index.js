import Image from 'next/image'
import logo from '../../../public/coffee1.svg'
import cookies from "js-cookie";


export default function Home() {
  const token = cookies.get("token");

  return (
    <>
      <div className='wrapper-navbar-admin'>
        <div className="container navbar-admin">
          <div className="navbar-admin-left">
            <div><Image alt="logo" src={logo} /></div>
            <div className='name-web rubik-700'>Coffee Shop</div>
          </div>
          <div className='navbar-admin-right'>
            <div className="navbar-admin-menu">
              <div className="navbar-admin-sub-menu rubik-400">Home</div>
              <div className="navbar-admin-sub-menu rubik-400">Product</div>
              <div className="navbar-admin-sub-menu rubik-400">Orders</div>
              <div className="navbar-admin-sub-menu rubik-400">Dashboard</div>
            </div>
            {!token ? (<div className="navbar-admin-menu-right w-40">
              <button type='button' className="navbar-admin-menu-right-btn rubik-400">Login</button>
              <button type='button' className="navbar-admin-menu-right-btn-right rubik-400">Sign Up</button>
            </div>) : (<div className="navbar-admin-menu-right">
              <div className="navbar-admin-sub-menu-right"><i className="bi bi-search custom-icon" /></div>
              <div className="navbar-admin-sub-menu-right ">
                <i className="bi bi-chat-right custom-icon-chat" /></div>
              <div className="navbar-admin-sub-menu-right"><Image src={logo} alt='profile' /></div>
            </div>)}



          </div>
        </div>
      </div>
    </>
  )
}