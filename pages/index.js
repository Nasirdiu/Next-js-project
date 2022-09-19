import Client from '../components/Client/Client'
import Banner from '../components/Home/Banner'
import Images from '../components/Home/Images'
import Hotel from '../components/Hotel/Hotel'
import Review from '../components/Review/Review'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'

export default function Home() {
  return (
    <div className='bg-black'>
          <Navbar/>
          <Banner></Banner>
          <Images/>
          <Hotel/>
          <Review/>
          <Client/>
          <Footer></Footer> 
    </div>
  )
}
