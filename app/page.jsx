import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Herocard from './components/Herocard'
import Explore from './components/Explore'
import Client from './components/Client'
import Categories from './components/Categories'
import NewsArticle from './components/NewsArticle'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Hero/>
      <Herocard/>
      <HowItWorks/>
      <Explore/>
      <Client/>
      <Categories/>
      <NewsArticle/>
      <Contact/>
      <Footer/>
    </>
  )
}
