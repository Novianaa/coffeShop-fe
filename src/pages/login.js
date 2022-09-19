import Image from "next/image";
import FormLogin from "../components/FormLogin";
import Layout from "../layout";
import Footer from '../components/Footer'
// import BgAuth from '/hero3.png'


export default function Login() {

  return (
    <>
      <Layout title="Login">
        <div className="login">
          <div className="wrapper-login">
            <div className="login-left">
              <img src='/hero3.png' alt='bg-auth' className="wrapper-bg-auth" />
            </div>
            <div className="login-right">
              <FormLogin />
            </div>
          </div>

        </div>
        <div className="member-card container">
          <div className="member-card-left">
            <div className="member-card-left-header rubik-700">Get your member card now!</div>
            <div className="member-card-left-sub rubik-400">Let&apos;s join with our member and enjoy the deals.</div>
          </div>
          <div className="member-card-right">
            <button type="button" className="btn-member-card rubik-600">Create Now</button>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  )
}