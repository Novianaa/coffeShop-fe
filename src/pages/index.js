import React, { Component } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Layout from "../layout"
import Footer from '../components/Footer'
import Bg from '../../public/bg.png'
import TeamWork from '../../public/team.png'
import Map from '/public/map.png'
import Netflix from '/public/netflix.png'
import Reddit from '/public/reddit.png'
import Amazon from '/public/amazon.png'
import Discord from '/public/discord.png'
import Spotify from '/public/spotify.png'
import Logo from '/public/coffee1.svg'
import Favorite from "../components/Favorite";
import Review from "../components/Review";
// import Layout from "../layout";

export default function Home() {
  return (
    <>
      <Layout withNavbar>
        <div className='header'>
          <div className='header-text '>
            <Image src={Bg} alt='bg' className='wrapper-bg' />
            <div className='container header-text-wrapper rubik-700'>
              <div className='main-slogan'>Start Your Day with Coffee and Good Meals</div>
              <div className='sub-slogan'>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</div>
              <button type="button" className="btn-started rubik-700">Get Started</button>
            </div>
          </div>
        </div>
        <div className='counts container'>
          <div className='count-staff'>
            <div className='round'>
              <i className="bi bi-person-fill icon-count" />
            </div>
            <div className='text-count'>
              <div className='rubik-700 count-all'>90+</div>
              <div className='rubik-400 name-of'>Staff</div>
            </div>
          </div>
          <div className='vertikal-line'></div>
          <div className='count-stores'>
            <div className='round'>
              <i className="bi bi-geo-alt-fill icon-count" />
            </div>
            <div className='text-count'>
              <div className='rubik-700 count-all'>30+</div>
              <div className='rubik-400 name-of'>Stores</div>
            </div>
          </div>
          <div className='vertikal-line'></div>
          <div className='count-customers'>
            <div className='round'>
              <i className="bi bi-heart icon-count" />
            </div>
            <div className='text-count'>
              <div className='rubik-700 count-all'>800+</div>
              <div className='rubik-400 name-of'>Customers</div>
            </div>
          </div>
        </div>
        <div className='team-work container'>
          <div className='team-work-left'>
            <Image src={TeamWork} alt='team-work' />
          </div>
          <div className='team-work-right'>
            <div className='team-work-right-child1 rubik-600'>We Provide Good Coffee and Healthy Meals</div>
            <div className='team-work-right-child2 rubik-400'>You can explore the menu that we provide with fun and have their own taste and make your day better.</div>
            <div className='team-work-right-child3 rubik-400'>
              <div className='team-work-right-child3-check'>
                <div className="bi bi-check-circle-fill" />
                <div className='team-work-right-child3-check-text'>
                  High quality beans
                </div>
              </div>
              <div className='team-work-right-child3-check'>
                <div className="bi bi-check-circle-fill" />
                <div className='team-work-right-child3-check-text'>
                  Healthy meals, you can request the ingredients
                </div>
              </div>
              <div className='team-work-right-child3-check'>
                <div className="bi bi-check-circle-fill" />
                <div className='team-work-right-child3-check-text'>
                  Chat with our staff to get better experience for ordering
                </div>
              </div>
              <div className='team-work-right-child3-check'>
                <div className="bi bi-check-circle-fill " />
                <div className='team-work-right-child3-check-text'>
                  Free member card with a minimum purchase of IDR 200.000.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-background">
          <Favorite />
          <div className='our-store container'>
            <div className='our-store-title text-center'>
              <div className='our-store-title-head rubik-700'>Visit Our Store in the Spot on the Map Below
              </div>
              <div className='our-store-title-sub rubik-400'>See our store in every city on the spot and spen your good day there. See you soon!
              </div>
            </div>
            <div className='store-map'>
              <Image src={Map} alt='map' />
            </div>
          </div>
          <div className='our-partner container'>
            <div className='our-partner-header rubik-600 text-center'>Our Partner</div>
            <div className='our-partner-image'>
              <div className='wrapper-image-partner'>
                <Image src={Netflix} alt='Netflix' />
              </div>
              <div className='wrapper-image-partner'>
                <Image src={Reddit} alt='Reddit' />
              </div>
              <div className='wrapper-image-partner'>
                <Image src={Amazon} alt='Amazon' />
              </div>
              <div className='wrapper-image-partner'>
                <Image src={Discord} alt='Discord' />
              </div>
              <div className='wrapper-image-partner'>
                <Image src={Spotify} alt='Spotify' />
              </div>
            </div>
          </div>
          <Review />
          <div className="check-promo container">
            <div className="check-promo-left">
              <div className="check-promo-left-header rubik-700">Check our promo today!</div>
              <div className="check-promo-left-sub rubik-400">Let&apos;s see the deals and pick yours!</div>
            </div>
            <div className="check-promo-right">
              <button type="button" className="btn-check-promo rubik-600">See Promo</button>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  )
}
