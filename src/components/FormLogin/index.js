import Image from "next/image"
import Logo from '/public/coffee1.svg'
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Cookie from "js-cookie"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function FormLogin() {
  const router = useRouter()
  const [formLogin, setFormLogin] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`https://novia-coffeeshop-be.vercel.app/api/v1/auth/login`, formLogin)
      .then((res) => {
        console.log(res)
        Cookie.set("token", res.data.data.token)
        Cookie.set("user_id", res.data.data.user_id)
        Cookie.set("email", res.data.data.email)
        router.push('/')
      }).catch((err) => {
        console.log(err)
        toast.error(err.response.data.message)
      })
  }
  const handleChangeText = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="login-right-header">
        <div className="login-right-header-left">
          <div className="image-logo">
            <Image src={Logo} alt='logo' />
          </div>
          <div className="name-web rubik-700">Coffee Shop</div>
        </div>
        <div className="login-right-header-right">
          <button type="button" className="btn-to-signup rubik-600">Sign Up</button>
        </div>
      </div>
      <div className="text-login rubik-700 text-center">
        Login
      </div>
      <form className="wrapper-login-form">
        <div className="field-email" required>
          <label className="form-label label-form rubik-600">Email</label>
          <input type="email" className=" form-input-login" name="email" onChange={handleChangeText} />
        </div>
        <div className="field-pass" required>
          <label className="form-label label-form rubik-600">Password</label>
          <input type="password" className=" form-input-login" name="password" onChange={handleChangeText} />
        </div>
        <div className="text-forgot-pass rubik-600">Forgot password?</div>
        <button className="btn-login w-100 rubik-600" onClick={handleSubmit} crossOrigin=''>
          Login
        </button>
        <button type="button" className="btn-google w-100 bi bi-google" > Login with Google</button>
      </form>
      <ToastContainer autoClose={2000} />
    </>
  )
}