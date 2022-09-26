import axios from '../../utils/axios'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Cookie from "js-cookie"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image"
import Logo from '/public/coffee1.svg'

export default function FormRegister() {
  const router = useRouter()
  const [formRegister, setFormRegister] = useState({ email: '', password: '', no_phone: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/auth/register`, formRegister)
      .then((res) => {
        console.log(res)
        router.push('/login')
      }).catch((err) => {
        console.log(err)
        toast.error(err.response.data.message)
      })
  }
  const handleChangeText = (e) => {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="signup-right-header">
        <div className="signup-right-header-left">
          <div className="image-logo">
            <Image src={Logo} alt='logo' />
          </div>
          <div className="name-web rubik-700">Coffee Shop</div>
        </div>
        <div className="signup-right-header-right">
          <button type="button" className="btn-to-login rubik-600">Login</button>
        </div>
      </div>
      <div className="text-signup rubik-700 text-center">
        Sign Up
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
        <div className="field-no-phone" required>
          <label className="form-label label-form rubik-600">Phone Number</label>
          <input type="text" className=" form-input-login" name="no_phone" onChange={handleChangeText} />
        </div>
        <button className="btn-login w-100 rubik-600" onClick={handleSubmit}>
          Sign Up
        </button>
        <button type="button" className="btn-google w-100 bi bi-google" > Login with Google</button>
      </form>
      <ToastContainer autoClose={2000} />

    </>
  )
}