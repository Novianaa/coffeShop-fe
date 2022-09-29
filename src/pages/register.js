import Image from "next/image";
import FormRegister from "../components/FormRegister";
import Layout from "../layout";
import Footer from '../components/Footer'
import BgAuth from '/public/hero3.png'

export default function Register() {

  return (
    <>
      <Layout title="Register">
        <div className="signup">
          <div className="wrapper-signup">
            <div className="signup-left-reg">
              <picture>
                <img src='/hero3.png' alt='bg-auth' className="wrapper-bg-auth-reg" />
              </picture>

            </div>
            <div className="signup-right">
              <FormRegister />
            </div>
          </div>

        </div>
        <div className="member-card-reg container">
          <div className="member-card-reg-left">
            <div className="member-card-reg-left-header rubik-700">Get your member card now!</div>
            <div className="member-card-reg-left-sub rubik-400">Let&apos;s join with our member and enjoy the deals.</div>
          </div>
          <div className="member-card-reg-right">
            <button type="button" className="btn-member-card-reg rubik-600">Create Now</button>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  )
}